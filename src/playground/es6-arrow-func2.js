//arguements object - no longer bound with arrow func.

const add = function(a,b){
    console.log(arguments) //returns all arguements in object
   return a + b
}
console.log(add(56, 1)) //57

const add2 = (a, b) => {
     return a + b
    // console.log(arguments) //error, arrow functions do not have args.
}
console.log(add2(2,3)) // 5



//this keyword - no longer bound.

const user = {
    name: "fraser",
    cities: [ 'gold coast', 'brisbane', 'bali' ],
    printPlacesLived: function () {
        const that = this 
        
        console.log(this.name) // this is bound to this object its inside. 
        console.log(this.cities)

        this.cities.forEach(function(city) {
            // console.log(this.name + 'has lived in' + city)
           // error, the this is not bound to anything since it is an anonymous function.
            console.log(that.name + 'has lived in es5 func' + city)
            //by setting 'that' to this in the container func, the object this is now accessible.
       
            //with arrow functions, the 'that' workaround is not neccessary.
        })

        this.cities.forEach((city) => {
            console.log(this.name + 'has lived in arrow func' + city)
            //by using arrow the this is automatically inhertied from the parent..
            //if the container of this anon func was an arrow function, it wouldnt work, as the this would be pointing
            //to the global object.
        })
    },
    printPlacesLived2(a , b){
        //this is valid in es6 to define methods on objects.
        //forEach just allow you to do something with each item then print to the screen.
        //map allows you to transform each item and get a new array back.
       const cityMessages = this.cities.map((city) => {
            return this.name + 'has liv in da ' + city 
            //new array has been created. we have transformed each item
            //this.cities is left as it originally was at the start.
        }) 
        return cityMessages
    }
}

user.printPlacesLived() 
console.log(user.printPlacesLived2())


const multiplyer = {
    numbers: [1,2,3,4],
    multiplyBy: 5,
    multiply(){
        const multiplied = this.numbers.map((num) => {
           return num * this.multiplyBy // returns brand new array. 
           //this.multiply looks ar parents since arrow func.
        })
        return multiplied // brand new array.
    }
}

console.log(multiplyer.multiply())
