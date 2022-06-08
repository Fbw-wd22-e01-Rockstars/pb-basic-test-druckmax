// Add answers here 

console.log(`
Algorithms Exercise 1
`);
function nameOfCity(str) {
    strLower = str.toLowerCase();
    if(strLower.startsWith('los') || strLower.startsWith('new')) {
        return str;
    } else {
        return 'The city name does not begin with Los or New.'
    }

} 

console.log(nameOfCity('New York'));
console.log(nameOfCity('los Santos'));
console.log(nameOfCity('London'));

// --------------------------------

console.log(`
Algorithms Exercise 2
`);
const isDivisible = num => num%100 === 0 ? true : false;

console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));

// --------------------------------

console.log(`
Algorithms Exercise 4
`);
const isRaining = x => x === true ? 'wet day - you need an umbrella' : 'dry day - leave your umbrella at home.';

console.log(isRaining(true));

// --------------------------------

console.log(`
Loops Exercise 1
`);
function geometricalSequence() {
    str = '';
    for(let i = 1; i <= 256; i=i*2) {
        console.log(i);
        str += `${i} `;
    }
    return str
}

console.log(geometricalSequence());

// --------------------------------

console.log(`
Loops Exercise 2
`);
function multiplesOfThree() {
    str = '';
    for(let i = 1; i <= 5; i++) {
        str += `${i*3} `;
    }
    return str;
}
console.log(multiplesOfThree());

// --------------------------------

console.log(`
Math Exercise 1
`);
const powerOf = num => Math.pow(num, num);

console.log(powerOf(3));
console.log(powerOf(4));

// --------------------------------
console.log(`
Problem Solving Exercise 1
`);
function vowelCount(str) {
    let count = 0;
    str.split('').forEach(char => char.match(/[aeiou]/gi) ? count++ : char);
    return count;
}

console.log(vowelCount('hello'));
console.log(vowelCount("test")); 
console.log(vowelCount("fbw")); 

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

