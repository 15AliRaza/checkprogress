// ----------- ForEach With Maps and Sets --------------

// Maps
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "PKR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  // set don't have indexes so the values and keys are same.
  console.log(`${value}: ${value}`);
});
