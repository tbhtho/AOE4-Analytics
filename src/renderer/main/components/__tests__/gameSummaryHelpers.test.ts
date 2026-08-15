import { describe, expect, it } from 'vitest'
import { finiteMetricValue, latestByTime, selectTrainerPlayer } from '../gameSummaryHelpers'

describe('finiteMetricValue', () => {
  it('keeps real finite numbers, including zero', () => {
    expect(finiteMetricValue(0)).toBe(0)
    expect(finiteMetricValue(42.5)).toBe(42.5)
  })

  it('does not turn missing values into a comparable zero', () => {
    expect(finiteMetricValue(null)).toBeNull()
    expect(finiteMetricValue(undefined)).toBeNull()
    expect(finiteMetricValue(Number.NaN)).toBeNull()
    expect(finiteMetricValue(Number.POSITIVE_INFINITY)).toBeNull()
  })
})

describe('latestByTime', () => {
  it('finds the latest point without reordering the source', () => {
    const points = [{ timeSec: 20 }, { timeSec: 5 }, { timeSec: 10 }]

    expect(latestByTime(points)).toBe(points[0])
    expect(points.map((point) => point.timeSec)).toEqual([20, 5, 10])
  })

  it('returns the last point when timestamps tie and null for an empty series', () => {
    const points = [
      { timeSec: 10, value: 'first' },
      { timeSec: 10, value: 'last' },
    ]

    expect(latestByTime(points)).toBe(points[1])
    expect(latestByTime([])).toBeNull()
  })
})

describe('selectTrainerPlayer', () => {
  const mirrorPlayers = [
    { profileId: 11, civToken: 'eng' },
    { profileId: 22, civToken: 'eng' },
  ]

  it('uses the signed-in profile id before a same-civ fallback', () => {
    expect(selectTrainerPlayer(mirrorPlayers, 22, 'english')).toBe(mirrorPlayers[1])
  })

  it('does not grade a same-civ opponent when the requested profile is absent', () => {
    expect(selectTrainerPlayer(mirrorPlayers, 33, 'english')).toBeNull()
  })

  it('falls back to civilization only for identity-less legacy summaries', () => {
    const legacyPlayers = [
      { profileId: null, civToken: 'fre' },
      { profileId: null, civToken: 'eng' },
    ]
    expect(selectTrainerPlayer(legacyPlayers, 22, 'english')).toBe(legacyPlayers[1])
  })
})
