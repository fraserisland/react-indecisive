//react components are es6 classes that extends what react gives us.

class IndecisionApp extends React.Component{
    render(){
        const title= 'Indecision'
        const subTitle= 'Put your decision, in the hands of a computer.'
        const options= ['1', 'thing 2', 'three']
        return(
            <div>
                 <Header title={title} subtitle={subTitle}/> 
                 <Action />
                 <Options options= {options}/>
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
                <button onClick={this.handlePick}> wot shud i dew?/ </button>
            </div>
        )
    }
}

//remove all button.

//options
class Options extends React.Component{
    removeAll(){
        console.log('hello')
    }
    render(){ //render method.
        return(
        <div>
            <button onClick={this.removeAll}> Remove All </button>
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
    render(){
       return( 
         <div> 
            <button> ad anutha 1. </button>
         </div>
       )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))