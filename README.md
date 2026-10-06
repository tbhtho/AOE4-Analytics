# RTSLytics

[![CI](https://github.com/tbhtho/AOE4-Analytics/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tbhtho/AOE4-Analytics/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Platform](https://img.shields.io/badge/platform-Windows-blue.svg)

Age of Empires IV companion for scouting, an in-game overlay, and post-game stats.

**[Download RTSLytics v0.6.1 for Windows](https://github.com/tbhtho/AOE4-Analytics/releases/tag/v0.6.1)** — download `RTSLytics-0.6.1-portable.exe` and run it. No installer is required. The release includes a SHA-256 checksum.


## Screenshots

<p align="center">
  <img src="docs/screenshots/overlay.png" width="720" alt="In-game overlay"><br>
  <sub><b>In-game overlay</b> — civilizations, army units, counters, and match time</sub>
</p>

<table>
  <tr>
    <td width="50%"><img src="docs/screenshots/dashboard.png" width="100%" alt="Dashboard"><br><sub><b>Dashboard</b> — ranks, rating, recent form, match prep</sub></td>
    <td width="50%"><img src="docs/screenshots/my-stats.png" width="100%" alt="My Stats"><br><sub><b>My Stats</b> — playstyle radar, performance, rating over time</sub></td>
  </tr>
</table>

<details>
<summary>More screenshots: Scout, Civ Meta, Guides, and Data Studio</summary>

<table>
  <tr>
    <td width="50%"><img src="docs/screenshots/scout.png" width="100%" alt="Scout"><br><sub><b>Scout</b> — ladder leaderboard and opponent lookup</sub></td>
    <td width="50%"><img src="docs/screenshots/civ-meta.png" width="100%" alt="Civ Meta"><br><sub><b>Civ Meta</b> — live tier list and win rates</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/guides.png" width="100%" alt="Guides"><br><sub><b>Guides</b> — community build orders and counter helper</sub></td>
    <td width="50%"><img src="docs/screenshots/data-studio.png" width="100%" alt="Data Studio"><br><sub><b>Data Studio</b> — filter your own match history</sub></td>
  </tr>
</table>

</details>

## Quick start

1. Run the portable app and select your player profile.
2. Use **Borderless or Windowed Fullscreen** in AoE4 for the overlay.
3. Check the dashboard or scout an opponent, then review synced matches in **My Stats** and **Data Studio**.

Windows is required for the full overlay and local-file features. RTSLytics reads public APIs and your own AoE4 files; it does not modify the game.

## Features

- **Scout and prepare:** opponent ranks, ratings, recent form, favorite civilizations, public matches, exact personal head-to-head history, and practical team roles based on the civilization lineup.
- **Live overlay:** matchup bar, civ flags, ranks, key units and counters, rating-based win odds, optional live APM, and a session record with net rating.
- **Follow a plan:** pin community build orders in Guides; match-clock steps and age-up pace targets follow your local game clock, including pauses. Adaptive Build Coach gives conditional in-match responses and evidence-linked post-game recovery plans.
- **Review each game:** result card, Turning-Point Story, economy grade, APM, trends, and raw team contribution breakdowns. Benchmark Lens compares recent stretches and filtered samples with sample sizes shown.
- **Explore your data:** Matchup Lab separates global directional data from personal results; Data Studio filters by civ, opponent, map, format, patch/season, result, duration, and time window, with bookmarkable views.
- **Learn and play:** civilization pages, tier lists, counters, build orders, landmarks, and matchup stats. Local support covers ranked, Quick Match, custom games, and vs-AI where files provide the data; written guides remain work in progress.

Community build orders are adapted from [AoE4Guides](https://aoe4guides.com/); the app credits original authors and links to each source.

## Overlay and optional Steam connection

The overlay appears when a live match is detected. Default hotkeys, rebindable in Settings: **Alt + O** shows/hides the overlay; **Ctrl + Alt + O** moves widgets.

Local detection uses your files under `Documents\My Games\Age of Empires IV`. Network requests go to AoE4World, Relic's community API, and, if connected, Steam and its stat-summary host. Connecting Steam is optional and retrieves your own ranked post-game summaries. QR approval is recommended; password sign-in sends the password only to Steam for that login and does not store it. Saved session tokens use the OS keychain.

## Documentation

[Development and contribution](CONTRIBUTING.md) · [Detailed features and additional screenshots](docs/PROJECT_DETAILS.md) · [Third-party notices](NOTICE)

## License

RTSLytics' own source code is licensed under the [MIT License](LICENSE). Bundled Age of Empires IV game data and civilization flag images are © Microsoft and used for non-commercial purposes under Microsoft's Game Content Usage Rules — they are not covered by MIT. See [NOTICE](NOTICE) for details.

## Legal

RTSLytics is not affiliated with Microsoft, Relic Entertainment, or World's Edge. Age of Empires IV and related assets belong to Microsoft and are used under Microsoft's Game Content Usage Rules.
