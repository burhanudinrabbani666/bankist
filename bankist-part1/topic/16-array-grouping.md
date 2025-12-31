## grouping array

The Object.groupBy() static method groups the elements of a given iterable according to the string values returned by a provided callback function. The returned object has separate properties for each group, containing arrays with the elements in the group.

This method should be used when group names can be represented by strings. If you need to group elements using a key that is some arbitrary value, use Map.groupBy() instead.

```js
// grouping
console.log(movements);

const groupedMovements = Object.groupBy(movements, (mov) =>
  mov > 0 ? `deposit` : `withdrawals`
);

console.log(groupedMovements);
// deposit : [200, 450, 3000, 70, 1300]
// withdrawals : [-400, -650, -130]

const groupByActivity = Object.groupBy(accounts, (acc) => {
  const movementCount = acc.movements.length;

  if (movementCount >= 8) return `Very Active`;
  if (movementCount >= 4) return `Active`;
  if (movementCount >= 1) return `Moderate`;

  return "Inactive";
});

// group by properti Object
const groupByType = Object.groupBy(accounts, (account) => account.type);
console.log(groupByType);
```
