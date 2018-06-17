const square = function(x) {
    return x * x
}
//functions can have names es5 way. 
//eg.
function squareName(){}
//they can have a name
console.log(square(5)) //25




const squareArrow = (x) => {
   return x * x //single expression return value
}
//arrow funcs are always anonymous 
//have to asign to a variable if you want to store value.
console.log(squareArrow(7)) //49



const sqaureArrowTwo = (x) => x * x  //same as squareArrow
console.log(sqaureArrowTwo(7)) //49

const fullName = 'donkey joejoe'

//shorthand, value is always returned
const getFirstName = (x) => x.split(" ")[0] 

console.log(getFirstName('donkey joejoe'))

//longhand
const getLastName = (x) => {
   return x.split(" ")[1]
}

console.log(getLastName('donkey joejoe'))