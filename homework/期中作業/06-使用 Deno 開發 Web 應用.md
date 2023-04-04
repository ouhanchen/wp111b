# 第六章：使用 Deno 開發 Web 應用

## Deno 的 Web 應用框架
### Oak 應用框架的基本用法
### 相關中間件的使用方法

#

## 資料庫的使用
### Deno 的資料庫模組
### 使用 SQLite 作為資料庫
### 使用 MongoDB 作為資料庫

#

## 使用 WebSocket
### WebSocket 的基本概念
### Deno 中的 WebSocket 模組
### WebSocket 的應用實例

#

## Deno 的 Web 應用框架

### Oak 應用框架的基本用法
Oak 是 Deno 的一個 Web 應用框架，它提供了一系列的 API 來簡化 Web 應用的開發。

使用 Oak 框架開發 Web 應用的基本步驟如下：

1. 引入 Oak 模組
在應用程式的入口文件中，使用 import 語句引入 Oak 模組：

```typescript
import { Application } from "https://deno.land/x/oak/mod.ts";
```

2. 建立應用程式
創建一個 Application 對象：

```typescript
const app = new Application();
```

3. 設置路由
設置應用程式的路由，即根據不同的 URL 請求返回不同的內容。可以使用 app.use() 方法設置中間件，也可以使用 app.listen() 方法開啟服務器並監聽請求。

以下是一個簡單的例子：

```typescript
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router
  .get("/", (ctx) => {
    ctx.response.body = "Hello, world!";
  })
  .get("/about", (ctx) => {
    ctx.response.body = "About page";
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server started");
await app.listen({ port: 8000 });
```

在這個例子中，創建了一個 Router 對象並設置了兩個路由。app.use(router.routes()) 設置了路由中間件，app.use(router.allowedMethods()) 設置了處理請求方法不允許的中間件。最後使用 app.listen() 方法開啟服務器並監聽請求。

4. 執行應用程式
執行應用程式，可以使用以下命令：

deno run --allow-net app.ts

其中，--allow-net 參數是許可程序訪問網絡的權限。

以上就是使用 Oak 框架開發 Web 應用的基本流程。

### 相關中間件的使用方法
在 Oak 應用框架中，中間件是處理請求與響應之間的函數，可以進行諸如身份驗證、日誌記錄等操作。在 Oak 中使用中間件非常簡單，只需要在 app 中使用 use 方法即可。

例如，以下是一個使用 logger 中間件的例子：


```typescript
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import logger from "https://deno.land/x/oak_logger/mod.ts";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello, World!";
});

const app = new Application();
app.use(logger.logger);
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
```

在這個例子中，首先創建了一個 Router 對象並定義了一個路由處理程序。然後，創建了一個應用程序對象並使用 use 方法添加了 logger 中間件和路由中間件。最後，調用應用程序對象的 listen 方法以啟動 Web 服務器。

除了 logger 中間件外，Oak 還提供了其他常見的中間件，例如靜態文件服務器、身份驗證中間件等，可以通過第三方庫來使用。

#

## 資料庫的使用

### Deno 的資料庫模組
Deno 平台下目前主要的數據庫模組有以下幾種：

1. deno_mysql: MySQL 數據庫模組，使用純 TypeScript 編寫，支持 Promise 和 async/await。
2. deno_postgres: PostgreSQL 數據庫模組，使用純 TypeScript 編寫，支持 Promise 和 async/await。
3. deno_mongo: MongoDB 數據庫模組，使用 TypeScript 編寫，基於 Node.js 的 mongodb 模組。

使用 Deno 模組管理器安裝這些模組後，即可在 Deno 應用中使用相應的數據庫。需要注意的是，目前這些模組的功能還相對簡單，且在開發過程中可能會遇到一些問題，需要多加註意。

### 使用 SQLite 作為資料庫
SQLite 是一款輕量級的關聯式資料庫管理系統，使用 C 語言編寫，支持 SQL 語法，並且可以跨平台運行。Deno 的資料庫模組提供了支持 SQLite 的功能，可以讓我們在 Deno 中使用 SQLite 作為資料庫。

以下是在 Deno 中使用 SQLite 的基本步驟：

1. 安裝 Deno 的 SQLite 模組

Deno 的標準庫中包含了支持 SQLite 的模組，可以直接在程式中使用。在程式中引入 sqlite 模組即可。

