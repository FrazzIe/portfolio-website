---
name: ps-realtor
blurb: Property realtor management interface
startDate: '2025-01-06'
lastUpdated: '2025-01-14'
thumbnail: /src/assets/projects/ps-realtor/properties_page.webp
images:
- src: /src/assets/projects/ps-realtor/home_page.webp
  alt: Home page overview
- src: /src/assets/projects/ps-realtor/properties_page.webp
  alt: Properties page overview
- src: /src/assets/projects/ps-realtor/properties_page_details_house.webp
  alt: Properties page house details overview
- src: /src/assets/projects/ps-realtor/properties_page_details_apt.webp
  alt: Properties page apartment details overview
- src: /src/assets/projects/ps-realtor/properties_page_manage.webp
  alt: Properties page management overview
- src: /src/assets/projects/ps-realtor/apartments_page.webp
  alt: Apartments page overview
- src: /src/assets/projects/ps-realtor/apartments_page_details.webp
  alt: Apartments page details overview
- src: /src/assets/projects/ps-realtor/list_property_page_splash.webp
  alt: List property page initial spash screen
- src: /src/assets/projects/ps-realtor/list_property_page.webp
  alt: List property page overview
links:
  source: https://github.com/Project-Sloth/ps-realtor
  additional:
  - label: "Pull request"
    url: https://github.com/Project-Sloth/ps-realtor/pull/57
---

A property realtor management application created by the [Project Sloth](https://github.com/Project-Sloth) team that I contributed to with an overhaul of the whole user interface.

## Goals

- Improve overall responsiveness of the interface
- Improve the readability of the interface
- Clean up leftover/unused components & styles
- Moving duplicate code into reusable components
- Update svelte and various dependencies to the final release of Svelte 4
- General refactor of existing pages

## Changes that were made

- Updated svelte to 4.2.19 and other dependencies
- Switched to using font-base sizing instead of viewport based
- Replaced discord banner with a copyright footer with a link that opens the project-slot github page
- Refactor of all existing pages and components
- Moved duplicate code into reusable components
  - Button: matching button styles across the app with added extras
  - Card: header->body->footer layout commonly seen in modals
  - Dropdown: General refactor and attempt at making it act like the native browser.
  - ToggleDropdown: Specific use case when using a dropdown with truthy output
  - Form Control: label->control container for defining form controls
  - Modal: a modal container with a background overlay and escape keybind
  - Tile: simple tile/tag frequently used across properties and apartments
- Clean up leftover/unused components & styles
- Add a logo to the realtor menu sidebar
- Add different image background for apartment/property cards
- Improved overall responsiveness and readability of the interface down to 800x600
- Fix most typescript complaints seen around the codebase
- Fix 'mlo' being an option under shell types when the type is 'SHELL'
- Extended property type filter allow showing just apartments
- Added set waypoint for apartments

## Tech
- Lua
- Svelte
- Typescript
- HTML
- CSS
- Markdown
