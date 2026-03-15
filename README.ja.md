# code-js

code-jsは、JavaScriptコードのハイライト表示を行う便利なタグです。 HTML、Cなどの他の言語のコードもハイライト表示することができます。

## デモ
[デモページ](https://code4fukui.github.io/code-js/demo.html)では、code-jsタグの使用例を確認できます。

## 機能
- JavaScript、HTML、C言語のコードをハイライト表示
- スタイルはVS2015テーマを使用
- コードのインラインもしくは自動改行表示に対応

## 使い方
HTMLファイルの`<head>`セクションに以下のスクリプトを追加します:

```html
<script type="module" src="https://js.sabae.cc/code-js.js"></script>
```

その後、コードをcode-js、code-html、code-cタグで囲んで表示できます。

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