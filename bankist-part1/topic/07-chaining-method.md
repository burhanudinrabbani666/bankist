## Chaining Method

you can chaining method for not making ani variable on every method.

```js
const totalDepositeInUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * 1.1)
  .reduce((acc, mov) => (acc += mov), 0);

console.log(totalDepositeInUSD);
```

but the minus of this wat sometime is hard to debug if have some error. you can debug with checking result of one method to next method using array parameter. every array method in this section topic have it.

- dont chaining to much method, its make performance becoming slow.

```js
const totalDepositeInUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, index, array) => {
    console.log(array); // <--- Checking result from before
    return mov * 1.1;
  })
  .reduce((acc, mov) => (acc += mov), 0);
```

[Next: Find method](./08-find.md)
