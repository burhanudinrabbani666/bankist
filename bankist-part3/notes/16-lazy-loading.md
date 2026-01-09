## lazy Loading

```js
// Lazy Loading Image
const imgTarget = document.querySelectorAll("img[data-src]");

const loading = function (entries, observe) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // replace src to data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observe.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loading, {
  root: null,
  threshold: 0,
});

imgTarget.forEach((img) => imgObserver.observe(img));
```
