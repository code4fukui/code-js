# code-js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element to highlight JavaScript, HTML, and C code in web pages.

## Demo
[https://code4fukui.github.io/code-js/](https://code4fukui.github.io/code-js/)

## Features
- `<code-js>`, `<code-html>`, and `<code-c>` tags to highlight the corresponding language
- Uses a forked version of [highlight.js](https://highlightjs.org/) for syntax highlighting
- Applies the VS2015 theme for code styling

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
MIT License — see [LICENSE](LICENSE).