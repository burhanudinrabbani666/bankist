### flat and flatMap

```js
const deposit = (mov) => mov > 0;

const arr = [1, 2, 3, [4, 5, 6], 7, 8];
console.log(arr.flat()); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [ (2) […], 3, 4, (2) […], 7, 8 ]
console.log(arrDeep.flat(2)); // [ 1, 2, 3, 4, 5, 6, 7, 8 ] // add 2 level deep

const accountsMovements = accounts.map((acc) => acc.movements);
const allMovements = accountsMovements.flat();
const overall = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overall);

// Chaining
const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// FLATMAP
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
```
