## Simple Array Methods

array is also object and have some special build in method tools

#### Slice

This method like in string methods. slice is not mutate the original array, this methode copy the original array.

good for modern programming paradigm like functional programming.

```js
let arr = [`a`, `b`, `c`, `d`, `e`];

// slice
console.log(arr.slice(1, 3)); // [`b`, `c`]
console.log(arr.slice(0, -1)); // [ "a", "b", "c", "d" ]
console.log(arr.slice(4)); // [ "e" ]
console.log(arr.slice(-3, -1)); // [`c`, `d`]

console.log(arr.slice()); // same to copy array
console.log([...arr]);
```

#### Splice

splice method workd in almost the same way as slice, but the fundamental difference is that is does actually **change the original array** or mutate array. The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

ref : [array.prototype.splice() - MDN ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```js
// Splice
arr.splice(-1);
console.log(arr, `this is original`); // [ "a", "b", "c", "d" ]

// change array value
arr.splice(1, 0, `X`); // Insert at index 1
console.log(arr); // [ "a", "X", "b", "c", "d" ]

arr.splice(2, 1, `Uhuy`); // replace element 1 at index 2
console.log(arr, `Change`); //[ "a", "X", "Uhuy", "c", "d" ]
```

#### Reverse

The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

> this is method mutate the original method

```js
// REVERSE
arr = [`a`, `b`, `c`, `d`, `e`];
const arr2 = [`i`, `j`, `k`, `l`, `m`];

console.log(arr2.reverse()); //[ "m", "l", "k", "j", "i" ]
console.log(arr2); // mutate the original array
```

#### Concat

The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```js
// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
```

#### Join

The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

```js
// JOIN
console.log(letters.join(`-`)); // a-b-c-d-e-m-l-k-j-i
```

[Next: New Method](./02-the-new-at-method.md)
