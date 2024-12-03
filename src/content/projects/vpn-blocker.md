---
name: VPN Blocker
blurb: A plugin built in C++ for Cod4x servers to prevent usage of VPNs through an API
startDate: '2021-05-01'
lastUpdated: '2024-11-08'
images:
- src: /src/assets/projects/vpn-blocker/example.webp
  alt: Example of message displayed to player
links:
  source: https://github.com/FrazzIe/vpn_blocker
---

A Cod4x (Call of Duty 4 Extended) plugin that was built to minimise players evading bans. The [IP Intelligence API](https://getipintel.net/) is used to block users from joining a server if they are using a VPN.

## Features

- **Blocking**: Block users from joining who use a VPN
- **Caching**: Cache verified IP addresess up to 6 hours
- **Limiting**: Keep track of API usage and ensure daily request limit is not met
- **Allowlisting**: Allow IP addresses to be allowlisted and bypass checks
- **Convars**: Configurable convars for setting limits, kick messages, thresholds etc

## Tech

- C++
- Batch & Bash
- [IP Intelligence API](https://getipintel.net/)