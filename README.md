# code-js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element to highlight JavaScript code in web pages.

## Demo
[https://code4fukui.github.io/code-js/](https://code4fukui.github.io/code-js/)

## Features
- `<code-js>` tag to highlight JavaScript code
- Also includes `<code-html>` for HTML and `<code-c>` for C language
- Uses forked version of [highlight.js](https://highlightjs.org/) for syntax highlighting

## Usage
Include the `code-js.js` script as a module and use the custom elements:

```html
<script type="module" src="https://js.sabae.cc/code-js.js"></script>

<code-js>
onload = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
};
</code-js>
```

## License
MIT License