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
import { LineOfText } from "./elements/LineOfText";
import { Paragraph } from "./elements/Paragraph";
import { Section } from "./elements/Section";
import { TextElementConfig } from "./elements/TextElement";
import { Timer, TimerConfig } from "./elements/Timer";
import { Args } from "./types";

// Expose components.
(window as any).App = (...args: Args<ContainerElementConfig>) =>
  new App(...args);
(window as any).Button = (config: ButtonConfig) => new Button(config);
(window as any).Canvas = (...args: Args<CanvasConfig>) => new Canvas(...args);
(window as any).Keyboard = (config: KeyboardConfig) => new Keyboard(config);
(window as any).LineOfText = (config: TextElementConfig) =>
  new LineOfText(config);
(window as any).Paragraph = (...args: Args<ContainerElementConfig>) =>
  new Paragraph(...args);
(window as any).Section = (...args: Args<ContainerElementConfig>) =>
  new Section(...args);
(window as any).Timer = (config: TimerConfig) => new Timer(config);

// Expose special helper components.
(window as any).moveTo = moveTo;
(window as any).drawLine = drawLine;
(window as any).drawCircle = drawCircle;

// Expose constants.
(window as any).left = "left";
(window as any).center = "center";
(window as any).right = "right";

(window as any).green = "green";
(window as any).red = "red";
(window as any).white = "white";
(window as any).black = "black";
(window as any).lightGray = "lightgray";
