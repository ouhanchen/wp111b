# 第四章：深入 JavaScript

## 條件語句與迴圈
### if-else 語句與 switch 語句
### for 語句、while 語句、do-while 語句

#

## 函數
### 函數的定義與調用
### 函數的參數與返回值
### 閉包與匿名函數

#

## 面向對象編程
### 類與對象的概念
### 建構函數與原型
### 繼承與多態

#

## 非同步編程
### Promise 的基本用法
### async/await 的使用方法
### 回調函數的使用與問題

#

## 條件語句與迴圈

### if-else 語句與 switch 語句
if-else 語句和 switch 語句都是在程式中使用條件判斷的語句。它們可以根據一定的條件判斷來執行相應的程式代碼。

if-else 語句
if-else 語句用於在程式中執行不同的操作，具體取決於一定的條件是否為真。if-else 語句的基本語法如下所示：

```js
if (condition) {
  // 如果條件為 true，執行這裡的程式代碼
} else {
  // 如果條件為 false，執行這裡的程式代碼
}
```

其中 condition 是一個布林表達式，它可以是任何返回布林值的運算式或函數調用。如果 condition 為 true，那麼 if 語句塊中的代碼將被執行；否則，else 語句塊中的代碼將被執行。

switch 語句
switch 語句也用於在程式中執行不同的操作，具體取決於一定的條件是否為真。switch 語句的基本語法如下所示：

```js
switch (expression) {
  case value1:
    // 如果 expression 的值等於 value1，執行這裡的程式代碼
    break;
  case value2:
    // 如果 expression 的值等於 value2，執行這裡的程式代碼
    break;
  default:
    // 如果 expression 的值不等於任何一個 case 語句中的值，執行這裡的程式代碼
    break;
}
```

其中 expression 是一個表達式，它的值將被用於和 case 語句中的值進行比較。如果 expression 的值等於某個 case 語句中的值，那麼將執行相應的 case 語句塊中的程式代碼；如果 expression 的值不等於任何一個 case 語句中的值，那麼將執行 default 語句塊中的程式代碼。在 case 語句塊中的程式代碼執行完成後，需要使用 break 關鍵字來結束 switch 語句的執行。

### for 語句、while 語句、do-while 語句
迴圈語句用於在程式中重複執行某個代碼塊，直到一定的條件被滿足。JavaScript 中有三種類型的
for 迴圈

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

while 迴圈

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

do-while 迴圈

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
```

break 和 continue

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  if (i === 3) {
    continue;
  }
  console.log(i);
}
```

#

## 函數

### 函數的定義與調用
在 JavaScript 中，可以通過 function 關鍵字來定義函數。函數的定義包括函數名稱、參數和函數體。

例如，下面的代碼定義了一個名為 add 的函數，它有兩個參數 a 和 b，函數體是將 a 和 b 相加，然後返回結果。

```js
function add(a, b) {
  return a + b;
}
```

可以通過以下方式來調用函數：

```js
const result = add(2, 3);
console.log(result); // 5
```

在這個例子中，我們創建了一個變量 result，然後調用了 add 函數，並將結果賦值給變量 result。最後，我們通過 console.log 將結果輸出到控制台。

除了使用 function 關鍵字來定義函數，還可以使用函數表達式定義函數。函數表達式是一個匿名函數，它可以賦值給變量，並且可以在需要的時候調用。

以下是一個函數表達式的例子：

```js
const add = function(a, b) {
  return a + b;
}
```

在這個例子中，我們使用 const 關鍵字創建了一個變量 add，並將一個匿名函數賦值給它。這個函數接受兩個參數 a 和 b，並將它們相加，然後返回結果。

可以通過以下方式來調用這個函數：

```js
const result = add(2, 3);
console.log(result); // 5
```

這個函數表達式的好處是它可以賦值給變量，並且可以在需要的時候調用。這種方式可以更好地組織代碼，使其更易於閱讀和維護。

### 函數的參數與返回值
在 JavaScript 中，我們可以通過函數的參數來接收調用者傳遞進來的數據，並且在函數內部可以對參數進行一些處理後返回值給調用者。函數的參數和返回值是函數定義時可以聲明的，我們可以根據實際需求來設置參數個數和返回值類型。

函數參數
函數的參數是在函數定義時聲明的，在函數體內部可以使用。在函數調用時，實參（也就是調用者傳入的參數）將會替換函數定義時聲明的形參。

語法

```js
function functionName(param1, param2, ..., paramN) {
  // 函數體
}
```
在上面的語法中，param1, param2, ..., paramN 代表函數的參數，可以有多個參數，參數之間使用逗號 , 分隔。在函數體內部，可以使用這些參數來完成一些操作。

示例
下面是一個簡單的函數示例，它接收兩個參數 a 和 b，並返回它們的和：

```js
function add(a, b) {
  return a + b;
}
```

