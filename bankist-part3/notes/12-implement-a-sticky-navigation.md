## Implement Sticky notes

```js
// Sticky Navigation
const initialCordinate = section1.getBoundingClientRect();
console.log(initialCordinate);

window.addEventListener("scroll", function (event) {
  if (this.window.scrollY > initialCordinate.top)
    navigations.classList.add("sticky");
  else navigations.classList.remove("sticky");
});
```
