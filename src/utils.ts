import { BaseElement } from "./elements/BaseElement";
import { Args, CanvasInstruction, CanvasLineInstruction } from "./types";

export function handleContainerArgs<T>([first, ...rest]: Args<T>): [
  T | undefined,
  Array<BaseElement | CanvasInstruction>
] {
  if (!isBaseElement(first) && !isCanvasInstruction(first)) {
    return [first, rest];
  } else {
    return [undefined, [first, ...rest]];
  }
}

export function extractNumber(value: string) {
  return Number(value.replace(/^(\d+).*/, "$1"));
}

export function isBaseElement<T>(
  o: BaseElement | CanvasInstruction | T
): o is BaseElement {
  return o instanceof BaseElement;
}

export function isCanvasInstruction<T>(
  o: BaseElement | CanvasInstruction | T
): o is CanvasInstruction {
  return Array.isArray(o) && typeof o[1] === "number";
}

export function isCanvasLineInstruction(
  o: CanvasInstruction
): o is CanvasLineInstruction {
  return o.length === 3;
}
