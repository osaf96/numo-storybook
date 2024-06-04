import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "numo-button",
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{ 'background-color': backgroundColor }"
    >
      {{ label }}
    </button>
  `,
})
export class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: "small" | "medium" | "large" = "medium";

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = "Button";

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const baseClasses = [
      "font-sans",
      "font-bold",
      "rounded-full",
      "cursor-pointer",
      "inline-block",
      "leading-none",
    ];

    const mode = this.primary
      ? "text-white bg-black border-transparent"
      : "text-gray-800 bg-transparent border border-gray-300";

    const sizeClasses = {
      small: "text-xs px-4 py-2",
      medium: "text-sm px-5 py-2.5",
      large: "text-base px-6 py-3",
    };

    return [...baseClasses, mode, sizeClasses[this.size]];
  }
}
