console.log('app.js is running!')

//JSX - Javascript XML
//js extension
//provided by react, a way to define templates easier

let template = <h1> This is JSX from app.js, now did it change </h1> <p> this is some text </p>

let appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)