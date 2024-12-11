---
name: Fishing bot
blurb: C# WPF application that makes use of computer vision to automate actions in a game
startDate: '2021-11-01'
lastUpdated: '2024-11-08'
thumbnail: /src/assets/projects/fishing-bot/fishing_bot_original_test_1.webp
images:
- src: /src/assets/projects/fishing-bot/fishing_bot_original_test_1.webp
  alt: Fishing bot overview from original tests
- src: /src/assets/projects/fishing-bot/fishing_bot_outline.webp
  alt: Fishing bot overview up-to-date
links:
  source: https://github.com/FrazzIe/nw-fish
---

The fishing bot is a windows application that makes use of Computer Vision through image matching to automate fishing actions within the New World game.

## Features

- **Target Areas**: Configurable areas used to focus and optimise image matching
- **Templates**: Configurable image templates that are in the matching process for each stage
- **Cast Power**: Change how far out the rod is casted into the water
- **Anti-AFK**: Prevent inactivity warnings by perodically moving the player
- **Repairs**: Allow repairing of the rod to allow for longer fishing
- **Keybinds**: Configurable keybinds for in-game actions (open inventory etc)
- **Encumbered**: Allow stopping the bot on encumbered status when inventory is full
- **Bait**: Optionally equip bait before every cast for higher bite chance
- **Monitor Agnostic**: Works on any resolution, and allows for selecting a different monitor
- **Presets**: Load/Save custom presets for all available application options

## Tech

- .NET Core
- Emgu CV
- Visual Studio
- Windows Form App
