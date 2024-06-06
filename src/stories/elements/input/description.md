## Input Component

This is an **input** component used for forms.

## Usage settings

You can use this component by passing the following props:

- `label`: Input field label
- `placeholder`: ex. some@email.com
- `type`: text, number, email, date, datetime-local, month, password, tel, time, url, week
- `size`: small, medium, large

## Example

```html
<numo-input
  [size]="'large'"
  [label]="'Email'"
  [name]="'email'"
  [placeholder]="'you@example.com'"
  [type]="'week'"
></numo-input>
```