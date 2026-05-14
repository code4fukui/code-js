# code-js

構文ハイライトされたJavaScript、HTML、C言語のコードをWebページ上に表示するためのカスタムHTML要素のセットです。

## デモ

[**ライブデモ**](https://code4fukui.github.io/code-js/)

デモページでは、3つのカスタム要素すべての動作例を確認できます。

## 特徴

- **簡単な組み込み:** 依存関係のないスクリプトを1つインポートするだけで利用できます。
- **言語別の要素:** `<code-js>`、`<code-html>`、`<code-c>` を提供し、明確でセマンティックなマークアップが可能です。
- **自動ハイライト:** [highlight.js](https://highlightjs.org/) のフォーク版を使用して、コードの処理とスタイル適用を自動的に行います。
- **クラシックなテーマ:** 人気のVS2015テーマでスタイルが適用されます。
- **レスポンシブ対応:** コンテンツがはみ出す場合、コードブロックは自動的に折り返され、スクロール可能になります。

## 使い方

1.  **スクリプトの読み込み**

    以下のスクリプトタグをHTMLに追加します。モジュールとして読み込む必要があります（`type="module"`）。

    ```html
    <script type="module" src="https://js.sabae.cc/code-js.js"></script>
    ```

2.  **カスタム要素の使用**

    コードスニペットを対応する要素で囲みます。

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

    **注意:** ブラウザがHTMLとしてレンダリングするのを防ぐため、`<code-html>` ブロック内のHTML文字（例: `<` を `&lt;`、`>` を `&gt;`）はエスケープする必要があります。

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

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
