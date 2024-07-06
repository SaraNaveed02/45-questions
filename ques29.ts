// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
// if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits:string[]=["mango","banana","chiko"]
if (favorite_fruits.includes("banana")){
    console.log("you really like banana")
}
if (favorite_fruits.includes("mango")){
    console.log("you really like mango")
}
if (favorite_fruits.includes("chiko")){
    console.log("you really like chiko")
}
if (favorite_fruits.includes("oranges")){
    console.log("oranges are not in your favorite fruits list.")
}
if (favorite_fruits.includes("grapes")){
    console.log("grapes are not in your favorite fruits list.")
}