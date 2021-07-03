import hljs from "https://taisukef.github.io/highlight.js/es/highlight.min.js";
import { css } from "https://js.sabae.cc/stdom.js";

//import javascript from 'https://taisukef.github.io/highlight.js/src/languages/javascript.js';
//hljs.registerLanguage('javascript', javascript);

// select from https://highlightjs.org/static/demo/
const hljsStyle = "https://taisukef.github.io/highlight.js/src/styles/vs2015.css";

let flg = false;
const setStyle = () => {
  if (flg) {
    return;
  }
  flg = true;
  css(hljsStyle);
};

class HighlightJS extends HTMLElement {
  constructor(language) {
    super();
    setStyle();
    this.style.display = "block";
    this.style.padding = ".5em .8em";
    this.style.margin = ".3em 0";

    this.style.whiteSpace = "pre-wrap"; // or "pre"
    //this.style.whiteSpace = "pre";

    this.style.overflow = "scroll";
    this.style.wordBreak = "break-all";
    this.style.fontFamily = "monospace";
    this.className = "hljs";
    this.innerHTML = hljs.highlight(this.textContent.trim(), { language }).value;
  }
};

class CodeJS extends HighlightJS {
  constructor() {
    super("javascript");
  }
};

customElements.define("code-js", CodeJS);

class CodeHTML extends HighlightJS {
  constructor() {
    super("html");
  }
};

customElements.define("code-html", CodeHTML);

class CodeC extends HighlightJS {
  constructor() {
    super("c");
  }
};

customElements.define("code-c", CodeC);

export { HighlightJS, CodeJS, CodeHTML, CodeC };
