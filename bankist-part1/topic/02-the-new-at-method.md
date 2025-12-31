#### at method

The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

```js
const arr = [23, 1234, 666];
console.log(arr[0]); // traditional
console.log(arr.at(0)); // more symantix and modern

// last value
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1)); // 666
console.log(arr.at(-2)); // 1234

console.log(`Bani`.at(0)); // B
console.log(`Bani`.at(-1)); // i
```
