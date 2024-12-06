---
name: Character selector
blurb: Built with Lua & Angular to provide a polished and unique experience for FiveM
startDate: '2024-08-01'
lastUpdated: '2024-11-08'
thumbnail: /src/assets/projects/character-selector/character_selection_1.webp
images:
- src: /src/assets/projects/character-selector/character_selection_1.webp
  alt: Character selection page
- src: /src/assets/projects/character-selector/character_creation.webp 
  alt: Character creation modal
- src: /src/assets/projects/character-selector/character_selection_2.webp 
  alt: Character selection page
- src: /src/assets/projects/character-selector/spawn_selection.webp 
  alt: Character spawn selection for new characters
links:
  source: https://github.com/ResourceForge/character-selector-public
  additional:
  - label: Documentation
    target: https://resourceforge.net/character-selector
---

## Features

- **Selection**: Select up to 8 characters¹
- **Creation**: Create up to 8 characters¹
- **Appearance**: Load existing characters visual appearance
- **Effects**: Customisable effects for each selectable character
- **Transitions**: Sleek camera transitions when selecting a character
- **Spawn Selection**: Select where a new character will first spawn in
- **Clean UI**: Modern, simple and accessable interface
- **Framework Integration**: Supports major frameworks like ox, nd, qb, qbox and can be easily extended with more
- **Exports**: Supports exports for developers to override default behaviour and integrate with other scripts
- **Configurable**: Configuration file that allows altering the locations and camera positions for character selection
- **Internationalisation (i18n)**: Interface can support mutliple languages, currently only has english translations.

¹The script can be configurated for more than 8 characters, but initially only 8 is supported

## Tech

- HTML
- SCSS
- Typescript
- Lua
- YAML
- Angular
- Transloco
- PrimeNG
- CI/CD