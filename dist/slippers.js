"use strict";
(function () {
    /**
     * Helpers
     */
    function handleContainerArgs([first, ...rest]) {
        if (first.width !== undefined ||
            first.height !== undefined ||
            first.do !== undefined ||
            first.align !== undefined
        // TODO...
        ) {
            return [first, rest];
        }
        else {
            return [null, [first, ...rest]];
        }
    }
    function extractNumber(value) {
        return Number(value.replace(/^(\d+).*/, "$1"));
    }
    function isBaseElement(o) {
        return o.delete !== undefined;
    }
    function isCanvasInstruction(o) {
        return o.length === 3 && typeof o[1] === "number";
    }
    function isCanvasLineInstruction(o) {
        return o.length === 3;
    }
    /**
     * Base classes
     */
    class BaseElement {
        constructor(tagName) {
            this.el = document.createElement(tagName);
        }
        delete() {
            var _a;
            (_a = this.el.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.el);
        }
        getHTMLElement() {
            return this.el;
        }
    }
    class VisualElement extends BaseElement {
        constructor(tagName, config) {
            super(tagName);
            if (config.backgroundColor !== undefined) {
                this.backgroundColor = config.backgroundColor;
            }
            if (config.borderColor !== undefined) {
                this.borderColor = config.borderColor;
            }
            if (config.borderRadius !== undefined) {
                this.borderRadius = config.borderRadius;
            }
            if (config.borderWidth !== undefined) {
                this.borderWidth = config.borderWidth;
            }
            if (config.borderStyle !== undefined) {
                this.borderStyle = config.borderStyle;
            }
            else if (config.borderWidth !== undefined ||
                config.borderRadius !== undefined ||
                config.borderColor !== undefined) {
                this.borderStyle = "solid";
            }
            if (config.left !== undefined) {
                this.left = config.left;
            }
            if (config.top !== undefined) {
                this.top = config.top;
            }
            if (config.width !== undefined) {
                this.width = config.width;
            }
            if (config.height !== undefined) {
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
        set top(value) {
            this.el.style.position = "absolute";
            this.el.style.top = String(value + "px");
        }
        get top() {
            return extractNumber(this.el.style.top);
        }
    }
    class TextElement extends VisualElement {
        constructor(tagName, config) {
            super(tagName, config);
            if (config.text) {
                this.text = config.text;
            }
            if (config.size) {
                this.size = config.size;
            }
            if (config.font) {
                this.font = config.font;
            }
            if (config.color) {
                this.color = config.color;
            }
            if (config.bold) {
                this.bold = config.bold;
            }
            if (config.italic) {
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
            return this.el.textContent || "";
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
    }
    class ContainerElement extends VisualElement {
        constructor(tagName, config) {
            super(tagName, config);
            if (config.left === undefined && config.top === undefined) {
                this.el.style.position = "relative";
            }
            if (config.align) {
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
    }
    /**
     * Components
     */
    class App extends ContainerElement {
        constructor(...args) {
            const [config, children] = handleContainerArgs(args);
            super("DIV", config || {});
            this.el.style.overflow = "hidden";
            this.el.style.margin = "20px auto";
            this.el.style.padding = "5px";
            if (!config || config.backgroundColor === undefined) {
                this.backgroundColor = "white";
            }
            children.forEach((child) => {
                if (isBaseElement(child)) {
                    this.append(child);
                }
            });
            document.body.append(this.el);
        }
    }
    class Button extends TextElement {
        constructor(config) {
            super("BUTTON", config);
            this.clickCallback = config.do;
            this.el.addEventListener("click", () => {
                this.clickCallback && this.clickCallback();
            });
            this.el.style.padding = "5px 10px";
            this.el.style.margin = "2px";
            this.el.style.cursor = "pointer";
            if (config.borderColor === undefined &&
                config.borderWidth === undefined) {
                this.borderColor = "transparent";
            }
            if (config.borderRadius === undefined) {
                this.borderRadius = 5;
            }
        }
        set do(callback) {
            this.clickCallback = callback;
        }
        get do() {
            return this.clickCallback || (() => { });
        }
    }
    class Canvas extends ContainerElement {
        constructor(...args) {
            const [config, children] = handleContainerArgs(args);
            super("CANVAS", config || {});
            this.ctx = this.el.getContext("2d");
            if (this.ctx === null) {
                // TODO
                return;
            }
            this.color = (config === null || config === void 0 ? void 0 : config.color) || "black";
            this.lineWidth = (config === null || config === void 0 ? void 0 : config.lineWidth) || 1;
            children.forEach((child) => {
                if (isCanvasInstruction(child)) {
                    this.add(child);
                }
            });
        }
        add(...children) {
            children.forEach((child) => {
                if (isCanvasLineInstruction(child)) {
                    const fn = child[0];
                    fn(child[1], child[2], this.ctx);
                }
                else {
                    const fn = child[0];
                    fn(child[1], child[2], child[3], this.ctx);
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
            if (this.ctx) {
                this.ctx.strokeStyle = value;
            }
        }
        get color() {
            return this.ctx ? this.ctx.strokeStyle.toString() : "black";
        }
        set lineWidth(value) {
            if (this.ctx) {
                this.ctx.lineWidth = value;
            }
        }
        get lineWidth() {
            return this.ctx ? this.ctx.lineWidth : 1;
        }
    }
    let keyboardCount = 0;
    class Keyboard extends BaseElement {
        constructor(config) {
            keyboardCount++;
            super("SPAN");
            this.el.style.display = "none";
            this.el.className = "keyboard__" + keyboardCount;
            this.upCallback = config.up;
            document.addEventListener("keyup", (e) => {
                if (this.upCallback !== undefined) {
                    this.upCallback(e.key);
                }
            });
        }
        set up(callback) {
            this.upCallback = callback;
        }
        get up() {
            return this.upCallback || (() => { });
        }
    }
    class LineOfText extends TextElement {
        constructor(config) {
            super("SPAN", config);
        }
    }
    class Paragraph extends ContainerElement {
        constructor(...args) {
            const [config, children] = handleContainerArgs(args);
            super("P", config || {});
            children.forEach((child) => {
                if (isBaseElement(child)) {
                    this.append(child);
                }
            });
        }
    }
    class Section extends ContainerElement {
        constructor(...args) {
            const [config, children] = handleContainerArgs(args);
            super("DIV", config || {});
            children.forEach((child) => {
                if (isBaseElement(child)) {
                    this.append(child);
                }
            });
        }
    }
    let timerCount = 0;
    class Timer extends BaseElement {
        constructor(config) {
            super("SPAN");
            this.timer = 0;
            timerCount++;
            this.el.style.display = "none";
            this.el.className = "timer__" + timerCount;
            this.frequency = config.freq || 1000;
            this.ellapsed = 0;
            this.callback = config.do;
        }
        set freq(value) {
            this.frequency = value;
            this.stop();
            this.start();
        }
        get freq() {
            return this.frequency;
        }
        set do(callback) {
            this.callback = callback;
            this.stop();
            this.start();
        }
        get do() {
            return this.callback || (() => { });
        }
        start() {
            if (this.timer) {
                this.stop();
            }
            this.timer = setInterval(() => {
                this.ellapsed += this.frequency;
                if (this.callback !== undefined) {
                    const minutes = Math.floor(this.ellapsed / 60000);
                    const [seconds, milliseconds] = String((this.ellapsed % 60000) / 1000).split(".");
                    this.callback(this.ellapsed, Number(milliseconds), Number(seconds), minutes);
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
            this.stop();
            this.ellapsed = 0;
            this.start();
        }
    }
    /**
     * Special helper components
     */
    function moveTo(x, y, ctx) {
        if (ctx) {
            ctx.moveTo(x, y);
        }
        else {
            return [moveTo, x, y];
        }
    }
    function drawLine(x, y, ctx) {
        if (ctx) {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        else {
            return [drawLine, x, y];
        }
    }
    function drawCircle(x, y, r, ctx) {
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.stroke();
        }
        else {
            return [drawCircle, x, y, r];
        }
    }
    // Expose components.
    window.App = (...args) => new App(...args);
    window.Button = (config) => new Button(config);
    window.Canvas = (...args) => new Canvas(...args);
    window.Keyboard = (config) => new Keyboard(config);
    window.LineOfText = (config) => new LineOfText(config);
    window.Paragraph = (...args) => new Paragraph(...args);
    window.Section = (...args) => new Section(...args);
    window.Timer = (config) => new Timer(config);
    // Expose special helper components.
    window.moveTo = moveTo;
    window.drawLine = drawLine;
    window.drawCircle = drawCircle;
    // Expose constants.
    window.center = "center";
    window.green = "green";
    window.red = "red";
    window.white = "white";
    window.black = "black";
    window.lightGray = "lightgray";
})();
