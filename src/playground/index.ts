import { CoffeeScript } from "coffeescript";

function compileCoffeeCode(code: string) {
  return CoffeeScript.compile(code);
}

function executeCode(code: string) {
  new Function(code)();
}

function clearResult() {
  const resultWrapper = getResultWrapper();
  if (resultWrapper) {
    resultWrapper.textContent = "";
  }
}

function logError(e: Error) {
  clearResult();

  const resultWrapper = getResultWrapper();
  if (resultWrapper) {
    const log = document.createElement("PRE");
    log.id = "errors";
    log.textContent = `There was an error:\n${e}`;
    resultWrapper.append(log);
  }
}

function getResultWrapper() {
  return document.getElementById("result");
}

function handlePlay() {
  clearResult();
  try {
    executeCode(compileCoffeeCode(editor.getValue()));
  } catch (e: unknown) {
    if (e instanceof Error) {
      logError(e);
    }
  }
}

function handleReset() {
  clearResult();
}

async function handleChangeExample(e: Event) {
  const file = (e.currentTarget as HTMLSelectElement)?.value;
  if (
    (editor.getValue() as string).trim() === "" ||
    confirm(
      "You will lose your current work. Are you sure you want to load an example file and replace the contents of the editor?"
    )
  ) {
    try {
      const data = await fetch(
        `${window.location.pathname.replace(
          /\w+\.html/,
          ""
        )}examples/${file}.coffee`
      ).then(
        async (r) => {
          if (r.status > 400) {
            throw new Error(await r.text());
          }
          return r.text();
        },
        (r) => {
          throw new Error(r);
        }
      );
      editor.setValue(data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        logError(e);
      }
    }
  }
}

export function __attach() {
  // Run the code.
  document.getElementById("play")?.addEventListener("click", handlePlay);

  // Reset the result area.
  document.getElementById("reset")?.addEventListener("click", handleReset);

  // Load an example file dynamically.
  document
    .getElementById("select-example")
    ?.addEventListener("change", handleChangeExample);
}

export function __detach() {
  document.getElementById("play")?.removeEventListener("click", handlePlay);
  document.getElementById("reset")?.removeEventListener("click", handleReset);
  document
    .getElementById("select-example")
    ?.removeEventListener("change", handleChangeExample);
}

__attach();

// Init the ACE editor.
const editor = (window as any).ace.edit("editor");
editor.setTheme("ace/theme/github");
editor.session.setMode("ace/mode/coffee");
