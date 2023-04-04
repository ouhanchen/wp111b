# 第五章：Deno

## Deno 的安裝與使用
### 安裝 Deno
### Deno 命令行工具的使用
### 編寫與執行 Deno 程序

#

## Deno 的模組與套件管理
### 模組的概念與使用
### Deno 的模組解析規則
### 使用第三方

#

## Deno 的安裝與使用

### 安裝 Deno
Deno 是一個基於 V8 引擎的 JavaScript 和 TypeScript 運行時，它使用 Rust 編寫。在安裝 Deno 之前，請確認你的系統已經安裝了 Rust 編程語言。你可以在 Rust 的官方網站上下載和安裝 Rust：https://www.rust-lang.org/tools/install。

安裝完 Rust 之後，你可以使用以下命令在終端中安裝 Deno：

curl -fsSL https://deno.land/x/install/install.sh | sh

或者，你也可以使用 Homebrew 在 macOS 上安裝 Deno：

brew install deno

安裝完成後，你可以在終端中輸入 deno --version 命令，應該會輸出 Deno 的版本信息。

現在，你已經成功安裝了 Deno，可以開始使用它來編寫 JavaScript 或 TypeScript 程序。

### Deno 命令行工具的使用
Deno 是一個命令行工具，因此我們可以在終端機或命令提示字元窗口中使用它。以下是一些常用的 Deno 命令行指令：

#### deno run <filename>: 執行指定的 TypeScript 或 JavaScript 檔案。
#### deno info <filename>: 顯示指定檔案的詳細信息，如依賴關係、依賴版本等。
#### deno cache <filename>: 將指定檔案的依賴關係下載到本地緩存中。
#### deno install <name> <filename>: 安裝指定的腳本或應用程式。
#### deno help: 顯示 Deno 的幫助訊息。

例如，要執行一個名為 app.ts 的 TypeScript 檔案，我們可以使用以下指令：

deno run app.ts

如果是 JavaScript 檔案，則使用以下指令：

deno run app.js

如果檔案有依賴關係，則需要使用 deno cache 命令將依賴下載到本地緩存中，再執行主程式。例如：

deno cache app.ts
deno run app.ts

注意，在預設情況下，Deno 禁止讀取本地磁碟機上的檔案。如果您需要讀取本地檔案，則需要在啟動 Deno 時指定 --allow-read 參數。例如：

deno run --allow-read app.ts

這樣，Deno 就可以讀取本地檔案了。同樣地，如果您需要向網際網路發送請求，則需要使用 --allow-net 參數。例如：

deno run --allow-net app.ts

這樣，Deno 就可以向網際網路發送請求了。

### 編寫與執行 Deno 程序

編寫與執行 Deno 程序的步驟如下：

1. 創建一個新的 .ts 或 .js 文件，例如 hello.ts。

2. 在文件中編寫 Deno 程序，例如：

```typescript
console.log("Hello, Deno!");
```

3. 在命令行中執行以下命令來運行 Deno 程序：

deno run hello.ts

這將使用 Deno 執行器運行 hello.ts 文件，並輸出 "Hello, Deno!"。如果你使用的是 .js 文件，請使用以下命令：

deno run hello.js

4. 如果你需要使用外部的庫或模組，你可以在程序中使用 import 關鍵字引入，例如：

```typescript
import * as log from "https://deno.land/std/log/mod.ts";
```

這將從 https://deno.land/std/log/mod.ts 引入 Deno 的標準日誌庫。
當你第一次引入一個模組時，Deno 會下載並編譯它，以便你的程序可以使用它。如果你需要引入多個模組，你可以將它們列在程序的頂部，Deno 會自動管理它們的依賴關係。

#

## Deno 的模組與套件管理

### 模組的概念與使用
在 Deno 中，模組是指由一個或多個 JavaScript 文件組成的程式庫，每個模組可以定義變量、函數、類等對象，並可以將這些對象暴露給其他模組使用。

在 Deno 中，可以使用 import 關鍵字引入模組。引入模組的方式有兩種，分別是：

1. 引入標準模組

標準模組是指 Deno 內置的模組，例如 http 模組、fs 模組等。可以使用以下方式引入標準模組：

```js
import { 模組名 } from '標準模組名';
```

2. 引入第三方模組

第三方模組是指其他人開發的 Deno 模組，可以通過 URL 或本地文件系統引入。可以使用以下方式引入第三方模組：

```js
import { 模組名 } from 'URL 或本地路徑';
```

引入模組後，可以使用該模組中定義的變量、函數、類等對象。

在 Deno 中，沒有像 Node.js 中的 package.json 文件來管理套件依賴關係。當引入第三方模組時，Deno 會自動從該 URL 下載模組並緩存，之後再次引入該模組時，Deno 會直接使用緩存中的模組。如果要更新模組，可以使用 deno cache --reload URL 命令來強制重新下載模組。

### Deno 的模組解析規則
在 Deno 中，模組是透過 URL 來進行引入的，並且支持標準的 URL 方案，如 http://、https://、file:// 等，也支持 data: 方案和相對路徑。Deno 的模組引入方式是類似於瀏覽器端的 ES 模組，使用 import 關鍵字進行引入。

Deno 模組的解析規則如下：

1. 如果模組名是一個 URL，Deno 會直接從該 URL 下載該模組。
2. 如果模組名是以 /、./、../ 開頭的相對路徑，Deno 會根據當前工作目錄解析出絕對路徑，然後進行引入。
3. 如果模組名只是一個名稱而沒有路徑，Deno 會先在內建模組庫（built-in module）中查找是否有該模組，如果沒有，Deno 會在環境變量 DENO_DIR 設定的目錄中查找是否有該模組，如果還是沒有，Deno 會試圖在執行 deno 命令時添加 --allow-net 參數，然後嘗試以該名稱作為 URL 下載該模組。

如果 DENO_DIR 環境變量沒有被設置，Deno 會使用 $HOME/.cache/deno 作為默認的模組緩存目錄。如果 DENO_DIR 設置了，則模組緩存會保存在 $DENO_DIR/deps 目錄下。模組緩存中的模組可以手動刪除，以觸發 Deno 重新下載模組。

### 使用第三方
您好！對於使用第三方套件，Deno提供了內建的套件管理工具Deno Land。透過這個工具，您可以輕鬆地安裝、引入和管理套件。

以下是使用Deno Land安裝、引入和管理套件的步驟：

1. 在終端機上輸入以下命令，安裝需要的套件：

```php
deno install <套件名稱>
```

2. 在程式中引入套件：

```js
import <套件名稱> from '<套件名稱>';
```

注意，Deno的模組解析路徑是以URL為基礎的，因此您可以直接使用URL來引入套件。

3. 當您需要更新套件時，可以使用以下命令：

```php
deno upgrade <套件名稱>
```

如果您需要卸載某個套件，可以使用以下命令：

```php
deno uninstall <套件名稱>
```

值得一提的是，Deno支援ES模組，您可以使用ES模組導入和導出套件，而無需使用CommonJS的require()和module.exports。這大大簡化了代碼的撰寫和管理。

