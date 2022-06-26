function isPalindrome(word) {
  word.toLowerCase();
  let drow = word.split("").reverse().join("");
  return word === drow;
}

/* 
  Add your pseudocode here

  change the word to lowercases
  reverse the words and check if it's a palindrome
*/

/*
  Add written explanation of your solution here
  the code reverses the string word, rejoins and checks if same as the first word.
*/

console.log("=>"), isPalindrome("dad")
console.log("=>"), isPalindrome("bro")
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
