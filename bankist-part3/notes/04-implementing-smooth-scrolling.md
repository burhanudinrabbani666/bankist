## Smooth Scrooling

Always using modern way of set scrolling

```js
const btnScroolTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScroolTo.addEventListener("click", function (event) {
  const s1coords = section1.getBoundingClientRect();

  // Old School
  // window.scrollTo({
  //   left: s1coords.left + window.screenX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: "smooth",
  // });

  // Modern ✅
  section1.scrollIntoView({ behavior: "smooth" });
});
```

[](./05-types-of-events-and-events-handlers.md)
