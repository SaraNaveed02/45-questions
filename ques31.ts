// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames=["asad","mubashar","abdullah"]
if(usernames.length===0){
    console.log("we need some users")
}
for(let i=0 ;i<usernames.length;i++){
    console.log(usernames[i])
}
let username:string[]=[]
if(username.length===0){
    console.log("we need some users")
}
for(let i=0 ;i<username.length;i++){
    console.log(username[i])
}
