// Prompt the user for input and convert it to a number
const celsiusString = prompt("Enter temperature in Celsius:");
const celsius = parseFloat(celsiusString);

// Check if the conversion was successful and if the input is a number
if (isNaN(celsius)) {
  console.log("Invalid input. Please enter a valid number for temperature in Celsius.");
} else {
  // Convert Celsius to Fahrenheit
  const fahrenheit = (celsius * 9/5) + 32;

  // Display the result
  console.log(`${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`);
}
