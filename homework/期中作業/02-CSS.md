# 第二章：CSS

## CSS 概述

#

## CSS 選擇器
### 元素選擇器
### 類別選擇器
### ID 選擇器
### 屬性選擇器

#

## CSS 屬性
### 文本相關屬性
### 盒模型相關屬性
### 背景相關屬性

#

## CSS 佈局
### 浮動
### 定位
### 彈性盒子布局

#

## CSS 概述
CSS（Cascading Style Sheets）是一種用於描述網頁外觀和版面的樣式表語言，與 HTML 一起用於網頁設計。CSS 使開發人員能夠輕鬆地控制網頁上各個元素的樣式和排版，從而實現更好的可讀性和使用性。

CSS 首先由 W3C 提出，並於 1996 年首次推出，現在已經成為前端開發的核心技術之一。CSS 的最新版本是 CSS3，它引入了許多新功能，例如較高的彈性、動畫、過渡和更多的佈局選項。

## CSS 選擇器

### 元素選擇器
元素選擇器是最基本的 CSS 選擇器之一，它可以直接選擇 HTML 文檔中的某個 HTML 元素並對其應用樣式。元素選擇器使用 HTML 元素的名稱作為選擇器，例如 p、div、h1 等。以下是一些元素選擇器的示例：

```css
/* 選擇所有的段落元素 */
p {
  color: blue;
}

/* 選擇所有的 div 元素 */
div {
  background-color: gray;
}

/* 選擇所有的標題元素 */
h1, h2, h3 {
  font-size: 24px;
}
```

在上面的代碼中，我們使用了三種不同的元素選擇器來選擇不同的 HTML 元素，並對它們應用不同的樣式。在選擇器後面使用花括號包括一個或多個樣式規則，每個樣式規則由一個屬性和一個值組成。當瀏覽器渲染 HTML 文檔時，它會解析 CSS 樣式表，並根據選擇器選擇對應的元素並應用相應的樣式。

### 類別選擇器
類別選擇器是一種 CSS 選擇器，它允許你選擇指定類別名稱的 HTML 元素並對它們應用樣式。類別選擇器使用點（.）符號作為前綴，後面跟著類別名稱。以下是一個類別選擇器的示例：

```css
/* 選擇所有帶有 .highlight 類別的元素 */
.highlight {
  background-color: yellow;
}
```

在上面的代碼中，我們使用了一個類別選擇器來選擇所有帶有 .highlight 類別的 HTML 元素，並對它們應用黃色背景顏色。類別名稱通常描述了元素的內容或用途，例如 .highlight、.error、.warning 等等。

要給 HTML 元素添加類別，可以使用 class 屬性，例如：

```html
<p class="highlight">這是一個帶有 .highlight 類別的段落元素。</p>
```

在上面的 HTML 代碼中，我們給一個段落元素添加了 .highlight 類別，這使得它符合上面定義的 .highlight 類別選擇器，並將其背景顏色設置為黃色。

### ID 選擇器
ID 選擇器是一種 CSS 選擇器，它允許你選擇指定 ID 名稱的 HTML 元素並對它們應用樣式。ID 選擇器使用井號（#）符號作為前綴，後面跟著 ID 名稱。以下是一個 ID 選擇器的示例：

```css
/* 選擇 ID 為 "header" 的元素 */
#header {
  background-color: blue;
  color: white;
}
```

在上面的代碼中，我們使用了一個 ID 選擇器來選擇 ID 為 "header" 的 HTML 元素，並對它們應用藍色背景顏色和白色文本顏色。

要給 HTML 元素添加 ID，可以使用 id 屬性，例如：

```html
<div id="header">這是一個 ID 為 "header" 的 div 元素。</div>
```

在上面的 HTML 代碼中，我們給一個 div 元素添加了 ID 為 "header"，這使得它符合上面定義的 ID 選擇器，並將其背景顏色設置為藍色，文本顏色設置為白色。需要注意的是，ID 在 HTML 文件中應該是唯一的，因為多個元素不能具有相同的 ID。

