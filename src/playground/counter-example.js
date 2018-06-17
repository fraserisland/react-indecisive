

const user = {
    name: "fraser",
    age: 19,
    location: "gold coast"
}

function getLocation(location){
    if(location){
        return <p> location: {location} </p>
    }
}

const template2 = (
    <div> 
        <h1> { user.name ? user.name.toUpperCase() : "Not defined" } </h1>
        { (user.age && user.age >= 17) && <p> {user.age} </p> }
        { getLocation(user.location) }
    </div>
)
//{} jsx expression, if they resolve to undefined nothing shows up.
//undefined null and boolean are ignored by JSX

let count = 0

const addOne = () => {
    count++
    renderCounterApp()
}

const minusOne = () => {
    count--
    renderCounterApp()
}

const reset = () => {
    count = 0
    renderCounterApp()
}

// classes in JSX are identified by className



const renderCounterApp = () => {
    const template3 = (
        <div> 
            <h1> Count: {count} </h1>
            <button onClick={addOne}> +1 </button>
            <button onClick={minusOne}> -1 </button>
            <button onClick={reset}> reset </button>
        </div>
    )

}

renderCounterApp()