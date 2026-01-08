## Date

```js
// CREATING DATE

// with new date
const now = new Date();
console.log(now);

// parse not save
console.log(new Date(`Nov 14 2025`));
console.log(new Date(`December 25, 2025`));
console.log(new Date(account1.movementsDates[0]));

// more spesific
console.log(new Date(2037, 10, 19, 15, 23, 5)); // month is zero base
console.log(new Date(2037, 10, 31, 15, 23, 5)); // auto correct to december

console.log(new Date(0)); // unix date
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// working with date
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); //10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2037-11-19T08:23:00.000Z
console.log(future.getTime()); //
console.log(new Date(2142231780000));

console.log(Date.now());
const nowDate = Date.now();
console.log(new Date(nowDate));

future.setFullYear(2040);
console.log(future);
```
