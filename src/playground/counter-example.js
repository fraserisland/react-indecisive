

// const user = {
//     name: "fraser",
//     age: 19,
//     location: "gold coast"
// }

// function getLocation(location){
//     if(location){
//         return <p> location: {location} </p>
//     }
// }

// const template2 = (
//     <div> 
//         <h1> { user.name ? user.name.toUpperCase() : "Not defined" } </h1>
//         { (user.age && user.age >= 17) && <p> {user.age} </p> }
//         { getLocation(user.location) }
//     </div>
// )
// //{} jsx expression, if they resolve to undefined nothing shows up.
// //undefined null and boolean are ignored by JSX

// let count = 0

// const addOne = () => {
//     count++
//     renderCounterApp()
// }

// const minusOne = () => {
//     count--
//     renderCounterApp()
// }

// const reset = () => {
//     count = 0
//     renderCounterApp()
// }

// // classes in JSX are identified by className



// const renderCounterApp = () => {
//     const template3 = (
//         <div> 
//             <h1> Count: {count} </h1>
//             <button onClick={addOne}> +1 </button>
//             <button onClick={minusOne}> -1 </button>
//             <button onClick={reset}> reset </button>
//         </div>
//     )

// }

// renderCounterApp()


//component state
//constuctor sets up default state.
class Counter extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0,
            name: 'fraser'
        }
    }
    handleAddOne(){
        //this.state.count += 1 //it changes the count, but dosnt re-render onto the screen..
        //that is why we use method setState
        this.setState((prevState) => { //prevState is object BEFORE changes are applied
            return {
                count: prevState.count + 1 //only changing count value.
            }
        })
        console.log(this.state.count)
    }
    handleMinusOne(){
        this.setState((prevState) => { //we woant to change it, so use this.setState.
            return{
                count: prevState.count -1 //get current count, subtract 1.
             }
            console.log("handle minus one")
        })
    }
    handleReset(){
        // console.log("handle reset")
        // this.setState(() => {
        //     return {
        //         count: 0
        //     }
        // })
        // this.setState({
        //     count: 0
        // })
        // this.setState({ //this way is asynchronous. 
        //     count: this.state.count +1  //this wont allow above func to reset, will always return +1
        // }) //this is accessing previous, old data. this is why we should use prevState
        
        this.setState(() => {   
            return {
                count: 0
            }
        }) 
        this.setState((prevState) => { 
            return {
                count: prevState.count +1  
            }
        })  //when react see's  a function in setState it allows react to see both and put them together,
            //always pass a function into this.setState
    }

    render(){
        return(
            <div> 
                <h1> Counter. </h1>
                <h1> {this.state.count}  </h1>
                <p> {this.state.name} </p>
                <button onClick={this.handleAddOne}> +1 </button>
                <button onClick={this.handleMinusOne}> -1 </button>
                <button onClick={this.handleReset}> reset </button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))