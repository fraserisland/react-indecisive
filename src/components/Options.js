import React from 'react'
import Option from './Option.js'

  const Options = (props) => (
    <div>

      <div className="remove-options">
          <button 
          className="button button--link options--remove-all"
          onClick={props.handleDeleteOptions}
          >
          Remove All
          </button>
      </div>

      <div className="all-options">
       {props.options.length === 0 && <p> Please Add an Option :) </p>}
        {
          props.options.map((option, index) => (
            <Option
              key={option}
              optionText={option}
              count= {index + 1}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </div>

      </div>
    )

  export default Options