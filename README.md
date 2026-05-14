# code-js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A set of custom HTML elements to display syntax-highlighted JavaScript, HTML, and C code on a web page.

## Demo

[**Live Demo**](https://code4fukui.github.io/code-js/)

The demo page shows examples of all three custom elements in action.

## Features

- **Simple Integration:** A single, zero-dependency script import is all you need.
- **Language-Specific Elements:** Provides `<code-js>`, `<code-html>`, and `<code-c>` for clear and semantic use.
- **Automatic Highlighting:** Uses a forked version of [highlight.js](https://highlightjs.org/) to process and style code automatically.
- **Classic Theme:** Styled with the popular VS2015 theme.
- **Responsive:** Code blocks automatically wrap and become scrollable if content overflows.

## Usage

1.  **Include the script**

    Add the following script tag to your HTML. It must be loaded as a module (`type="module"`).

    ```html
    <script type="module" src="https://js.sabae.cc/code-js.js"></script>
    ```

2.  **Use the custom elements**

    Wrap your code snippets in the corresponding element.

    ### JavaScript (`<code-js>`)

    ```html
    <code-js>
    chk.onchange = () => {
      inputgraph.value = chk.value;
      for (let i = 0; i < 10; i++) {
        console.log(i);
      }
    };
    </code-js>
    ```

    ### HTML (`<code-html>`)

    **Note:** You must escape HTML characters (e.g., `<` as `&lt;`, `>` as `&gt;`) inside a `<code-html>` block to prevent the browser from rendering them as HTML.

    ```html
    <code-html>
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
      &lt;head&gt;
        &lt;meta charset="utf-8"&gt;
        &lt;meta name="viewport" content="width=device-width"&gt;
      &lt;/head&gt;
    &lt;/html&gt;
    </code-html>
    ```

    ### C (`<code-c>`)

    ```html
    <code-c>
    void main(int argc, char** argv) {
      return 0;
    }
    </code-c>
    ```

## License

MIT License — see [LICENSE](LICENSE).