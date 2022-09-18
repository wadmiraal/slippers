import { TextElement, TextElementConfig } from "./TextElement";

export class LineOfText extends TextElement {
  constructor(config?: TextElementConfig) {
    super("SPAN", config);
  }
}
