```js
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 225)}, ${randomInt(0, 225)}, ${randomInt(0, 225)})`;

document
  .querySelector(".nav__link")
  .addEventListener("click", function (event) {
    this.style.backgroundColor = randomColor();
    console.log("LINK", event.target, event.currentTarget);
    console.log(event.currentTarget === this);

    // Stop propagnation
    // event.stopPropagation(); // Not good ❎
  });

document
  .querySelector(".nav__links")
  .addEventListener("click", function (event) {
    this.style.backgroundColor = randomColor();
    console.log("Container", event.target, event.currentTarget);
  });
document.querySelector(".nav").addEventListener("click", function (event) {
  this.style.backgroundColor = randomColor();
  console.log("Nav", event.target, event.currentTarget);
});
```
