// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls
// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.
// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.



function tshirtSorter(str) {
    // make three empty piles
    let sPile = []
    let mPile = []
    let lPile = []

    // go through the shirts one by one, and put them into their correct piles
    for (let i = 0; i<str.length; i++){
        if (str[i] === 'l') {
            lPile.push(str[i])
        } else if (str[i] === 'm') {
            mPile.push(str[i])
        }else if (str[i] === 's') {
            sPile.push(str[i])
        }
    }

    // put all my shirts together, small first, then medium, then large
    // and return this
    return sPile.join('') + mPile.join('') + lPile.join('')
}




console.log(tshirtSorter('lms'))
// sml

console.log(tshirtSorter('smllms'))
// ssmmll