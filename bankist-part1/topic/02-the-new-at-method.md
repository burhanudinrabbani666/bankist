#### at method

The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

```js
const arr = [1, 2, 3, 4, 5];

// 1. At Method
console.log(arr[0]); // 1
console.log(arr.at(0)); // 1

// get last value of index
console.log(arr[arr.length - 1]); // 5
console.log(arr.slice(-1)); // 5
console.log(arr.at(-1)); // 5

// use at string
console.log("burhanudin rabbani".at(-1)); // i
```

[Next: Looping arrays foreach](./03-looping-arrays-foreach.md)
