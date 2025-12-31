## findLast() and findLastIndex()

The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

If you need to find:

- the first element that matches, use find().
- the index of the last matching element in the array, use findLastIndex().
- the index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
- whether a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
- if any element satisfies the provided testing function, use some().

```js
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300];
const lastWithdrawal = movements.findLast((mov) => mov < 0);
console.log(lastWithdrawal); // -130

const latestLargeMovementIndex = movements.findLastIndex((mov) =>
  Math.abs(mov > 2000)
);

console.log(
  ` Your latest alarge movemenet was ${
    movements.length - latestLargeMovementIndex - 1
  } movements ago`
);
```
