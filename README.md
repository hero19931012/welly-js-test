# welly-js-test

請寫 3 段程式碼(語言不拘)回覆下列 3 個問題，並將程式碼上傳到 github 後分享鏈接給我們。

## 1. 建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci sequence 中的第幾個數字的值。

```js
fibonacci(0); // 0
fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
```

### Answer

參考 [for-loop-fibonacci](./for-loop-fibonacci.ts) 與 [recursion-fibonacci](./recursion-fibonacci.ts)

## 2. 使用 Linked List 實作 Stack ，實作需包含以下方法。

push(): 添加新元素。
pop():移除元素並返回被移除的元素。
size():返回所有元素數量。

```js
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3
stack.size(); // 2
```

### Answer

參考 [linked-list-stack](./linked-list-stack.ts)

## 3. 將下列輸入資料整合成期望的輸出結果。

輸入資料:

```js
const userIds = [‘U01’, ‘U02’, ‘U03’]

const orderIds = [‘T01’, ‘T02’, ‘T03, ‘T04’]

const userOrders = [
  { userId: ‘U01’, orderIds: [‘T01’, ‘T02’] },
  { userId: ‘U02’, orderIds: [] },
  { userId: ‘U03’, orderIds: [‘T03’] },
]

const userData = { ‘U01’: ‘Tom’, ‘U02’: ‘Sam’, ‘U03’: ‘John’ }

const orderData = {
  ‘T01’: { name: ‘A’, price: 499 },
  ‘T02’: { name: ‘B’, price: 599 },
  ‘T03’: { name: ‘C’, price: 699 },
  ‘T04’: { name: ‘D’, price: 799 }
}
```

輸出結果:

```js
const result = [
  {
    user: { id: ‘U01’, name: ‘Tom’ },
    orders: [
      { id: ‘T01’, name: ‘A’, price: 499 },
      { id: ‘T02’, name: ‘B’, price: 599 },
    ],
  },
  …,
]
```

### Answer

參考 [users and orders](./usersAndOrders.ts)
