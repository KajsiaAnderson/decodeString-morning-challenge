// In this challenge, you’ll write a decoder.
// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm
// The number in the string represents how many characters each letter should shift. For example:

//  "1a" // "b"
//  "3ce" // "fh"
//  "2fcjjm" // "hello"


function decodeString(code) {
    // Capture the number to decode the string
    let decipher = Number(code[0])
    // Create a solution string to add letters to one-by-one
    let solution = ""
    // Start iterating through the string, starting at index 1 to avoid the decipher
    for (let i = 1; i < code.length; i++) {
      // Capture the ascii code for the given letter, plus the value of the decipher
      let strValue = code[i].charCodeAt() + decipher
      // Add the letter the belongs to the updated ascii value to the solution string
      solution += String.fromCharCode(strValue)
    }
    // return the solution string
    return solution
  }

console.log(decodeString("1a")) 
console.log(decodeString("3ce")) 
console.log(decodeString("2fcjjm"))
