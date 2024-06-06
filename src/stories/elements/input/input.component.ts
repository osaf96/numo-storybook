import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "numo-input",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <label
        for="email"
        class="block text-sm font-medium leading-6 text-gray-900"
        >{{ label }}</label
      >
      <div class="mt-2">
        <input
          type="{{ type }}"
          name="{{ name }}"
          id="email"
          [ngClass]="classes"
          placeholder="{{ placeholder }}"
        />
      </div>
    </div>
  `,
})
export class InputComponent {
  /**
   * How large should the button be?
   */
  @Input()
  size: "small" | "medium" | "large" = "medium";

  @Input()
  label = "Email";

  @Input()
  name = "email";

  @Input()
  placeholder = "you@example.com";

  @Input()
  type:
    | "text"
    | "number"
    | "email"
    | "date"
    | "datetime-local"
    | "month"
    | "password"
    | "tel"
    | "time"
    | "url"
    | "week" = "email";

  public get classes(): string[] {
    const baseClasses = [
      "block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600",
    ];

    const sizeClasses = {
      small: "text-xs px-4 py-2",
      medium: "text-sm px-5 py-2.5",
      large: "text-base px-6 py-3",
    };

    return [...baseClasses, sizeClasses[this.size]];
  }
}
