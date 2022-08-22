// ----------- Simple Array Methods --------------

let arr = ["a", "b", "c", "d", "e"];

// Slice => never mutate original
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// slice method and spread operator to make a shallow copy
console.log(arr.slice());
console.log([...arr]);

// Splice => mutate original
console.log(arr.splice(2));
console.log(arr);
arr = ["a", "b", "c", "d", "e"];
arr.splice(-1);
console.log(arr);
arr = ["a", "b", "c", "d", "e"];
arr.splice(1, 2);
console.log(arr);

// Reverse => mutate original
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(" - "));
