## Internationalizing Dates

```js
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric",
  year: "numeric",
};
const locale = navigator.language;

labelDate.textContent = new Intl.DateTimeFormat(
  currentAccount.locale,
  options
).format(currentDate);
```
