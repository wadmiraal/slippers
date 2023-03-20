"use strict";
(() => {
  // src/lib/elements/BaseElement.ts
  var BaseElement = class {
    constructor(tagName) {
      this.el = document.createElement(tagName);
    }
    delete() {
      var _a;
      (_a = this.el.parentNode) == null ? void 0 : _a.removeChild(this.el);
    }
    getHTMLElement() {
      return this.el;
    }
  };

  // src/lib/utils.ts
  function handleContainerArgs([first, ...rest]) {
    if (!isBaseElement(first) && !isCanvasInstruction(first)) {
      return [first, rest];
    } else {
      return [void 0, [first, ...rest]];
    }
  }
  function extractNumber(value) {
    return Number(value.replace(/^(\d+).*/, "$1"));
  }
  function isBaseElement(o) {
    return o instanceof BaseElement;
  }
  function isCanvasInstruction(o) {
    return Array.isArray(o) && typeof o[1] === "number";
  }
  function isCanvasLineInstruction(o) {
    return o.length === 3;
  }

  // src/lib/elements/VisualElement.ts
  var VisualElement = class extends BaseElement {
    constructor(tagName, config) {
      super(tagName);
      if ((config == null ? void 0 : config.backgroundColor) !== void 0) {
        this.backgroundColor = config.backgroundColor;
      }
      if ((config == null ? void 0 : config.borderColor) !== void 0) {
        this.borderStyle = "solid";
        this.borderWidth = 2;
        this.borderColor = config.borderColor;
      }
      if ((config == null ? void 0 : config.borderRadius) !== void 0) {
        this.borderStyle = "solid";
        this.borderWidth = 2;
        this.borderRadius = config.borderRadius;
      }
      if ((config == null ? void 0 : config.borderWidth) !== void 0) {
        this.borderStyle = "solid";
        this.borderWidth = config.borderWidth;
      }
      if ((config == null ? void 0 : config.borderStyle) !== void 0) {
        this.borderStyle = config.borderStyle;
      }
      if ((config == null ? void 0 : config.left) !== void 0) {
        this.left = config.left;
      }
      if ((config == null ? void 0 : config.right) !== void 0) {
        this.right = config.right;
      }
      if ((config == null ? void 0 : config.top) !== void 0) {
        this.top = config.top;
      }
      if ((config == null ? void 0 : config.width) !== void 0) {
        this.width = config.width;
      }
      if ((config == null ? void 0 : config.height) !== void 0) {
        this.height = config.height;
      }
    }
    set backgroundColor(value) {
      this.el.style.backgroundColor = value;
    }
    get backgroundColor() {
      return this.el.style.backgroundColor;
    }
    set borderColor(value) {
      this.el.style.borderColor = value;
    }
    get borderColor() {
      return this.el.style.borderColor;
    }
    set borderStyle(value) {
      this.el.style.borderStyle = value;
    }
    get borderStyle() {
      return this.el.style.borderStyle;
    }
    set borderWidth(value) {
      this.el.style.borderWidth = String(value) + "px";
    }
    get borderWidth() {
      return extractNumber(this.el.style.borderWidth);
    }
    set borderRadius(value) {
      this.el.style.borderRadius = String(value) + "%";
    }
    get borderRadius() {
      return extractNumber(this.el.style.borderRadius);
    }
    set width(value) {
      this.el.style.width = String(value) + "px";
    }
    get width() {
      return extractNumber(this.el.style.width);
    }
    set height(value) {
      this.el.style.height = String(value) + "px";
    }
    get height() {
      return extractNumber(this.el.style.height);
    }
    set left(value) {
      this.el.style.position = "absolute";
      this.el.style.left = String(value) + "px";
    }
    get left() {
      return extractNumber(this.el.style.left);
    }
    set right(value) {
      this.el.style.position = "absolute";
      this.el.style.right = String(value) + "px";
    }
    get right() {
      return extractNumber(this.el.style.right);
    }
    set top(value) {
      this.el.style.position = "absolute";
      this.el.style.top = String(value + "px");
    }
    get top() {
      return extractNumber(this.el.style.top);
    }
  };

  // src/lib/elements/ContainerElement.ts
  var ContainerElement = class extends VisualElement {
    constructor(tagName, config) {
      super(tagName, config);
      if (config == null ? void 0 : config.align) {
        this.align = config.align;
      }
    }
    set align(value) {
      this.el.style.textAlign = value;
    }
    get align() {
      return this.el.style.textAlign;
    }
    append(e) {
      this.el.appendChild(e.getHTMLElement());
    }
    remove(e) {
      this.el.removeChild(e.getHTMLElement());
    }
  };

  // src/lib/elements/App.ts
  var App = class extends ContainerElement {
    constructor(...args) {
      var _a;
      const [config, children] = handleContainerArgs(args);
      super("DIV", config);
      this.el.style.overflow = "hidden";
      this.el.style.margin = "20px auto";
      this.el.style.padding = "5px";
      this.el.style.position = "relative";
      if ((config == null ? void 0 : config.backgroundColor) === void 0) {
        this.backgroundColor = "white";
      }
      children.forEach((child) => {
        if (isBaseElement(child)) {
          this.append(child);
        }
      });
      if (window.SLIPPERS_CONTAINER_ID !== void 0) {
        (_a = document.getElementById(window.SLIPPERS_CONTAINER_ID)) == null ? void 0 : _a.append(this.el);
      } else {
        document.body.append(this.el);
      }
    }
  };

  // src/lib/elements/TextElement.ts
  var TextElement = class extends VisualElement {
    constructor(tagName, config) {
      super(tagName, config);
      if (config == null ? void 0 : config.text) {
        this.text = config.text;
      }
      if (config == null ? void 0 : config.size) {
        this.size = config.size;
      }
      if (config == null ? void 0 : config.font) {
        this.font = config.font;
      }
      if (config == null ? void 0 : config.color) {
        this.color = config.color;
      }
      if ((config == null ? void 0 : config.bold) !== void 0) {
        this.bold = config.bold;
      }
      if ((config == null ? void 0 : config.italic) !== void 0) {
        this.italic = config.italic;
      }
    }
    set size(value) {
      this.el.style.fontSize = String(value) + "px";
    }
    get size() {
      return extractNumber(this.el.style.fontSize);
    }
    set text(value) {
      this.el.textContent = value;
    }
    get text() {
      return String(this.el.textContent);
    }
    set font(value) {
      this.el.style.fontFamily = value;
    }
    get font() {
      return this.el.style.fontFamily;
    }
    set color(value) {
      this.el.style.color = value;
    }
    get color() {
      return this.el.style.color;
    }
    set bold(value) {
      this.el.style.fontWeight = value ? "bold" : "regular";
    }
    get bold() {
      return this.el.style.fontWeight === "bold";
    }
    set italic(value) {
      this.el.style.fontStyle = value ? "italic" : "regular";
    }
    get italic() {
      return this.el.style.fontStyle === "italic";
    }
  };

  // src/lib/elements/Button.ts
  var Button = class extends TextElement {
    constructor(config) {
      super("BUTTON", config);
      this.do = config.do;
      this.el.addEventListener("click", () => {
        this.clickCallback && this.clickCallback();
      });
      this.el.style.padding = "5px 10px";
      this.el.style.margin = "2px";
      this.el.style.cursor = "pointer";
      if (config.borderColor === void 0 && config.borderWidth === void 0) {
        this.borderColor = "transparent";
      }
      if (config.borderRadius === void 0) {
        this.borderRadius = 5;
      }
    }
    set do(callback) {
      this.clickCallback = callback;
    }
    get do() {
      return this.clickCallback;
    }
  };

  // src/lib/elements/Canvas.ts
  var Canvas = class extends ContainerElement {
    constructor(...args) {
      const [config, children] = handleContainerArgs(args);
      super("CANVAS", config);
      const ctx = this.el.getContext("2d");
      if (ctx === null) {
        throw new Error("Could not define Canvas context");
      }
      this.ctx = ctx;
      this.color = (config == null ? void 0 : config.color) || "black";
      this.lineWidth = (config == null ? void 0 : config.lineWidth) || 1;
      children.forEach((child) => {
        if (isCanvasInstruction(child)) {
          this.add(child);
        }
      });
    }
    add(...children) {
      children.forEach((child) => {
        if (isCanvasLineInstruction(child)) {
          const [fn, x, y] = child;
          fn(x, y, this.ctx);
        } else {
          const [fn, x, y, r] = child;
          fn(x, y, r, this.ctx);
        }
      });
    }
    set width(value) {
      super.width = value;
      this.el.setAttribute("width", value.toString());
    }
    set height(value) {
      super.height = value;
      this.el.setAttribute("height", value.toString());
    }
    set color(value) {
      this.ctx.strokeStyle = value;
    }
    get color() {
      return this.ctx.strokeStyle.toString();
    }
    set lineWidth(value) {
      this.ctx.lineWidth = value;
    }
    get lineWidth() {
      return this.ctx.lineWidth;
    }
  };
  function moveTo(x, y, ctx) {
    if (ctx) {
      ctx.moveTo(x, y);
    }
    return [moveTo, x, y];
  }
  function drawLine(x, y, ctx) {
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    return [drawLine, x, y];
  }
  function drawCircle(x, y, r, ctx) {
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.stroke();
    }
    return [drawCircle, x, y, r];
  }

  // src/lib/elements/Keyboard.ts
  var keyboardCount = 0;
  var Keyboard = class extends BaseElement {
    constructor(config) {
      keyboardCount++;
      super("SPAN");
      this.el.style.display = "none";
      this.el.className = "keyboard__" + keyboardCount;
      this.up = config.up;
      document.addEventListener("keyup", (e) => {
        if (this.upCallback !== void 0) {
          this.upCallback(e.key);
        }
      });
    }
    set up(callback) {
      this.upCallback = callback;
    }
    get up() {
      return this.upCallback;
    }
  };

  // src/lib/elements/Link.ts
  var Link = class extends TextElement {
    constructor(config) {
      super("A", config);
      if (config == null ? void 0 : config.to) {
        this.to = config.to;
      }
    }
    set to(href) {
      this.el.setAttribute("href", href);
    }
    get to() {
      var _a;
      return (_a = this.el.getAttribute("href")) != null ? _a : "";
    }
  };

  // src/lib/elements/Paragraph.ts
  var Paragraph = class extends ContainerElement {
    constructor(...args) {
      const [config, children] = handleContainerArgs(args);
      super("P", config);
      children.forEach((child) => {
        if (isBaseElement(child)) {
          this.append(child);
        }
      });
    }
  };

  // src/lib/elements/Section.ts
  var Section = class extends ContainerElement {
    constructor(...args) {
      const [config, children] = handleContainerArgs(args);
      super("DIV", config);
      children.forEach((child) => {
        if (isBaseElement(child)) {
          this.append(child);
        }
      });
    }
  };

  // src/lib/elements/Text.ts
  var Text = class extends TextElement {
    constructor(config) {
      super("SPAN", config);
    }
  };

  // src/lib/elements/TextField.ts
  var TextField = class extends VisualElement {
    constructor(config) {
      super((config == null ? void 0 : config.large) ? "TEXTAREA" : "INPUT", config);
      if (config == null ? void 0 : config.value) {
        this.value = config.value;
      }
      if (config == null ? void 0 : config.secret) {
        this.secret = true;
      }
    }
    set value(text) {
      this.el.value = text;
    }
    get value() {
      return this.el.value;
    }
    set large(_) {
      throw new Error("You cannot change the TextField's size after the fact.");
    }
    get large() {
      return this.el.tagName === "TEXTAREA";
    }
    set secret(isPassword) {
      this.el.setAttribute("type", isPassword ? "password" : "text");
      this.el.setAttribute("data-testid", isPassword ? "password-input" : "");
    }
    get secret() {
      return this.el.getAttribute("type") === "password";
    }
  };

  // src/lib/elements/Timer.ts
  var timerCount = 0;
  var DEFAULT_FREQ = 1e3;
  var Timer = class extends BaseElement {
    constructor(config) {
      super("SPAN");
      this.frequency = DEFAULT_FREQ;
      timerCount++;
      this.el.style.display = "none";
      this.el.className = "timer__" + timerCount;
      this.freq = (config == null ? void 0 : config.freq) || DEFAULT_FREQ;
      this.ellapsed = 0;
      this.do = config == null ? void 0 : config.do;
    }
    set freq(value) {
      this.frequency = value;
      if (this.timer) {
        this.start();
      }
    }
    get freq() {
      return this.frequency;
    }
    set do(callback) {
      this.callback = callback;
      if (this.timer) {
        this.start();
      }
    }
    get do() {
      return this.callback;
    }
    start() {
      if (this.timer) {
        this.stop();
      }
      this.timer = window.setInterval(() => {
        this.ellapsed += this.frequency;
        if (this.callback !== void 0) {
          const minutes = Math.floor(this.ellapsed / 6e4);
          const [seconds, milliseconds = 0] = String(
            this.ellapsed % 6e4 / 1e3
          ).split(".");
          this.callback(
            this.ellapsed,
            Number(milliseconds) * 100,
            Number(seconds),
            minutes
          );
        }
      }, this.frequency);
    }
    stop() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
    reset() {
      this.stop();
      this.ellapsed = 0;
    }
    restart() {
      this.reset();
      this.start();
    }
  };

  // src/lib/slippers.ts
  window.App = (...args) => new App(...args);
  window.Button = (config) => new Button(config);
  window.Canvas = (...args) => new Canvas(...args);
  window.Keyboard = (config) => new Keyboard(config);
  window.Text = (config) => new Text(config);
  window.Link = (config) => new Link(config);
  window.Paragraph = (...args) => new Paragraph(...args);
  window.Section = (...args) => new Section(...args);
  window.Timer = (config) => new Timer(config);
  window.TextField = (config) => new TextField(config);
  window.moveTo = moveTo;
  window.drawLine = drawLine;
  window.drawCircle = drawCircle;
  window.left = "left";
  window.center = "center";
  window.right = "right";
  window.solid = "solid";
  window.dotted = "dotted";
  window.dashed = "dashed";
  window.serif = "serif";
  window.sansSerif = "sans-serif";
  window.cursive = "cursive";
  window.monospace = "monospace";
  window.aqua = "aqua";
  window.black = "black";
  window.blue = "blue";
  window.cyan = "cyan";
  window.fuchsia = "fuchsia";
  window.gray = "gray";
  window.green = "green";
  window.lightGray = "lightgray";
  window.lightGreen = "lightgreen";
  window.lime = "lime";
  window.maroon = "maroon";
  window.navy = "navy";
  window.olive = "olive";
  window.purple = "purple";
  window.red = "red";
  window.teal = "teal";
  window.white = "white";
  window.yellow = "yellow";
})();
