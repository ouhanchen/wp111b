# 第一章：HTML

## HTML 概述

#

## HTML 基礎結構
### DOCTYPE 與 html 元素
### head 元素與 meta 元素
### body 元素

#

## HTML 元素與屬性
### 常用的 HTML 元素
### 常用的 HTML 屬性

#

## HTML 表格與表單
### 創建表格
### 創建表單
### 表格與表單的常用屬性

#

## 注釋

#

## HTML 概述
HTML（HyperText Markup Language）是一種標記語言，用於描述網頁的結構和內容。HTML 檔案通常包含文本、標籤和屬性，這些標籤和屬性用於描述網頁的內容、結構、樣式和功能。HTML 被廣泛地用於 Web 開發，是網頁開發的基礎。

HTML 的歷史可以追溯到 1989 年，由 Tim Berners-Lee 發明。隨著 Web 技術的發展，HTML 不斷地進化，現在最新的版本是 HTML5。HTML5 引入了許多新特性，例如語意化元素、音視頻元素、Web 存儲技術等，為 Web 開發帶來了許多便利。

HTML 文件的基本語法包括標籤、屬性和內容。標籤用於標識元素的開始和結束，例如 <p> 標籤用於標識段落。屬性用於指定元素的額外信息，例如 <a> 標籤的 href 屬性用於指定超連結的目標。內容是元素包含的文本和其他元素。

HTML 文件的結構包括 DOCTYPE 声明、html 元素、head 元素和 body 元素。DOCTYPE 声明用於告訴 Web 瀏覽器使用的 HTML 版本。html 元素是 HTML 文件的根元素，包含 head 和 body 兩個子元素。head 元素用於包含文件的元信息和樣式表，body 元素用於包含網頁的實際內容。

HTML 中的元素包括段落、標題、文本格式化元素、超連結元素、圖像元素、表格元素、表單元素等。每個元素都有自己的屬性，例如 ID、class、style、onclick 等。

HTML 的開發需要遵循一些最佳實踐，例如代碼風格、語意化 HTML、使用清單等。代碼風格需要保持一致，方便代碼的閱讀和維護；語意化 HTML 通過使用語意化的標籤和屬性，提高網頁的可讀性和可訪問性；使用清單可以更好地組織和呈現內容。

## HTML 基礎結構

### DOCTYPE 與 html 元素
DOCTYPE 声明用於告訴 Web 瀏覽器使用的 HTML 版本。HTML5 的 DOCTYPE 声明如下：

```html
<!DOCTYPE html>
```

html 元素是 HTML 文件的根元素，包含 head 和 body 兩個子元素。html 元素必須出現在文件的開頭，如下所示：

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- 包含文件的元信息和樣式表 -->
  </head>
  <body>
    <!-- 包含網頁的實際內容 -->
  </body>
</html>
```

### head 元素與 meta 元素
head 元素用於包含文件的元信息和樣式表。在 head 元素中，可以使用以下標籤：

title：用於設置文件的標題，在瀏覽器的標題欄顯示。
meta：用於設置文件的元信息，例如關鍵字、描述等。
link：用於引入外部樣式表。

```html
<head>
  <title>這是標題</title>
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="description" content="這是網頁描述">
  <link rel="stylesheet" href="styles.css">
</head>
```

### body 元素
body 元素用於包含網頁的實際內容。在 body 元素中，可以使用各種 HTML 元素，例如段落、標題、圖像、表格、表單等。

```html
<body>
  <h1>這是一個標題</h1>
  <p>這是一個段落。</p>
  <img src="image.jpg" alt="圖片">
  <table>
    <tr>
      <th>姓名</th>
      <th>年齡</th>
    </tr>
    <tr>
      <td>小明</td>
      <td>18</td>
    </tr>
  </table>
  <form action="submit.php" method="post">
    <label for="name">姓名：</label>
    <input type="text" id="name" name="name">
    <input type="submit" value="提交">
  </form>
</body>
```

## 注釋
HTML 中可以使用注釋來說明代碼或暫時禁用代碼。注釋使用 <!-- 和 --> 包裹，可以跨行使用。

```html
<!--
這是一個注釋
-->
<p>這是一個段落。</p>
```