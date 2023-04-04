# 第三章：JavaScript

## JavaScript 概述

#

## 基本語法
### 變量與賦值
### 資料型別
### 運算符

#

## 操作 DOM
### 獲取元素
### 修改元素屬性
### 創建、刪除元素

#

## 事件處理
### 常用事件類型
### 事件處理的兩種方式

#

## JavaScript 概述
JavaScript 是一種高級程式語言，常用於網頁開發，可以用來創建互動式的網頁、動畫、遊戲等。它是一種直譯語言，不需要編譯，可以直接在瀏覽器中執行。JavaScript 由三部分組成：核心語言、文檔對象模型（DOM）和瀏覽器對象模型（BOM）。

JavaScript 核心語言包括了基本的語法、數據類型、運算符、流程控制語句等。與其他語言一樣，JavaScript 有許多內置的數據類型，包括數字、字符串、布爾值、undefined、null、對象等。JavaScript 也支持許多常用的運算符，例如算術運算符、比較運算符、邏輯運算符等。

DOM 是 JavaScript 的一個重要組成部分，它是一個表示 HTML 和 XML 文檔的樹狀結構，通過 DOM，JavaScript 可以對 HTML 和 XML 文檔進行讀取和操作，實現網頁的動態效果。DOM 中的每一個節點都是一個對象，可以通過 JavaScript 代碼訪問和操作這些對象。

BOM 是 JavaScript 另一個重要的組成部分，它提供了一個對瀏覽器窗口的抽象表示，通過 BOM，JavaScript 可以操縱瀏覽器的行為，例如打開新窗口、設置窗口大小、瀏覽器跳轉等。

JavaScript 的應用領域非常廣泛，不僅可以用於網頁開發，還可以用於桌面應用程序、服務器端程序、移動應用程序等。學習 JavaScript 對於成為一個優秀的網頁開發者是非常重要的。

## 基本語法

### 變量與賦值
JavaScript 基本語法

變量與賦值
在 JavaScript 中，可以使用 var 關鍵字來聲明一個變量。例如：

```js
var myVariable;
```

這樣就聲明了一個名為 myVariable 的變量。注意變量名是區分大小寫的。

可以將變量初始化為一個值，例如：

```js
var myNumber = 42;
var myString = "Hello, world!";
```

變量的值可以被修改：

```js
myNumber = 99;
```

變量的值可以是任何 JavaScript 的數據類型，包括數字、字符串、布爾值、對象等。

在 ES6 中，還引入了 let 和 const 關鍵字來聲明變量。let 用於聲明可變的變量，而 const 用於聲明不可變的常量。

```js
let myVariable = 42;
const myConstant = "Hello, world!";
```

### 資料型別
JavaScript 基本語法

資料型別
在 JavaScript 中，有多種資料型別，包括：

#### 數字（Number）：整數或浮點數。
#### 字串（String）：文字。
#### 布林（Boolean）：true 或 false。
#### 物件（Object）：包含鍵值對的集合。
#### 陣列（Array）：一個元素列表。
#### 函數（Function）：可重複使用的代碼區塊。

可以使用 typeof 運算符來獲取值的資料型別，例如：

```js
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof {}; // "object"
typeof []; // "object"
typeof function() {}; // "function"
```

需要注意的是，typeof 對於陣列返回的是 "object"，這是一個歷史遺留問題。要檢查一個值是否是陣列，可以使用 Array.isArray() 方法：

```js
Array.isArray([]); // true
Array.isArray({}); // false
```

### 運算符
JavaScript 基本語法

運算符
在 JavaScript 中，有多種運算符，包括：

#### 算術運算符（+、-、*、/、%）：用於數字的運算。
#### 比較運算符（>、<、>=、<=、==、!=）：用於比較值。
#### 邏輯運算符（&&、||、!）：用於布林值的運算。
#### 賦值運算符（=、+=、-=、*=、/=、%=）：用於賦值和運算。
#### 自增自減運算符（++、--）：用於增加或減少數字值。

例如：

```js
// 算術運算符
2 + 3; // 5
5 - 2; // 3
2 * 3; // 6
6 / 3; // 2
5 % 2; // 1

// 比較運算符
3 > 2; // true
2 < 3; // true
3 >= 3; // true
2 <= 3; // true
"hello" == "world"; // false
"hello" != "world"; // true

// 邏輯運算符
true && false; // false
true || false; // true
!true; // false

// 賦值運算符
var x = 3;
x += 2; // x 等於 5
x -= 1; // x 等於 4
x *= 2; // x 等於 8
x /= 4; // x 等於 2
x %= 1; // x 等於 0

// 自增自減運算符
var y = 1;
y++; // y 等於 2
y--; // y 等於 1
```