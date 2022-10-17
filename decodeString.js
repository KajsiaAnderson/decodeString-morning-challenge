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


// Jared's Solution:
const letterList = ['a','b','c','d','e','f','g','h','i',
    'j','k','l','m','n','o','p','q','r',
    's','t','u','v','w','x','y','z',]

function decode(str) {
    //take the first character (the number) from the string, turn it into a number and save it
    let num = +str[0]

    //create a blank answer string
    let answer = ''

    //make it so they can send in uppercase letters, too (output will still be lowercase, though)
    str = str.toLowerCase()

    //then, loop through each letter in the string 
    for (let i = 1; i < str.length; i++) {
        //and find its index in my letter array
        let origIndex = letterList.indexOf(str[i])

        //take the index, add it to the number we popped off the string, and then
        //get the letter in my letter array at that new index
        let newIndex = origIndex + num

        //this is extra code that handles if the newIndex is out of the bounds of the array
        //if it is, it makes newIndex be the index of the letter 
        if ((newIndex + 1) > 26) {
            newIndex = (newIndex + 1) % 26 - 1
        }

        //append this new letter onto my answer string
        answer += letterList[newIndex]
    }

    //return answer
    return answer
}

console.log(decode("1a"))
console.log(decode("3ce"))
console.log(decode("28fcjjz"))