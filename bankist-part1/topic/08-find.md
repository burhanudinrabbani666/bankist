## Find Method

The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

```js
const firstWithdrawel = movements.find((mov) => mov < 0);

console.log(movements);
console.log(firstWithdrawel);
console.log(accounts);

const account = accounts.find((acc) => acc.owner === `Jessica Davis`);

// Traditional
for (const account of accounts) {
  account.owner == `Jessica Davis` && console.log(account);
}
```
