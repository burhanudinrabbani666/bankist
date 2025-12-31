## forEach With Maps and Sets

new Set done have any key

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

[Next: Maps, Filter, and Reduce](./05-maps-filter-reduce.md)
