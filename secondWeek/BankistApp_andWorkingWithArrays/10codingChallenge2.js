// ----------- Coding Challenge #2 --------------

const calcAverageHumanAge = function (ages) {
  // 1.
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  // 2.
  const adults = humanAges.filter((age) => age >= 18);
  console.log(adults);

  // 3.
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  return average;
};

// 4.
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
