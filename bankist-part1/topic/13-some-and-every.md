## some()

The some() method of Array instances returns true if it finds one element in the array that satisfies the provided testing function. Otherwise, it returns false.

```js
console.log(movements);
// check equality
console.log(movements.includes(-130));

//check conditions
const anyDeposite = movements.some((mov) => mov > 500);
console.log(anyDeposite);
```

## every()

The every() method of Array instances returns false if it finds one element in the array that does not satisfy the provided testing function. Otherwise, it returns true.

```js
console.log(movements);
// check equality
console.log(movements.includes(-130));

//check conditions
const anyDeposite = movements.some((mov) => mov > 500);
console.log(anyDeposite);

// Every

console.log(movements.every((mov) => mov > 0)); // false
console.log(account4.movements.every((mov) => mov > 0)); // true
```
