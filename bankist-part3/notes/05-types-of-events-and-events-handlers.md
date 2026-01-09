## Type of events

```js
const h1 = document.querySelector("h1");

const alert1 = function () {
  alert("addEventListener: Great! Your reading the heading");
};

h1.addEventListener("mouseenter", alert1);

setTimeout(() => h1.removeEventListener("mouseenter", alert1), 3000);
```
