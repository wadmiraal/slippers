import { TextElement, TextElementConfig } from "./TextElement";

export class Text extends TextElement<HTMLSpanElement> {
  constructor(config?: TextElementConfig) {
    super("SPAN", config);
  }
}
