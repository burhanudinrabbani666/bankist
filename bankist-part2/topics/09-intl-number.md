## Internationalize number

```js
const num = 12345678.12;
const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
};

console.log("US:     ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany:", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria:  ", new Intl.NumberFormat("ar-SY", options).format(num));
console.log(
  navigator.language,
  ": ",
  new Intl.NumberFormat(navigator.language, options).format(num)
);
```

```js
const formatCur = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};
```
