import { App } from "./elements/App";
import { Button, ButtonConfig } from "./elements/Button";
import {
  Canvas,
  CanvasConfig,
  drawCircle,
  drawLine,
  moveTo,
} from "./elements/Canvas";
import { ContainerElementConfig } from "./elements/ContainerElement";
import { Keyboard, KeyboardConfig } from "./elements/Keyboard";
import { Paragraph } from "./elements/Paragraph";
import { Section } from "./elements/Section";
import { Text } from "./elements/Text";
import { TextElementConfig } from "./elements/TextElement";
import { Timer, TimerConfig } from "./elements/Timer";
import { Args, EnrichedWindow } from "./types";

// Expose components.
(window as unknown as EnrichedWindow).App = (
  ...args: Args<ContainerElementConfig>
) => new App(...args);
(window as unknown as EnrichedWindow).Button = (config: ButtonConfig) =>
  new Button(config);
(window as unknown as EnrichedWindow).Canvas = (...args: Args<CanvasConfig>) =>
  new Canvas(...args);
(window as unknown as EnrichedWindow).Keyboard = (config: KeyboardConfig) =>
  new Keyboard(config);
(window as unknown as EnrichedWindow).Text = (config?: TextElementConfig) =>
  new Text(config);
(window as unknown as EnrichedWindow).Paragraph = (
  ...args: Args<ContainerElementConfig>
) => new Paragraph(...args);
(window as unknown as EnrichedWindow).Section = (
  ...args: Args<ContainerElementConfig>
) => new Section(...args);
(window as unknown as EnrichedWindow).Timer = (config: TimerConfig) =>
  new Timer(config);

// Expose special helper components.
(window as unknown as EnrichedWindow).moveTo = moveTo;
(window as unknown as EnrichedWindow).drawLine = drawLine;
(window as unknown as EnrichedWindow).drawCircle = drawCircle;

/* eslint-disable @typescript-eslint/no-explicit-any */
// Expose constants.
(window as any).left = "left";
(window as any).center = "center";
(window as any).right = "right";

(window as any).solid = "solid";
(window as any).dotted = "dotted";
(window as any).dashed = "dashed";

(window as any).serif = "serif";
(window as any).sansSerif = "sans-serif";
(window as any).cursive = "cursive";
(window as any).monospace = "monospace";

(window as any).aqua = "aqua";
(window as any).black = "black";
(window as any).blue = "blue";
(window as any).cyan = "cyan";
(window as any).fuchsia = "fuchsia";
(window as any).gray = "gray";
(window as any).green = "green";
(window as any).lightGray = "lightgray";
(window as any).lightGreen = "lightgreen";
(window as any).lime = "lime";
(window as any).maroon = "maroon";
(window as any).navy = "navy";
(window as any).olive = "olive";
(window as any).purple = "purple";
(window as any).red = "red";
(window as any).teal = "teal";
(window as any).white = "white";
(window as any).yellow = "yellow";
/* eslint-enable @typescript-eslint/no-explicit-any */
