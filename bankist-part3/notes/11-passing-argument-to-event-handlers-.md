## Passing argument to event handlers

```js
const handleOver = function (event) {
  //use function
  if (event.target.classList.contains("nav__link")) {
    const link = event.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((sibling) => {
      if (sibling !== link) sibling.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

navigations.addEventListener(`mouseover`, handleOver.bind(0.5));

navigations.addEventListener("mouseout", handleOver.bind(1));
```