console.log(add(1, 2)); // 輸出 3
在上面的示例中，add 函數接收兩個參數 a 和 b，並返回它們的和。在調用 add 函數時，傳入實參 1 和 2，結果返回 3。

函數返回值
函數可以通過 return 語句來返回一個值。函數的返回值可以是任意類型的值，包括數字、字符串、數組、對像等等。

語法

```js
function functionName() {
  // 函數體
  return value;
}
```

在上面的語法中，value 是函數的返回值。

示例
下面是一個簡單的函數示例，它接收兩個參數 a 和 b，並返回它們的和：

```js
function add(a, b) {
  return a + b;
}
```

console.log(add(1, 2)); // 輸出 3
在上面的示例中，add 函數接收兩個參數 a 和 b，並返回它們的和。在調用 add 函數時，傳入實參 1 和 2，結果返回 3。

### 閉包與匿名函數
閉包（Closure）指的是一個函數（或函數式子）與其在它的外層環境中的變量形成的一個整體，形成的這個整體就叫做閉包。閉包可以用來實現一些特殊的功能，例如記錄一些私有變量等。

匿名函數（Anonymous Function）指的是沒有函數名稱的函數，通常匿名函數會被當做值傳遞給另一個函數，或者用於立即執行的函數。

在 JavaScript 中，閉包和匿名函數常常被一起使用，例如可以將一個匿名函數作為閉包的返回值。

下面是一個閉包的例子，該閉包用來實現一個計數器：

```js
function createCounter() {
  var count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

var counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
```
上面的例子中，createCounter 函數返回一個匿名函數，這個匿名函數擁有 createCounter 函數中定義的 count 變量，這樣就實現了一個簡單的計數器。

下面是一個匿名函數的例子，該匿名函數用於立即執行：

```js
(function() {
  console.log('Hello, World!');
})();
```

上面的例子中，我們定義了一個匿名函數，並且立即執行了這個函數，執行結果就是輸出一個字符串。

#

## 面向對象編程

### 類與對象的概念
在 JavaScript 中，可以使用面向對象的方式進行編程。在面向對象的編程中，最基本的概念就是類和對象。

類是一個抽象的概念，它代表著一類事物的抽象，具有一定的屬性和行為。而對象則是一個具體的實例，它是由類實例化得到的，擁有類中定義的屬性和行為。

在 JavaScript 中，可以使用關鍵字 class 定義一個類，使用關鍵字 new 創建一個對象。例如，下面是一個簡單的類定義和對象創建的示例：

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
  }
}

let person = new Person('Alice', 25);
person.sayHello();
```

在上面的例子中，我們定義了一個名為 Person 的類，它有兩個屬性 name 和 age，以及一個方法 sayHello。然後我們使用 new 關鍵字創建了一個 Person 的對象，並調用了它的 sayHello 方法。

需要注意的是，JavaScript 中的類定義和對象創建是基於原型（prototype）的，而不是傳統的基於類的繼承。這意味著，JavaScript 中的對象可以在運行時動態添加屬性和方法，並且可以基於原型繼承機制實現對象之間的繼承。

### 建構函數與原型
JavaScript 是一種物件導向的程式語言，因此在 JavaScript 中，我們可以使用類與對象的概念進行編程。

在 JavaScript 中，可以通過建立函數來模擬類的概念，並使用原型來實現繼承。下面我們來詳細講解一下這些概念。

建構函數
建構函數是一種特殊的函數，它被用來創建新的對象。在 JavaScript 中，建構函數的命名慣例是使用大寫字母開頭。

下面是一個簡單的建構函數的例子：

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

在這個例子中，Person 是一個建構函數，它接受兩個參數 name 和 age，並將它們分別賦值給新建立的對象的 name 和 age 屬性。

要使用建構函數創建新的對象，可以使用 new 關鍵字：

```js
var person1 = new Person('John', 30);
var person2 = new Person('Jane', 25);
```

在這個例子中，person1 和 person2 是使用 Person 建構函數創建的兩個新的對象。

原型
在 JavaScript 中，每個對象都有一個原型，它是一個對象，用於定義對象的屬性和方法。可以通過原型來實現繼承。

在建構函數中，可以使用原型來定義屬性和方法。例如，可以將一個方法定義在建構函數的原型上，這樣所有創建的對象都可以共享這個方法。

下面是一個使用原型定義方法的例子：

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log('Hello, my name is ' + this.name);
};
```

在這個例子中，我們在 Person 的原型上定義了一個 greet 方法，這個方法可以用來打印出一個人的名字。

### 繼承與多態
繼承和多態是面向對象編程中的重要概念，可以讓代碼更加模組化和可重用。在 JavaScript 中，繼承和多態的實現方式和其他面向對象語言有些不同。

繼承
繼承是一種將一個對象的屬性和方法擴展到另一個對象的方式。在 JavaScript 中，繼承可以通過原型來實現。

