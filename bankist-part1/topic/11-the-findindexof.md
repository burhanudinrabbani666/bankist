## findIndex

The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

See also the find() method, which returns the first element that satisfies the testing function (rather than its index).

```js
const array = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array.findIndex(isLargeNumber));
// Expected output: 3
```
