import { BaseElement } from "./elements/BaseElement";
import {
  Args,
  CanvasInstruction,
  CanvasLineInstruction,
  Config,
} from "./types";

export function handleContainerArgs([first, ...rest]: Args): [
  Config | undefined,
  Array<BaseElement | CanvasInstruction>
] {
  if (!(first instanceof BaseElement)) {
    return [first as Config, rest];
  } else {
    return [undefined, [first as BaseElement | CanvasInstruction, ...rest]];
  }
}

export function extractNumber(value: string) {
  return Number(value.replace(/^(\d+).*/, "$1"));
}

export function isBaseElement(
  o: BaseElement | CanvasInstruction
): o is BaseElement {
  return (o as any).delete !== undefined;
}

export function isCanvasInstruction(
  o: BaseElement | CanvasInstruction
): o is CanvasInstruction {
  return (o as any).length === 3 && typeof (o as any)[1] === "number";
}

export function isCanvasLineInstruction(
  o: CanvasInstruction
): o is CanvasLineInstruction {
  return o.length === 3;
}
