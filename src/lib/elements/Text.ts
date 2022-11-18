import { TextElement, TextElementConfig } from "./TextElement";

export class Text extends TextElement {
  constructor(config?: TextElementConfig) {
    super("SPAN", config);
  }
}
