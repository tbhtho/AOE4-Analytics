import { civFromToken } from '@domain/statsSummary'

/** A table metric is comparable only when the summary supplied a finite number. */
export function finiteMetricValue(value: number | string | null | undefined): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null
}

/** Return the last point at the greatest timestamp without copying or sorting the input. */
export function latestByTime<T extends { timeSec: number }>(points: readonly T[]): T | null {
  let latest: T | null = null
  for (const point of points) {
    if (latest == null || point.timeSec >= latest.timeSec) latest = point
  }
  return latest
}

type TrainerPlayer = {
  profileId: number | null
  civToken: string | null
}

/**
 * Resolve the player whose build should be graded. Prefer the exact profile id;
 * civ is only a fallback for legacy summaries that contain no player identities.
 * That keeps a same-civ opponent from being graded as the signed-in player.
 */
export function selectTrainerPlayer<T extends TrainerPlayer>(
  players: readonly T[],
  myProfileId: number | null | undefined,
  myCiv: string,
): T | null {
  if (myProfileId != null) {
    const byProfile = players.find((player) => player.profileId === myProfileId)
    if (byProfile) return byProfile
    if (players.some((player) => player.profileId != null)) return null
  }

  return players.find((player) => civFromToken(player.civToken) === myCiv) ?? null
}
