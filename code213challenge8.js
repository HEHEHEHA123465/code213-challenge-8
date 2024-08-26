let arrayofnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arrayofnumbers.length; i++) {
    checkifodd(arrayofnumbers[i])
}
function checkifodd(number) {
    if(number % 2 === 0) {
        console.log(number + ' is an even number')
    }
}

let person1 = {
    age: 31 ,
    name: 'samir',
    email: 'example@gmail.com'
}
let person2 = {
    age: 24,
    name: 'fatima',
    email: 'example@gmail.com'
}
let person3 = {
    age: 61,
    name: 'abdou',
    email: 'example@gmail.com'
}
let arrayofpeople = [ person1, person2, person3]
for (let i = 0; i < arrayofpeople.length; i++) {
    checkage(arrayofpeople[i])
}
function checkage(person) {
    if (person.age > 30) {
        console.log(person.name + ' is over 30years old')
    } else {
        console.log(person.name + ' is not over 30years old')
    }
}
let stack = [ ]
let queue = []

let string = 'my name is walter hartwell white';
let newString = '';

for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (!isVowel(letter)) {
        newString += letter;
    }
}

function isVowel(letter) {
    return 'aeiou'.includes(letter.toLowerCase());
}

console.log(newString);

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [4, 5, 6, 7, 8]
function removeduplicates(arr1, arr2) {
    let combinedarray = arr1.concat(arr2)
    let nodupli = new Set(combinedarray)
    return Array.from(nodupli)
}
console.log(removeduplicates(arr1, arr2))