### 屬性選擇器
屬性選擇器是一種 CSS 選擇器，它允許您根據元素的屬性和值選擇元素，而不是根據元素的名稱、類別或 ID 選擇元素。屬性選擇器使用方括號（[ ]）來指定要匹配的屬性和值，例如：

```css
/* 選擇具有 title 屬性的所有元素 */
[title] {
  color: red;
}
```

在上面的代碼中，我們使用了一個屬性選擇器來選擇具有 title 屬性的所有元素，並將它們的文本顏色設置為紅色。

您還可以使用屬性選擇器指定要匹配的屬性值，例如：

```css
/* 選擇具有 title 屬性並且值為 "example" 的所有元素 */
[title="example"] {
  font-weight: bold;
}
```

在上面的代碼中，我們使用了一個屬性選擇器來選擇具有 title 屬性並且值為 "example" 的所有元素，並將它們的字體加粗。

需要注意的是，屬性選擇器對屬性的值進行精確匹配，並且區分大小寫。如果要選擇屬性值中包含特定字符串的元素，可以使用屬性包含選擇器（[attribute*=value]）。

## CSS 屬性

### 文本相關屬性
CSS 的文本相關屬性可以控制元素內文本的樣式和佈局，常用的文本相關屬性有：

#### font-size：設置文字大小，可以是絕對大小或相對大小。
#### font-family：設置文字字體，可以是具體字體名稱或字體分類。
#### font-weight：設置文字粗細，可以是數字或關鍵字。
#### text-align：設置文字對齊方式，可以是 left、center、right 或 justify。
#### line-height：設置行高，可以是數字或相對值。

例如，以下是一個使用文本相關屬性的 CSS 代碼示例：

```css
p {
  font-size: 16px;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
}
```

在這個示例中，我們將 p 元素的文字大小設置為 16px，字體設置為 Helvetica Neue 或者 sans-serif，字體粗細設置為 400，文字對齊方式設置為居中，行高設置為 1.5 倍。

### 盒模型相關屬性
CSS 盒模型是指 HTML 元素在渲染時會被看作一個盒子，而盒模型相關屬性則用於控制這個盒子的大小和佈局。常用的盒模型相關屬性有：

#### width：設置元素的寬度。
#### height：設置元素的高度。
#### margin：設置元素外邊距，控制元素與其他元素之間的距離。
#### padding：設置元素內邊距，控制元素內容與邊框之間的距離。
#### border：設置元素邊框，控制元素邊框的粗細和樣式。

例如，以下是一個使用盒模型相關屬性的 CSS 代碼示例：

```css
.box {
  width: 200px;
  height: 100px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #000;
}
```

在這個示例中，我們創建了一個 box 類別，並將這個類別應用到一個元素上。這個元素的寬度設置為 200px，高度設置為 100px，外邊距設置為 10px，內邊距設置為 20px，邊框設置為 1 像素粗的黑色邊框。這些屬性的組合可以幫助我們控制元素的佈局和外觀。

### 背景相關屬性
在 CSS 中，可以使用多種屬性來控制元素的背景，包括：

#### background-color：設置元素的背景顏色。
#### background-image：設置元素的背景圖片，可以是一個 URL，也可以是 linear-gradient() 或 radial-gradient() 等 CSS 函數。
#### background-repeat：設置背景圖片的重複方式，包括 repeat、repeat-x、repeat-y、no-repeat 等。
#### background-position：設置背景圖片的位置，可以使用像素值、百分比、關鍵字等。
#### background-size：設置背景圖片的大小，可以使用像素值、百分比、cover、contain 等。

例如，以下是一個使用背景相關屬性的 CSS 代碼示例：

```css
.box {
  background-color: #eee;
  background-image: url('bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```
在這個示例中，我們創建了一個 box 類別，並將這個類別應用到一個元素上。這個元素的背景顏色設置為淺灰色 (#eee)，背景圖片設置為 bg.jpg，不重複 (no-repeat)，居中 (center)，大小為 cover。這些屬性的組合可以幫助我們創建各種各樣的背景效果。
