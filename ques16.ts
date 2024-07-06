//You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. 
//Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
let Guestarra:string[]=["Tooba","Maheen","Alishba"];
let cannotcome:string="Alishba";
let newattendence:string="Maryam";
Guestarra[Guestarra.indexOf(cannotcome)]=newattendence;
// console.log(Guestarra);
let middleguest :string="areeba"
let middleindex = Guestarra.length/2
Guestarra.splice(middleindex,0,middleguest)
//  console.log(Guestarra)
 Guestarra.push("bisma")
console.log(Guestarra)
// Guestarra.map((name)=>{
//     console.log(`Dear ${name}, you are cordailly  invited to a dinner `)
//  })