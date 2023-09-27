// Prompt the user for input
const inputString = prompt("Enter a string:");

// Remove spaces and convert the string to lowercase for a case-insensitive check
const cleanedString = inputString.replace(/\s/g, "").toLowerCase();

// Initialize pointers for the start and end of the string
let start = 0;
let end = cleanedString.length - 1;
let isPalindrome = true;

// Check for palindrome by comparing characters from the start and end
while (start < end) {
  if (cleanedString[start] !== cleanedString[end]) {
    isPalindrome = false;
    break;
  }
  start++;
  end--;
}

// Display the result
if (isPalindrome) {
  console.log(`"${inputString}" is a palindrome.`);
} else {
  console.log(`"${inputString}" is not a palindrome.`);
}
