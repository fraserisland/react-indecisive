console.log('app.js is running!')

//JSX - Javascript XML
//js extension
//provided by react, a way to define templates easier


let template = <p> This is JSX from app.js </p>
//below is what let template is comiled to
// let template = React.createElement(
//     "hi",
//     {id: "someid"},
//     "something new"
// )

let appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
