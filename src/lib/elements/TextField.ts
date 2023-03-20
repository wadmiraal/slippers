import { VisualElement, VisualElementConfig } from "./VisualElement";

export interface TextFieldConfig extends VisualElementConfig {
  value?: string;
  large?: boolean;
  secret?: boolean;
}

export class TextField extends VisualElement<
  HTMLInputElement | HTMLTextAreaElement
> {
  constructor(config?: TextFieldConfig) {
    super(config?.large ? "TEXTAREA" : "INPUT", config);

    if (config?.value) {
      this.value = config.value;
    }

    if (config?.secret) {
      this.secret = true;
    }
  }

  set value(text: string) {
    this.el.value = text;
  }

  get value() {
    return this.el.value;
  }

  set large(_: boolean) {
    throw new Error("You cannot change the TextField's size after the fact.");
  }

  get large() {
    return this.el.tagName === "TEXTAREA";
  }

  set secret(isPassword: boolean) {
    this.el.setAttribute("type", isPassword ? "password" : "text");
    this.el.setAttribute("data-testid", isPassword ? "password-input" : "");
  }

  get secret() {
    return this.el.getAttribute("type") === "password";
  }
}
