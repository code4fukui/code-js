# code-js

code-jsは、Webページ上でJavaScript、HTML、Cなどのコードをハイライト表示するためのカスタム要素です。

## デモ
[デモページ](https://code4fukui.github.io/code-js/demo.html)では、code-jsタグの使用例を確認できます。

## 機能
- `<code-js>`, `<code-html>`, `<code-c>`タグで対応言語のコードをハイライト表示
- VS2015テーマを使用したスタイル
- コードのインラインもしくは自動改行表示に対応

## 使い方
HTMLファイルの`<head>`セクションに以下のスクリプトを追加します:

```html
<script type="module" src="https://js.sabae.cc/code-js.js"></script>
```

その後、コードをタグで囲んで表示できます:

```html
<code-js>
onload = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
};
</code-js>
```

## ライセンス
MIT License