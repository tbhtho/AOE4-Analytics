import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { GUIDES } from '@data/guides'
import { BUNDLED_BUILD_ORDERS } from '@data/buildOrders'
import type { BuildOrder } from '@domain/buildOrderSchema'
import { buildOrderCivLabel } from '@domain/buildOrderSchema'
import { Card, CardContent } from '@shared/components/ui/card'
import { Badge } from '@shared/components/ui/badge'
import { PageHead } from '../components/PageHead'
import { BuildOrderViewer } from '../components/BuildOrderViewer'
import { CounterHelper } from '../components/tools/CounterHelper'

type Tab = 'guides' | 'builds' | 'counters'

const TABS = [
  { id: 'builds', label: 'Build Orders' },
  { id: 'counters', label: 'Counter Helper' },
  { id: 'guides', label: 'Guides (WIP)' },
] as const

export function Guides() {
  // Tab lives in the URL so a refresh or deep link restores it.
  const [searchParams, setSearchParams] = useSearchParams()
  const tabParam = searchParams.get('tab')
  const tab: Tab = TABS.some((t) => t.id === tabParam) ? (tabParam as Tab) : 'builds'
  const setTab = (id: Tab) =>
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        next.set('tab', id)
        return next
      },
      { replace: true },
    )

  return (
    <div className="animate-fade-in space-y-6">
      <PageHead
        kicker="Library"
        title="Guides & Tools"
        sub="Build orders and a counter helper for Age of Empires IV. Written guides are being revised."
      />

      <p className="rounded-md border border-primary/30 bg-primary/5 px-4 py-3 text-sm leading-relaxed">
        <span className="font-semibold text-primary">Community build credit:</span> many of the
        bundled build orders come from{' '}
        <a
          href="https://aoe4guides.com/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-primary underline-offset-2 hover:underline"
        >
          AoE4Guides
        </a>
        . Original authors and source links appear with sourced builds.
      </p>

      <div className="flex gap-1 border-b border-border" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`-mb-px flex items-center gap-1.5 border-b-2 px-3 py-2 text-sm transition-colors ${
              tab === t.id
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel">
        {tab === 'guides' && <GuideLibrary />}
        {tab === 'builds' && <BuildLibrary />}
        {tab === 'counters' && <CounterHelper />}
      </div>
    </div>
  )
}

function GuideLibrary() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        These written guides are being reviewed and updated. Build Orders and Counter Helper remain
        available in the tabs above.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {GUIDES.map((g) => (
          <Card key={g.slug} className="border-border/60 bg-card/40 opacity-50">
            <CardContent className="space-y-1.5 p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold">{g.title}</h3>
                <Badge variant="secondary">WIP</Badge>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{g.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const DIFFICULTY_TONE: Record<string, string> = {
  easy: 'bg-win/15 text-win',
  medium: 'bg-warn/15 text-warn',
  hard: 'bg-loss/15 text-loss',
}

/**
 * The build library, organized BY CIV. The primary builds are curated from
 * aoe4guides' top-scored community builds (research pass, authors credited);
 * each carries a reasoning line for why it earned its slot.
 */
function BuildLibrary() {
  const builds = BUNDLED_BUILD_ORDERS as unknown as BuildOrder[]
  const [query, setQuery] = useState('')
  // The selected build lives in the URL (`?build=index`) so it survives a refresh.
  const [searchParams, setSearchParams] = useSearchParams()
  const rawIdx = Number(searchParams.get('build'))
  const idx = Number.isInteger(rawIdx) && rawIdx >= 0 && rawIdx < builds.length ? rawIdx : 0
  const setIdx = (i: number) =>
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        next.set('build', String(i))
        return next
      },
      { replace: true },
    )
  const active = builds[idx]

  // Group by primary civ label, keeping library order within each group. Search
  // spans civ, build name, archetype, difficulty, and author so the full bundled
  // library stays practical as more builds are added.
  const needle = query.trim().toLocaleLowerCase()
  const groups = new Map<string, { bo: BuildOrder; i: number }[]>()
  builds.forEach((bo, i) => {
    const civ = buildOrderCivLabel(bo)
    const haystack = [civ, bo.name, bo.archetype, bo.difficulty, bo.author]
      .filter(Boolean)
      .join(' ')
      .toLocaleLowerCase()
    if (needle && !haystack.includes(needle)) return
    const list = groups.get(civ) ?? []
    list.push({ bo, i })
    groups.set(civ, list)
  })
  const civNames = [...groups.keys()].sort((a, b) => a.localeCompare(b))

  return (
    <div className="space-y-4">
      <label className="relative block max-w-lg">
        <span className="sr-only">Search build orders</span>
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by civilization, build, style, or author…"
          className="h-10 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </label>

      {civNames.length === 0 && (
        <div className="rounded-md border border-dashed border-border px-4 py-8 text-center text-sm text-muted-foreground">
          No bundled build orders match “{query.trim()}”.
        </div>
      )}

      <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2 xl:grid-cols-3">
        {civNames.map((civ) => (
          <div key={civ} className="space-y-1">
            <div className="rts-ledger-head">{civ}</div>
            {groups.get(civ)!.map(({ bo, i }) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                className={`flex w-full items-center gap-2 rounded-sm border px-2.5 py-1.5 text-left text-sm transition-colors ${
                  i === idx
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border bg-background text-muted-foreground hover:bg-secondary'
                }`}
              >
                <span className="min-w-0 flex-1 truncate">{bo.name}</span>
                {bo.archetype && (
                  <span className="shrink-0 rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
                    {bo.archetype}
                  </span>
                )}
                {bo.difficulty && (
                  <span
                    className={`shrink-0 rounded-sm px-1.5 py-0.5 text-[10px] font-medium ${DIFFICULTY_TONE[bo.difficulty] ?? ''}`}
                  >
                    {bo.difficulty}
                  </span>
                )}
              </button>
            ))}
          </div>
        ))}
      </div>

      {active?.reasoning && (
        <div className="rounded-sm border border-border bg-card/60 px-4 py-3">
          <div className="rts-ledger-head mb-1">Why this build</div>
          <p className="text-sm leading-relaxed text-muted-foreground">{active.reasoning}</p>
          {active.source && (
            <p className="mt-1.5 text-[11px] text-muted-foreground">
              Build by <span className="text-foreground">{active.author ?? 'community'}</span> —
              curated from{' '}
              <a
                href={active.source}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                aoe4guides.com
              </a>
              . Curation: we pull only the top-scored builds that match proven meta archetypes; step
              timings are the author&apos;s.
            </p>
          )}
        </div>
      )}

      {active && <BuildOrderViewer bo={active} />}
    </div>
  )
}
