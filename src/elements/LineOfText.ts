import { Config } from "../types";
import { TextElement } from "./TextElement";

export class LineOfText extends TextElement {
  constructor(config?: Config) {
    super("SPAN", config);
  }
}
