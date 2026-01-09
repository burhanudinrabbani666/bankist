## Selecting

```js
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSection = document.querySelectorAll(".section");

console.log(allSection);

document.getElementById("section--1");
const allButton = document.getElementsByTagName("button");
console.log(allButton);

console.log(document.getElementsByClassName("btn"));
```

## Creating

```js
// creating and inserting element
// insertAdjacemetnHTML

const messsage = document.createElement("div");
messsage.classList.add("cookie-message");
messsage.textContent = "we use cookie to improve functionality adn analytics";
messsage.innerHTML = `we use cookie to improve functionality adn analytics. <button class="btn btn--close--cookie">Got it!<buton/>`;

header.prepend(messsage);
header.append(messsage);
header.append(messsage.cloneNode(true));

header.before(messsage);
header.after(messsage);
```

## Deleting

```js
// Deleting element

document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", function () {
    messsage.remove(); // new one

    messsage.parentElement.removeChild(messsage); // old method
  });
```

[Next: Styles attributes and classes](./03-styles-attributes-and-clases.md)
