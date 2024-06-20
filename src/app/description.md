# AppComponent

## Purpose
The `AppComponent` serves as the root component of the Angular application. It defines the main layout structure and includes essential components for navigation and UI rendering.

## Structure
### Selector
- **Selector:** `app-root`
- **Standalone:** true

### Imports
- **Angular Core Components:**
  - `Component`
  - `RouterOutlet`

- **Custom Components:**
  - `HeaderComponent` from `../stories/components/header/header.component`

### Template
```html
<app-header></app-header>
<router-outlet></router-outlet>
```html