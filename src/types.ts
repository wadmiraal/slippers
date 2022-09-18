import { BaseElement } from "./elements/BaseElement";
import { ContainerElementConfig } from "./elements/ContainerElement";

export type Args<T = ContainerElementConfig> = [
  T | BaseElement,
  ...Array<BaseElement>
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
