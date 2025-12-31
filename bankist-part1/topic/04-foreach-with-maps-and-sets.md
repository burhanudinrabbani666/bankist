## forEach With Maps and Sets

```js
// Maps
currencies.forEach((value, key, maps) => {
  console.log(`${key}: ${value}`);
});

// Sets
const currenciesUnique = new Set([`USD`, `GBP`, `Rp`, `USD`, `EUR`, `EUR`]);
console.log(currenciesUnique);

currenciesUnique.forEach((value, key, sets) => {
  console.log(`${key}: ${value}`);
}); // Sets done have any keys
```
