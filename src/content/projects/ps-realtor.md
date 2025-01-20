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
  - I was unable to get it to build so I thought I'd update while I sorted it out
- Switched to using font-base sizing instead of viewport based
  - The original viewport based setup allowed for correctly sized containers across resolutions but lacked any scaling of the font sizes and even on 1080p, it was quite difficult to read nevermind 2k
- Replaced discord banner with a copyright footer with a link that opens the project-slot github page
  - I feel like most people don't want an advertisement in a resource geared towards roleplay, so I've made it less obvious but kept a way to check out the other projects
- Refactor of all existing pages and components
  - Was the necessary? probably not, but I had time and was having fun and like I said initially... got a bit carried away.
- Moved duplicate code into reusable components
  - Button: matching button styles across the app with added extras
  - Card: header->body->footer layout commonly seen in modals
  - Dropdown: General refactor and attempt at making it act like the native browser.
  - ToggleDropdown: Specific use case when using a dropdown with truthy output
  - Form Control: label->control container for defining form controls
  - Modal: a modal container with a background overlay and escape keybind
  - Tile: simple tile/tag frequently used across properties and apartments
- Clean up leftover/unused components & styles
  - Not sure of the story here but it looked like there was a whole other unused codebase within this codebase and I've gotten rid of it along with any styles that are no longer in use
- Add a logo to the realtor menu sidebar
- Add different image background for apartment/property cards
- Improved overall responsiveness and readability of the interface down to 800x600
  - Should be usable down to 800x600 the lowest of GTA 5 that I know of, and text is a lot easier to read on higher resolutions as well now.
- Fix most typescript complaints seen around the codebase
- Fix 'mlo' being an option under shell types when the type is 'SHELL'
  - I believed this was a bug, please let me know otherwise, I don't see why you would make a shell property to use a shell type of mlo
- Extended property type filter allow showing just apartments
- Added set waypoint for apartments

## Tech
- Lua
- Svelte
- Typescript
- HTML
- CSS
- Markdown
