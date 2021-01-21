const arr = [...Array(10).keys()];
console.log(arr);

// `[...Array(10).keys()]`

// Explanation:
// 1 `Array(10)` creates an array, but with no values
// 2 Spread operator used on it gives `undefined` values
// 3 `Array.keys()` return keys, but as an iterator. Spread that to get values starting with 0 which put in bracket gives a proper array.