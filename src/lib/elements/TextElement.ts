import { extractNumber } from "../utils";
import { VisualElement, VisualElementConfig } from "./VisualElement";

export interface TextElementConfig extends VisualElementConfig {
  text?: string;
  size?: number;
  font?: string;
  color?: string;
  bold?: boolean;
  italic?: boolean;
}

export class TextElement<T extends HTMLElement> extends VisualElement<T> {
  constructor(tagName: string, config?: TextElementConfig) {
    super(tagName, config);

    if (config?.text) {
      this.text = config.text;
    }
    if (config?.size) {
      this.size = config.size;
    }
    if (config?.font) {
      this.font = config.font;
    }
    if (config?.color) {
      this.color = config.color;
    }
    if (config?.bold !== undefined) {
      this.bold = config.bold;
    }
    if (config?.italic !== undefined) {
      this.italic = config.italic;
    }
  }

  set size(value: number) {
    this.el.style.fontSize = String(value) + "px";
  }

  get size() {
    return extractNumber(this.el.style.fontSize);
  }

  set text(value: string) {
    this.el.textContent = value;
  }

  get text() {
    return String(this.el.textContent);
  }

  set font(value: string) {
    this.el.style.fontFamily = value;
  }

  get font() {
    return this.el.style.fontFamily;
  }

  set color(value: string) {
    this.el.style.color = value;
  }

  get color() {
    return this.el.style.color;
  }

  set bold(value: boolean) {
    this.el.style.fontWeight = value ? "bold" : "regular";
  }

  get bold() {
    return this.el.style.fontWeight === "bold";
  }

  set italic(value: boolean) {
    this.el.style.fontStyle = value ? "italic" : "regular";
  }

  get italic() {
    return this.el.style.fontStyle === "italic";
  }
}
