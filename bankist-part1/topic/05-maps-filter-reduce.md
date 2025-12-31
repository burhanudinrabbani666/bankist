## Data Transformations: Map, Filter, Reduce

#### map

The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
const euroToUsd = 1.1;
const movementsUsd = movements.map((movement) => movement * euroToUsd);
console.log(movementsUsd);
```

```js
const moveDesc = movements.map((movement, index) => {
  const movCheck =
    movement > 0 ? `deposited ${movement}` : `withdrew ${Math.abs(movement)}`;

  return `Movement ${index + 1}: You ${movCheck}`;
});

console.log(moveDesc.join(`\n`));
```

#### Filter

The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

```js
const deposit = movements.filter((movement) => movement > 0);
const withdrawal = movements.filter((movement) => movement < 0);

console.log(deposit); // [ 200, 450, 3000, 70, 1300 ]
console.log(withdrawal); // [ -400, -650, -130 ]

// FOR OF
const depositFor = [];
for (const movement of movements) {
  movement > 0 && depositFor.push(movement);
}
console.log(depositFor); // [ 200, 450, 3000, 70, 1300 ]
```

#### Reduce

The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

> reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number

```js
const balance = movements.reduce((accumulator, movement, index, array) => {
  console.log(
    `Iteration ${index}: ${accumulator} + ${movement} = ${
      accumulator + movement
    }`
  );
  return (accumulator += movement);
}, 0);

console.log(balance);

// arrow function without console.log
const balance = movements.reduce(
  (accumulator, movement) => (accumulator += movement),
  0
);
```

```js
// Maximum value
const maximumValue = movements.reduce((acc, curr) => {
  if (acc > curr) return acc;
  else return curr;
}, movements[0]);

console.log(maximumValue);
```
