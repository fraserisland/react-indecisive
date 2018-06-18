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





class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.state = {
                options: ['hi']
        }
    }
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    render(){
        const title= 'Indecision'
        const subTitle= 'Put your decision, in the hands of a computer.'
        return(
            <div>
                 <Header title={title} subtitle={subTitle}/> 
                 <Action hasOptions={this.state.options.length > 0}/>
                 <Options options= {this.state.options}
                          handleDeleteOptions={this.handleDeleteOptions}
                 />
                 <AddOption />
            </div>
        )
    }
}

class Header extends React.Component{ //componenets must hav uppercase
    render(){ //render what jsx you want to show up
        return (
            <div>
                <h1> {this.props.title} </h1>
                <h2> {this.props.subtitle} </h2>
            </div>
        )
    }
}

class Action extends React.Component{
    handlePick(){
        alert('hands')
    }
    render(){
        return (
            <div> 
                <button onClick={this.handlePick}
                disabled={!this.props.hasOptions}> 
                wot shud i dew?/ 
                </button>
            </div>
        )
    }
}

//remove all button.

//options
class Options extends React.Component{
    render(){ //render method.
        return(
        <div>
            <button onClick={this.props.handleDeleteOptions}> Remove All </button>
            {
                this.props.options.map((opt)=>{
                   return <Option key={opt} optionText={opt}/>
                 })
            }
        </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
               {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component{
    addOption(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        if(option){
            alert(option)
        }
    }
    render(){
       return( 
         <form onSubmit= {this.addOption}>
             <input type="text" name="option"/>
             <button> add option </button>
        </form>
       )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))