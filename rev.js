// Prompt the user for input
const inputString = prompt("Enter a string:");

// Reverse the string
let reversedString = "";
for (let i = inputString.length - 1; i >= 0; i--) {
  reversedString += inputString[i];
}

// Display the reversed string
console.log(`Reversed string: ${reversedString}`);
