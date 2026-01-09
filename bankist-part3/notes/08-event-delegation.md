## Event Delegation

The contains() method returns a boolean indicating whether the given string is in the list.

```js
document
  .querySelector(".nav__links")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //Matching strategy
    if (event.target.classList.contains("nav__link")) {
      const id = event.target.getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
```
