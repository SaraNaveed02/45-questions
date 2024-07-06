let Guestarr:string[]=["Tooba","Maheen","Alishba"]
let cannotattend:string="Alishba"
 console.log(cannotattend + " " + "can not make it,for dinner");
let newguset:string="Maryam"
Guestarr[Guestarr.indexOf(cannotattend)]=newguset 
console.log(Guestarr)
Guestarr.map((name)=>{
    console.log(`Dear ${name}, you are cordailly  invited to a dinner `)
})