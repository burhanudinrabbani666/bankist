## bigint

```js
// bigInt

console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 999999); // 9007199254740991

console.log(900719925474099182751817291284619846129n);
//900719925474099182751817291284619846129n using n / bigInt
console.log(BigInt(900719925474099182751817291284619846129));

// operations
console.log(1000n + 1000n);

const huge = 2814612864126562184n;
const num = 2814612884n;

console.log(BigInt(huge * num));

// Exceptions
console.log(20n > 15);
console.log(20n > 10);
console.log(typeof 20n);
console.log(2n == `20`);

// Divisions
console.log(11n / 3n);
console.log(10 / 3);
```

[Next: Date](./06-date.md)
