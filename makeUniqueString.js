// Write a function to remove all duplciate letters from a provided string. The string will only contain lowercase letters between a - z. The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// // helowrd

// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu



function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(el, index, self) {
        return self.indexOf(el) === index;
      })
      .join('');
  }
  console.log(removeDuplicateCharacters('iwanttoclimbamountain'));


//   Jared's solution:
function makeUnique(str) {
    let answer = ''

    for (let i = 0; i < str.length; i++){
        if (!answer.includes(str[i])) {
            answer += str[i]
        }
    }
    return answer
}
console.log(makeUnique('iwanttoclimbamountain'));




