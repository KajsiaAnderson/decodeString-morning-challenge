// Given a string, return true or false depending on whether that string has balanced parentheses.
// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

// For example:
// >>> has_balanced_parens("()")
// // true
// >>> has_balanced_parens("(Oh Noes!)(")
// // false
// >>> has_balanced_parens("((There's a bonus open paren here.)")
// // false

function isBalanced(str){
    let left = 0
    let right = 0

    for(let i = 0; i<str.length; i++){
        if(right > left){
            return false
        }
        if(str[i] === "(") {
            left++
        }else if (str[i] === ")"){
            right++
        }
        }
        if (left === right) {
            return true
        }else{
            return false
        }
    }

    console.log(isBalanced("()"))
    console.log(isBalanced("(Oh Noes!)("))
    console.log(isBalanced("((There's a bonus open paren here."))