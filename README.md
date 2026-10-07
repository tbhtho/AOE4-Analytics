# RTSLytics

[![CI](https://github.com/tbhtho/AOE4-Analytics/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tbhtho/AOE4-Analytics/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) ![Platform: Windows](https://img.shields.io/badge/platform-Windows-blue.svg)

AoE4 companion for scouting, an in-game overlay, and post-game stats.

**[Download RTSLytics v0.6.1 for Windows](https://github.com/tbhtho/AOE4-Analytics/releases/download/v0.6.1/RTSLytics-0.6.1-portable.exe)** and run `RTSLytics-0.6.1-portable.exe`. No installer is required. [Release notes and SHA-256 checksum](https://github.com/tbhtho/AOE4-Analytics/releases/tag/v0.6.1).

<p align="center">
  <img src="assets/screenshots/overlay.png" width="720" alt="AoE4 overlay with Jeanne d'Arc and French civilization flags, unit counters, and a match clock"><br>
  <sub><b>In-game overlay</b> - civilizations, army units, counters, and match time</sub>
</p>

<table>
  <tr>
    <td width="50%"><img src="assets/screenshots/dashboard.png" width="100%" alt="Dashboard with player rating, recent results, ladder ranks, and civilization match preparation"><br><sub><b>Dashboard</b> - ranks, rating, recent form, match prep</sub></td>
    <td width="50%"><img src="assets/screenshots/my-stats.png" width="100%" alt="My Stats with a playstyle radar, performance metrics, and rating history"><br><sub><b>My Stats</b> - playstyle radar, performance, rating over time</sub></td>
  </tr>
</table>

<details>
<summary>More screenshots: Scout, Civ Meta, Guides, and Data Studio</summary>

<table>
  <tr>
    <td width="50%"><img src="assets/screenshots/scout.png" width="100%" alt="Scout player search and ranked leaderboard with country and game-mode filters"><br><sub><b>Scout</b> - ladder leaderboard and opponent lookup</sub></td>
    <td width="50%"><img src="assets/screenshots/civ-meta.png" width="100%" alt="Civ Meta tier list with civilization win rates and rank and game-mode filters"><br><sub><b>Civ Meta</b> - tier list and win rates from AoE4World</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="assets/screenshots/guides.png" width="100%" alt="Guides with searchable community build orders, author attribution, and a Counter Helper tab"><br><sub><b>Guides</b> - community build orders and counter helper</sub></td>
    <td width="50%"><img src="assets/screenshots/data-studio.png" width="100%" alt="Data Studio with civilization, opponent civilization, map, format, patch, season, result, duration, and recent-window filters above sample-labeled metrics"><br><sub><b>Data Studio</b> - filter your own match history</sub></td>
  </tr>
</table>

</details>

## Get started

Select your player profile, then use **Borderless or Windowed Fullscreen** in AoE4 for the overlay. **Alt + O** shows or hides it; **Ctrl + Alt + O** enters widget placement. Rebind both in Settings. Windows is required for the overlay and local-file features. [More controls and setup](docs/PROJECT_DETAILS.md#overlay-controls).

## Features

- **Scout and prepare:** opponent ranks, ratings, recent form, favorite civilizations, public matches, exact personal head-to-head history, and practical team roles based on the civilization lineup.
- **Live overlay:** matchup bar, civ flags, ranks, key units and counters, rating-based win odds for rated ranked 1v1s, optional live APM, and a session record with net rating.
- **Follow a plan:** pin community build orders in Guides; build-order steps and age-up pace targets for your rank follow your local game clock, including pauses. Adaptive Build Coach gives conditional in-match responses and evidence-linked post-game recovery plans.
- **Review each game:** result card, Turning-Point Story, economy grade, APM, trends, and raw team contribution breakdowns. Benchmark Lens compares recent stretches and filtered samples with sample sizes shown for every metric.
- **Explore your data:** Matchup Lab separates global directional data from personal results, each with sample counts. Data Studio filters by civilization, opponent civilization, map, format, patch, season, result, duration, and time window, with bookmarkable views.
- **Learn and play:** civilization pages, tier lists, counters, build orders, landmarks, and matchup stats. Local support covers ranked, Quick Match, custom games, and vs-AI where files provide the data; written guides remain work in progress.

Community build orders are adapted from [AoE4Guides](https://aoe4guides.com/); the app credits original authors and links to each source.

## Data and optional Steam connection

RTSLytics reads your own AoE4 logs, history, and replay headers under `Documents\My Games\Age of Empires IV`, alongside public data from AoE4World and Relic. It does not modify the game.

Optional Steam sign-in retrieves your own ranked economy and age-up summaries from Relic and its summary host. QR approval is recommended. Password sign-in sends your password only to Steam for that login and does not store it; saved session tokens use OS encryption. [Connection details and data limits](docs/PROJECT_DETAILS.md#data-and-optional-steam-connection).

## Documentation

[Feature guide and controls](docs/PROJECT_DETAILS.md) · [Development and contribution](CONTRIBUTING.md) · [Third-party notices](NOTICE)

## License and credits

RTSLytics' own source code uses the [MIT License](LICENSE). Bundled AoE4 game data and images are © Microsoft and used for non-commercial purposes under Microsoft's Game Content Usage Rules. These assets are not covered by MIT; see [NOTICE](NOTICE).

RTSLytics is not affiliated with Microsoft, Relic Entertainment, or World's Edge. Age of Empires IV and related assets belong to Microsoft.
