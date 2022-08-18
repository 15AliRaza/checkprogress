// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Ali Raza".split(" "));

const [firstName, lastName] = "Ali Raza".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // same as above
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("ali raza");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("Ali Raza".padStart(15, "+").padEnd(23, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard("4353738539920525251006"));
console.log(maskCreditCard(435373805252510));
console.log(maskCreditCard(420525251006));
console.log(maskCreditCard(25251006));

// Repeat
const message2 = "Bad weather... All Departues Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};
planesInLine(3);
planesInLine(5);
planesInLine(12);
planesInLine(8);
