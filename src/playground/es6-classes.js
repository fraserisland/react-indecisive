class Person {
    //this is where we define out class.
    constructor(name = "anonymous", age = 0){ //constructor function, must use this es6 format
    this.name = name // refers to class instance
    this.age = age
    }  //no comma
    getGreeting(){
        return `hello ${this.name}!`
    }
    getDescript(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{ //subclass
    constructor(name, age, major){ // dont need to set defualts again
        super(name, age) //calling parent class contructor function
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescript(){
        let description = super.getDescript()
        if(this.hasMajor()){
            description += ` Their major is in ${this.major}`
        }
        return description
    }
}

class Travellor extends Person{ //subclass
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting(){
        let greeting = super.getGreeting()
        if(this.homeLocation){
            greeting += ` Im visiting from ${this.homeLocation}`
        }
        return greeting
    }
}


const me = new Student('Fraser Solomon', 19, "comp science") 
console.log(me.getDescript())

const other = new Student('meep meep', 9) 
console.log(other.hasMajor())

const me2 = new Travellor('Fraser Solomon', 19, "gold coast")
console.log(me2.getGreeting())
