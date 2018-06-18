//react components are es6 classes that extends what react gives us.

// const obj = {
//     name: 'Vikram',
//     getName(){
//         return this.name
//     }
// }

// //functions have undefined for this.

// const getName = obj.getName.bind(obj) //bind gives us ability to set this object.
// console.log(getName())


//stateless functional componeent 
//dosnt allow state.



class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
                options: []
        }
    }
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick(){
        let options = this.state.options
        let randoOption = options[Math.floor(Math.random()*options.length)]
        console.log('yo')
        return alert(randoOption)
    }
    handleAddOption(option){
        if(!option){
            return 'enter valid value'
        } else if (this.state.options.indexOf(option) > -1){
            return 'this option already exists.'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            } 
        })
    }

    render(){
        const title= 'Indecision'
        const subTitle= 'Put your decision, in the hands of a computer.'
        return(
            <div>
                 <Header title={title} subtitle={subTitle}/> 
                 <Action 
                 hasOptions={this.state.options.length > 0}
                 handlePick = {this.handlePick}
                 />
                 <Options 
                 options= {this.state.options}
                 handleDeleteOptions={this.handleDeleteOptions}        
                 />
                 <AddOption 
                handleAddOption = {this.handleAddOption}
                 />
            </div>
        )
    }
}

const Header = (props) => {
        return (
            <div>
                <h1> {props.title} </h1>
                <h2> {props.subtitle} </h2>
            </div>
        )
}

const Action = (props) => {
    return (
        <div> 
            <button onClick={props.handlePick}
            disabled={!props.hasOptions}> 
            wot shud i dew?/ 
            </button>
        </div>
    )
}

        // class Action extends React.Component{
        //     // handlePickle(){
        //     //     handlePick()
        //     // }
        //     render(){
        //         return (
        //             <div> 
        //                 <button onClick={this.props.handlePick}
        //                 disabled={!this.props.hasOptions}> 
        //                 wot shud i dew?/ 
        //                 </button>
        //             </div>
        //         )
        //     }
        // }


//options
const Options = (props) => {
        return(
        <div>
            <button onClick={props.handleDeleteOptions}> Remove All </button>
            {
                props.options.map((opt)=>{
                   return <Option key={opt} optionText={opt}/>
                 })
            }
        </div>
        )
}

const Option = (props) => {
        return (
            <div>
               {props.optionText}
            </div>
        )
}

class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error =  this.props.handleAddOption(option)

        if(error){
            this.setState(() => {
                return { error: error}
            })
        }
    }
    render(){
       return( 
        <div>
            {this.state.error && <p> {this.state.error} </p>}
            <form onSubmit= {this.handleAddOption}>
                <input type="text" name="option"/>
                <button> add option </button>
            </form>
        </div>
       )
    }
}

//stateless functional componenet.
//similar to the class render method. 
//all you have to do to turn class to functional is to paste the jsx in func.
//rendered the same as componests eg. <User />
//they still allow props.
//no state.
//no access to 'this' 
//so you must pass props in if you want to User.
//advantage: they are faster then class based.
//if we can, we should be using. They dont come with the over head and baggage of extending the React Class.
//

        // const User  = (props) => {
        //     return (
        //         <div>
        //             <p> Name: {props.name} </p>
        //             <p> Age: {props.age} </p>
        //         </div>
        //     )
        // }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))