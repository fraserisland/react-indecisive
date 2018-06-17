console.log('app.js is running!')

//JSX - Javascript XML
//js extension
//provided by react, a way to define templates easier

//if statements
//ternary operators
//logical and operator

const app = {
    title: "Indecisions",
    subtitle: "to help with your indecisive needs",
    options: []
}

function optionsExist(options){
    if(options.length > 2){
        return  "here are yo options" 
    } else {
        return  "no options"
    }
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if(option){
        app.options.push(option)
        e.target.elements.option.value = ''
        console.log(app.options.length)
        renderJSX()
    }
}

const removeOptions = () => {
    app.options = []
    renderJSX()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option) 
}

const appRoot = document.getElementById('app')

const numbers = [101,55,2000]

const renderJSX = () => {
    const template = (
        <div>
            <h1> {app.title} </h1> 
            {app.subtitle && <p> {app.subtitle} </p>}
            <p> {optionsExist(app.options)} </p>
            <div> 
                <button disabled={ (app.options.length > 1) ? false : true } onClick ={ onMakeDecision }> What should i do?? </button>
                <button onClick={removeOptions}> Remove all </button>
                <ol>
                    {
                    app.options.map((option) => {
                       return <li key={app.options.indexOf(option)}> {option} </li>
                    })
                    }
                </ol>
                {undefined}
            </div>
            <form onSubmit={onFormSubmit} >
                <input type="text" name="option"/>
                <button> Add Option </button>
            </form>
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}

renderJSX()

//https://reactjs.org/docs/events.html

