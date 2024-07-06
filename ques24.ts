//More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array

const fruit:string="Apple";
const fruit2:string="orange";
console.log(fruit === fruit2);
console.log(fruit2 !== fruit)
//• Tests using the lower case function
const lowcase:string="HELLO WORLD"
console.log(lowcase.toLowerCase() === "hello world")

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1:number = 10
let num2:number = 8
console.log(num1 === num2)
console.log(num1 !== num2)
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 >= num2)
console.log(num1 <= num2)

//• Tests using "and" and "or" operators
let string1:boolean=true;
let string2:boolean=false;
console.log(string1 && string2)
console.log(string1 || string2)

//• Test whether an item is in a array
//• Test whether an item is not in a array
let fruit1:string[]=["apple","mango","grapes"]
console.log(fruit1.includes("apple"))
console.log(fruit1.includes("orange"))