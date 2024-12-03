---
name: Home Server
blurb: Docker compose infrastructure for personal use homelab server
startDate: '2024-10-01'
lastUpdated: '2024-11-09'
links:
  source: https://github.com/FrazzIe/home-server
---

Personal use homelab where I locally host all my infrastructure with TrueNAS-Scale, Docker compose & Dockge.

## Features

- **LLDAP**: Simple authetication backend that manages users
- **Nginx Proxy Manager**: Reverse-proxy manager used to route traffic to target services
- **Authelia**: Authorisation layer used to restrict access to privilaged services
- **Dockge**: Simple docker compose management interface
- **Jellyfin**: Media system for managing and streaming personal media

## Tech

- Docker compose
- TrueNAS-Scale
- Dockage
- Postgres