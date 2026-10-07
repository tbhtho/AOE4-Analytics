# RTSLytics feature guide

See the [README](../README.md) for the Windows download and all seven screenshots. Development setup, build commands, and the architecture map are in [CONTRIBUTING.md](../CONTRIBUTING.md).

## Scouting and preparation

- Look up opponents by player name and browse the ladder by game mode and country.
- Check rank, rating, recent form, favorite civilizations, recent public matches, and exact personal head-to-head history.
- Prepare team roles and priorities from the public civilization lineup.

## Overlay controls

Use Borderless or Windowed Fullscreen in AoE4. Exclusive fullscreen is not supported. The overlay appears when a live match is detected.

| Control                                 | Action                                                                        |
| --------------------------------------- | ----------------------------------------------------------------------------- |
| Alt + O                                 | Show or hide the overlay                                                      |
| Ctrl + Alt + O                          | Enter or leave widget placement                                               |
| Settings > Overlay                      | Rebind hotkeys, arrange widgets, reset positions, and adjust opacity or scale |
| Guides > Build Orders > Show in overlay | Pin a build order to the overlay                                              |

Placement mode shows placeholders even outside a match so you can drag each widget into position; locked widgets are click-through. Settings also controls the APM counter, its corner, the matchup troops panel, age-up targets, and session tracker. If the overlay appears on the desktop but not over AoE4, check the **Only show overlay while AoE4 is focused** setting.

- **Matchup bar:** both teams' civilizations, flags, ranks, ratings, key units, and counters. Win odds are an Elo estimate for ranked 1v1s with two rated players, labeled "by rating".
- **Live APM:** counts key presses and mouse clicks only while a match is live and AoE4 is focused. It records counts, not key identities or text; disable it in Settings if you prefer.
- **Session tracker:** today's wins, losses, and net rating change during a match and in the post-game view.
- **Build-order and age-up widgets:** pinned build steps and rank-based Feudal, Castle, and Imperial pace targets follow the local game clock, including pauses.
- **Adaptive Build Coach:** conditional in-match responses and evidence-linked recovery plans after a match.

## Post-game review

- Result cards, Turning-Point Story, economy grade, APM, recent trends, and raw team contribution breakdowns.
- Sortable score, economy, technology, military, resource-over-time, score-over-time, and build-order breakdowns when summary data is available.
- **Benchmark Lens:** compare recent stretches and filtered personal samples; every metric displays the number of observed games.
- **Matchup Lab:** explore global directional matchup data and personal local results separately, with sample counts.

## Data Studio

Filter personal match history by civilization, opponent civilization, map, format, patch, season, result, duration, and recent time window. Filters are stored in the page address so views can be bookmarked. You can exclude AI and custom practice games.

Metrics show the sample with recorded values. Older public matches may lack patch or season metadata, and local/custom matches cannot be assigned a public patch. Filters describe correlation in your own matches, not patch causality or global performance.

## Civilizations, guides, and local modes

- Civilization pages, live tier lists, counters, build orders, landmarks, matchup stats, and maps from AoE4World.
- Search build orders by civilization, build, style, or author and use the Counter Helper. Written guides remain work in progress.
- Ranked, Quick Match, custom games, and vs-AI are supported where local files provide the data.

Many bundled builds are adapted from [AoE4Guides](https://aoe4guides.com/). Sourced builds credit their original authors and link back to the source in the app.

## Data and optional Steam connection

Local match detection and review read logs, session data, match history, and replay headers under `Documents\My Games\Age of Empires IV`. Public scouting and match data come from Relic's community API; search, ladder, tier, matchup, and map data also use AoE4World. Bundled AoE4World game data and flags are covered by the [third-party notices](../NOTICE).

Connecting Steam is optional. It lets RTSLytics retrieve your own ranked post-game summaries, including exact economy and age-up timings, from Relic and its summary host. QR approval is recommended; password sign-in sends your password only to Steam for that login and never stores it. Saved session tokens are encrypted through the operating system. If OS encryption is unavailable, the token is kept only for the current session.

RTSLytics reads your own game files and the documented services. It does not read game memory, inject into the game, or modify game files. Live economy, unit, and command telemetry is not available; detailed coaching uses public data and local post-game information.

The portable release is for Windows. Overlay, local-file features, and the APM input hook require Windows; the API-backed dashboard, scout, civilization data, and guides can run from source on other platforms.

The source uses the [MIT License](../LICENSE). Microsoft game data and image assets retain their separate non-commercial terms in [NOTICE](../NOTICE).
