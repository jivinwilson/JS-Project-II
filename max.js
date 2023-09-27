// Sample array (you can replace this with your own array)
const numbers = [12, 45, 67, 23, 9, 56, 89];

// Initialize a variable to store the maximum value
let max = numbers[0]; // Assume the first element is the maximum initially

// Iterate through the array to find the maximum element
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]; // Update max if a larger element is found
  }
}

// Display the maximum element
console.log(`The maximum element in the array is: ${max}`);

