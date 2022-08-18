const airline = "TAP Air Portugal";
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// Fix capitalization in name
const passenger = "jOnaS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "hello@gmail.com";
const loginEmail = " Hello@Gmail.Com \n";

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97£";
priceGB.replace("£", "$");
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers com to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate")); // for replace one
console.log(announcement.replaceAll("door", "gate")); // for replace all
console.log(announcement.replace(/door/g, "gate")); // regular expression.(for replacing all)

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("kinfe") || baggage.includes("gun")) {
    console.log("You are Not allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("Ihave a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