```js
import { open } from "https://deno.land/x/sqlite/mod.ts";
```

2. 創建資料庫

要創建一個新的 SQLite 資料庫，可以使用 open() 函數打開一個不存在的資料庫文件，此時會自動創建一個新的資料庫文件。

```js
const db = await open("./test.db");
```

3. 創建表格

在創建好資料庫之後，可以使用 SQL 語句創建表格。以下是一個創建 users 表格的例子：

```js
await db.execute(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER
  )
`);
```

4. 插入資料

使用 execute() 函數可以執行一個 SQL 語句，插入資料到表格中。以下是一個插入一條新紀錄的例子：

```js
await db.execute(`
  INSERT INTO users (name, age) VALUES (?, ?)
`, ["John", 30]);
```

5. 查詢資料

使用 query() 函數可以執行一個 SQL 查詢語句，獲取符合條件的資料。以下是一個查詢所有 users 紀錄的例子：

```js
const result = await db.query("SELECT * FROM users");
console.log(result);
```

6. 更新資料

使用 execute() 函數可以執行一個 SQL 語句，更新符合條件的資料。以下是一個更新名為 "John" 的使用者的年齡的例子：

```js
await db.execute(`
  UPDATE users SET age = ? WHERE name = ?
`, [35, "John"]);
```

7. 刪除資料

使用 execute() 函數可以執行一個 SQL 語句，刪除符合條件的資料。以下是一個刪除名為 "John" 的使用者的例子：

```js
await db.execute(`
  DELETE FROM users WHERE name = ?
```

### 使用 MongoDB 作為資料庫
使用 MongoDB 作為資料庫需要先安裝 MongoDB 資料庫伺服器，然後使用 Node.js 提供的 MongoDB 驅動程式庫與 MongoDB 資料庫進行連接，以進行資料的儲存、讀取和更新等操作。

以下是使用 Node.js 驅動程式庫 mongodb 在 Deno 中連接 MongoDB 資料庫的基本範例：

```js
import { MongoClient } from "https://deno.land/x/mongo/mod.ts";

// 設定 MongoDB 連接資訊
const client = new MongoClient();
await client.connect("mongodb://localhost:27017");

// 選擇要使用的資料庫與集合
const db = client.database("myDatabase");
const collection = db.collection("myCollection");

// 插入一筆資料
const insertId = await collection.insertOne({
  name: "John",
  age: 25,
});

// 查詢資料
const documents = await collection.find({ name: "John" });
for (const document of documents) {
  console.log(document);
}

// 更新資料
const updateResult = await collection.updateOne(
  { _id: insertId },
  { $set: { age: 26 } },
);

// 刪除資料
const deleteResult = await collection.deleteOne({ _id: insertId });

// 關閉 MongoDB 連接
await client.close();
```

需要注意的是，由於 Deno 不支援 Node.js 提供的 mongodb 模組，因此需要使用第三方模組 mongo。在執行以上程式碼時，需要添加 --allow-net 和 --allow-env 權限，允許程式訪問網路和環境變數。


#


## 使用 WebSocket

### WebSocket 的基本概念
WebSocket 是一種全雙工協議，它可以在客戶端和服務器之間建立一個持久的連接，使得客戶端和服務器可以在一個會話中進行多次交互，而無需每次都建立新的 HTTP 請求。WebSocket 協議通常使用標準的 HTTP 端口（80 和 443），因此不受防火牆的限制，可以在任何地方使用。WebSocket 協議使用的是二進制協議，可以傳輸任意類型的數據，而且速度快，延遲低，對於需要實時通信的場景非常適合。

### Deno 中的 WebSocket 模組
Deno 提供了內置的 WebSocket 模組，可以在 Deno 中編寫 WebSocket 服務器端和客戶端。

在服務器端，可以使用 WebSocketServer 類別來創建 WebSocket 服務器。以下是一個簡單的例子：

```typescript
import { serve } from "https://deno.land/std/http/server.ts";
import {
  acceptWebSocket,
  isWebSocketCloseEvent,
  WebSocket,
} from "https://deno.land/std/ws/mod.ts";

const server = serve({ port: 8080 });

console.log("WebSocket server is running on port 8080.");

for await (const req of server) {
  const { conn, r: bufReader, w: bufWriter, headers } = req;
  acceptWebSocket({
    conn,
    bufReader,
    bufWriter,
    headers,
  })
    .then(handleWebSocket)
    .catch(async (err) => {
      console.error(`Failed to accept WebSocket: ${err}`);
      await req.respond({ status: 400 });
    });
}

async function handleWebSocket(websocket: WebSocket) {
  console.log("WebSocket connected!");
  for await (const ev of websocket) {
    if (typeof ev === "string") {
      console.log("Received message: ", ev);
      await websocket.send(`You said: ${ev}`);
    } else if (ev instanceof Uint8Array) {
      console.log("Received binary message. Length: ", ev.length);
    } else if (isWebSocketCloseEvent(ev)) {
      console.log("WebSocket closed.");
    }
  }
}
```

在上面的例子中，我們使用 serve 函數創建了一個 HTTP 服務器，並使用 acceptWebSocket 函數來接受 WebSocket 連接。在連接建立後，我們使用 for-await-of 迴圈來從 WebSocket 中讀取訊息，並使用 websocket.send 方法發送回覆。

在客戶端，可以使用 WebSocket 類別來創建 WebSocket 連接。以下是一個簡單的例子：

```typescript
const socket = new WebSocket("ws://localhost:8080");

socket.addEventListener("open", () => {
  console.log("WebSocket connected!");
  socket.send("Hello, WebSocket!");
});

socket.addEventListener("message", (event) => {
  console.log(`Received message: ${event.data}`);
});

socket.addEventListener("close", () => {
  console.log("WebSocket closed.");
});
```

在上面的例子中，我們使用 WebSocket 類別創建一個 WebSocket 連接，並使用 socket.send 方法發送訊息。當接收到訊息時，我們使用 socket.addEventListener("message", ...) 註冊一個事件處理函數來處理訊息。當 WebSocket 連接關閉時，我們使用 socket.addEventListener("close", ...) 註冊一個事件處理函數來處理關閉事件。

### WebSocket 的應用實例
WebSocket 是一個在 Web 應用中提供全雙工通訊通道的技術，可以實現 Web 應用之間的即時通訊，比如聊天室、遊戲等應用。在 Deno 中，可以使用標準庫中提供的 WebSocket 模組來實現 WebSocket 功能。

以下是一個簡單的 WebSocket 應用實例，該應用可以將用戶輸入的訊息廣播到所有連接到該 WebSocket 的客戶端：

```typescript
import { serve } from "https://deno.land/std/http/server.ts";
import { acceptWebSocket, isWebSocketCloseEvent } from "https://deno.land/std/ws/mod.ts";

const server = serve({ port: 8080 });

console.log("Listening on http://localhost:8080");

for await (const req of server) {
  if (req.url === "/chat") {
    const { conn, r: bufReader, w: bufWriter, headers } = req;
    acceptWebSocket({
      conn,
      bufReader,
      bufWriter,
      headers,
    })
      .then(chat)
      .catch(async (err) => {
        console.error(`failed to accept websocket: ${err}`);
        await req.respond({ status: 400 });
      });
  }
}

async function chat(ws: WebSocket) {
  console.log("socket connected!");

  for await (const ev of ws) {
    if (typeof ev === "string") {
      // Broadcast message to all clients
      console.log("message:", ev);
      for (const client of clients) {
        client.send(ev);
      }
    } else if (isWebSocketCloseEvent(ev)) {
      // Remove client from clients list
      console.log("socket closed");
      clients.delete(ws);
    }
  }
}
```

該應用程序使用 Deno 的 HTTP 伺服器在端口 8080 上監聽請求。當收到名為 /chat 的請求時，使用 acceptWebSocket 函數來接受 WebSocket 連接。如果連接成功，則調用 chat 函數來處理連接。

chat 函數使用 for await...of 循環遍歷 WebSocket 的事件。如果事件的型別為字符串，則將其廣播到所有連接到該 WebSocket 的客戶端。如果事件的型別為 isWebSocketCloseEvent，則將客戶端從客戶端列表中刪除。

要使用該應用，可以執行以下命令：

deno run --allow-net --allow-read chat.ts

在瀏覽器中打開兩個標籤頁，分別輸入以下 URL：http://localhost:8080/chat，然後在其中一個標籤頁輸入一些文字，可以發現該文字被廣播到另一個標籤頁。




