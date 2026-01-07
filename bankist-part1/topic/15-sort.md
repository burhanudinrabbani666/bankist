## sort()

Baseline Widely available

The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

To sort the elements in an array without mutating the original array, use toSorted().

```js
const owner = [`Jonas`, `Zach`, `Adam`, `Martha`];
console.log(owner.sort());
console.log(owner);

console.log(movements);

// return < 0 : A, B
// return > 0 : B, A
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(movements);
```

compareFn Optional

    A function that determines the order of the elements. The function is called with the following arguments:

    a

        The first element for comparison. Will never be undefined.
    b

        The second element for comparison. Will never be undefined.

    It should return a number where:

        - A negative value indicates that a should come before b.
        - A positive value indicates that a should come after b.
        - Zero or NaN indicates that a and b are considered equal.

    To memorize this, remember that (a, b) => a - b sorts numbers in ascending order.

    If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

Return value

The reference to the original array, now sorted. Note that the array is sorted in place, and no copy is made.
Description

If compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.

The sort() method preserves empty slots. If the source array is sparse, the empty slots are moved to the end of the array, and always come after all the undefined.

[Next: Array grouping](./16-array-grouping.md)
