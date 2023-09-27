// Prompt the user for input and convert it to a number
const numString = prompt("Enter a non-negative integer:");
const num = parseInt(numString);

// Check if the conversion was successful and if the input is a non-negative integer
if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
  console.log("Invalid input. Please enter a valid non-negative integer.");
} else {
  // Calculate the factorial of the number
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  // Display the result
  console.log(`The factorial of ${num} is: ${factorial}`);
}
