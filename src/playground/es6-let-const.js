var nameVar = "fraser"
var nameVar = "taco" // this is valid.

console.log("nameVar", nameVar)

let nameLet = "jen"
nameLet = "nacho" // you can reasign
//let nameLet = "julie" //invlaid
//CANNOT REDEFINE LET
console.log("nameLet", nameLet)


const nameConst = "frank"
//nameConst = "john" //cant reasign.
//const nameConst //cant redefine.
console.log("nameConst", nameConst)

function getPetName(){
    var petName = 'hal'
    return petName
}

getPetName()
// console.log(petName) //pet name not defined


//Block scoping 

var fullName = 'andrew nachoman'


if (fullName) {
    //var can be accesed out of if statement if defined inside/or out
    //const cannot be accessed outside. block scoped
    //let is the same. block scoped
    var fname = fullName.split(" ")[0]
    console.log(fname)
}

console.log(fname)

//try use const, then use let when the value needs to change. Never use var. again.