原型鏈
每個 JavaScript 對象都有一個隱式的原型屬性（proto），指向其原型對象。原型對象也是一個 JavaScript 對象，同樣具有隱式的原型屬性，指向其自己的原型對象。這種原型鏈的結構形成了 JavaScript 對象之間的繼承關係。

建構函數和原型
在 JavaScript 中，我們可以使用建構函數和原型來實現對象的繼承。建構函數用來初始化對象的屬性，原型用來定義對象的方法。

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log('Woof!');
};

const dog = new Dog('Fido', 'Labrador Retriever');
dog.sayHello(); // Hello, I'm Fido
dog.bark(); // Woof!
```

在這個例子中，我們定義了兩個建構函數，Animal 和 Dog。Animal 的原型對象定義了一個 sayHello 方法，Dog 通過繼承 Animal 的原型對象來獲取這個方法。Dog 的原型對象又定義了一個自己的方法 bark。

在創建 Dog 對象時，我們首先調用 Animal 的建構函數來初始化 name 屬性，然後再初始化 breed 屬性。使用 Object.create 方法來創建一個新的對象，並將其原型設置為 Animal 的原型對象。這樣，Dog 的原型鏈就包含了 Animal 的原型鏈，Dog 就可以繼承 Animal 的屬性和方法了。

#

## 非同步編程
JavaScript 是一個單線程的語言，這意味著同一時間只能執行一個任務。為了處理一些複雜的、需要時間的操作，JavaScript 引入了非同步編程。

### Promise 的基本用法
Promise 是一個表示非同步操作的對象，Promise 對象可以用來表示一個尚未完成但將來會完成的操作。

Promise 有三種狀態：

Pending（進行中）：Promise 實例創建後處於的初始狀態，這時 Promise 還沒有被解決或拒絕。
Fulfilled（已成功）：表示操作成功完成，並返回結果。
Rejected（已失敗）：表示操作失敗，並返回錯誤信息。
Promise 的基本用法：

```js
const promise = new Promise((resolve, reject) => {
  // 非同步操作
  if (/* 操作成功 */) {
    resolve(result);  // 調用 resolve 函數將 Promise 的狀態設為 Fulfilled
  } else {
    reject(error);    // 調用 reject 函數將 Promise 的狀態設為 Rejected
  }
});

promise.then(result => {
  // 操作成功，處理結果
}).catch(error => {
  // 操作失敗，處理錯誤
});
```

以上是 Promise 的基本用法，其中 then() 方法用於處理 Promise 成功的情況，catch() 方法用於處理 Promise 失敗的情況。

### async/await 的使用方法
在 JavaScript 中，async/await 是一種非常常用的進行非同步編程的方式。它基於 Promise 的概念，使得編寫異步代碼的過程更加直觀和簡單。

async/await 的基本用法如下：

1. 定義一個 async 函數，該函數的返回值是一個 Promise 對象。
2. 在 async 函數中使用 await 關鍵字，等待一個 Promise 對象的結果。
3. 使用 try/catch 語句捕獲異常，異常時返回錯誤信息。

下面是一個簡單的範例：

```js
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

在上面的例子中，fetchData 函數是一個 async 函數，它返回一個 Promise 對象。在函數內部，我們使用了 await 關鍵字，等待 fetch 和 response.json 方法的結果。如果出現異常，我們使用 catch 語句捕獲錯誤。

使用 async/await 可以使得異步代碼的編寫更加清晰和易讀，但同時也需要注意一些性能和併發的問題。

### 回調函數的使用與問題

回調函數是 JavaScript 中一種常用的非同步編程方式，它可以在某個事件完成後執行相應的操作。例如，當使用者點擊一個按鈕時，可以註冊一個回調函數，在按鈕被點擊時執行。

回調函數的基本使用方法如下：

```js
function foo(callback) {
  console.log('foo function');
  callback();
}

function bar() {
  console.log('bar function');
}

foo(bar);
```

在上面的例子中，foo 函數接受一個回調函數作為參數，並在函數內部調用該回調函數。在 bar 函數中，我們定義了要執行的操作。當 foo 函數被調用時，它會先打印 'foo function'，然後執行回調函數。在本例中，回調函數就是 bar 函數。

然而，回調函數也存在一些問題。最常見的問題是回調函數嵌套過多，導致代碼難以維護和理解。例如，下面的代碼就存在嵌套過多的問題：

```js
function foo(callback) {
  console.log('foo function');
  setTimeout(function() {
    console.log('setTimeout function');
    callback();
  }, 1000);
}

function bar() {
  console.log('bar function');
}

foo(function() {
  console.log('callback function');
  bar();
});
```

在上面的例子中，foo 函數中有一個 setTimeout 函數，它會在 1 秒後執行回調函數。回調函數中又調用了 bar 函數。這樣就造成了回調函數嵌套過多的問題，難以理解和維護。

為了解決這個問題，JavaScript 引入了 Promise 和 async/await 等新的非同步編程方式。這些新的方式可以讓代碼更加易讀和易維護。
