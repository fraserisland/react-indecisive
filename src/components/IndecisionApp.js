import React from 'react'
import AddOption from './AddOption.js'
import Options from './Options.js'
import Header from './Header.js'
import Action from './Action.js'
import OptionModal from './OptionModal.js'

class IndecisionApp extends React.Component {
    state = {
      options: [],
      selectedOption: undefined
    }
    handleDeleteOptions = () => {
      this.setState(() => ({ options: [] }));
    }
    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
    }
    handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      this.setState(() => ({
        selectedOption: option
      }))
    }
    handleAddOption = (option) => {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
    }
    closeModal = () => {
      this.setState({ selectedOption: undefined })
    }
    //lifecycle methods. only avail in class components. func ones can only render.
    componentDidMount(){
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options) {
             this.setState(() => ({options: options}))
            }
        } catch(e) {
            console.log(e)
        }
    }
    componentDidUpdate(prevProp, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('componentDidUpdate')
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
   
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
          <OptionModal 
            closeModal={this.closeModal}
            selectedOption={this.state.selectedOption}
          />
        </div>
      );
    }
  }
  
  IndecisionApp.defaultProps = {
    // options: []
  };

  export default IndecisionApp