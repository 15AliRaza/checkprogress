document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  // copy the following lines paste in the text area
  /*
    underscore_case
    first_name
   Some_Variable
     calculate_AGE
   delayed_departure
  */

  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  // console.log(text);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    console.log(row, first, second);
    // console.log(first + second.replace(second[0], second[0].toUpperCase()));// final
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
