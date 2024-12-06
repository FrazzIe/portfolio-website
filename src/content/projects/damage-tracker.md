---
name: Damage tracker
blurb: Built with Lua for FiveM to track, log and extend player damage
startDate: '2024-06-01'
lastUpdated: '2024-11-08'
thumbnail: /src/assets/projects/damage-tracker/server_logs.webp
images:
- src: /src/assets/projects/damage-tracker/server_logs.webp
  alt: Console output logs for recent damage'
- src: /src/assets/projects/damage-tracker/grafana_loki_overview.webp'
  alt: Collection of logs ingested from Loki into Grafana
- src: /src/assets/projects/damage-tracker/grafana_loki_single.webp'
  alt: View of rich metadata for single Loki/Grafana damage log
---

Began as a test project to see if it was possible to apply extra damage to a damage event. The main reason for this was to override headshot damage in [FiveM](https://fivem.net/) a modification for Grand Theft Auto 5 (GTA5).

Headshot damage in GTA5 by default is considered a critical hit as in if you were to get shot in the head in the game your character would instantly die. This becomes a problem in roleplay servers where longer gunfights are welcomed so headshot damage is usually disabled using `SetPedSuffersCriticalHits` a native function call.

The problem with `SetPedSuffersCriticalHits` native is that it simply swaps out headshot damage for torso damage meaning that there is no difference between shooting the head or torso which doesn't make sense. This project allows providing configurable extra damage to areas of the body, mainly the head giving meaning to headshots while retaining sustain gunfights from a roleplay perspective.

## Features
- Log player to player damage
- Allow applying extra damage by player bone
- Include extra damage in logs
- Verify damage against the server
- Export logs to Loki + Grafana

## Tech
- Lua
- Docker
- Docker Compose
- Loki
- Grafana