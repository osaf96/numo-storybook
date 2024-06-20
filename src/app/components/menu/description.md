# MenuComponent

The `MenuComponent` is a navigational menu designed to provide a structured and styled way for users to navigate through different sections of the application. It supports an active state indication for the current section and uses icons for visual enhancement.

## Features

- **Structured Layout**: The menu is divided into sections and submenus.
- **Active State**: The active menu item is highlighted.
- **Icon Support**: Each menu item can have an icon.
- **Event Handling**: Outputs events when menu items are clicked.
- **Routing**: Navigates to different routes based on menu item clicks.

## Usage

To use the `MenuComponent`, include it in your Angular project and provide it with a list of menu items through the `menuItems` property. The component automatically handles the active state and routing.

### Menu Items Structure

The menu items should be structured as follows:

```json
{
  "pages": [
    {
      "name": "Banka",
      "icon": "cil:bank",
      "url": "/banka",
      "state": "active"
    },
    {
      "name": "Klienti",
      "icon": "cil:people",
      "url": "/klienti",
      "state": "inactive"
    },
    {
      "name": "Darījumi",
      "icon": "cil:note-add",
      "url": "/darījumi",
      "state": "inactive"
    },
    {
      "name": "Kredīti",
      "icon": "cil:credit-card",
      "url": "/kredīti",
      "state": "inactive"
    },
    {
      "name": "Statistika",
      "icon": "cil:chart-line",
      "url": "/statistika",
      "state": "inactive"
    }
  ]
} 