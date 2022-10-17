import { BaseElement } from "./elements/BaseElement";

export type Args<T> = [
  T | BaseElement | CanvasInstruction,
  ...Array<BaseElement | CanvasInstruction>
];

export type CanvasLineInstruction = [
  (x: number, y: number, ctx: CanvasRenderingContext2D) => void,
  number,
  number
];

export type CanvasCircleInstruction = [
  (x: number, y: number, r: number, ctx: CanvasRenderingContext2D) => void,
  number,
  number,
  number
];

export type CanvasInstruction = CanvasLineInstruction | CanvasCircleInstruction;
