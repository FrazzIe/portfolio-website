---
name: Weapon Damage Configurator
blurb: Web configuration tool to test the damage of weapons in FiveM
startDate: '2023-05-30'
lastUpdated: '2024-11-09'
images:
- src: /src/assets/projects/weapon-damage-configurator/weapon_test_results.webp
  alt: Example of the results of a weapon damage test
- src: /src/assets/projects/weapon-damage-configurator/weapon_test.webp
  alt: Example of using the test weapon damage feature
- src: /src/assets/projects/weapon-damage-configurator/interpolation.webp
  alt: Example of interpolating weapon damage based on results
---

## Features

- **Damage Control**: Set and persist modifier of the base damage for each weapon
- **Weapon Testing**: Automatically test weapons and calculate damage at various ranges at specific bones
- **Damage Interpolation**: Use weapon testing results to calculate weapon damage based on a modifier 
- **Stealth Attack Control**: Individually toggle stealth attacks for different melee weapons for consistent damage control
- **Configurable**: Configuration file that allows altering the test ranges, bones and available weapons and weapon grouping orders

## Tech

- HTML
- SCSS
- Typescript
- Lua
- Angular
- Bootstrap 5