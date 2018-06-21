import React from 'react'
import Option from './Option.js'

  const Options = (props) => (
      <div>
        <button 
        className="button button--link"
        onClick={props.handleDeleteOptions}
        >
        Remove All
        </button>
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
    )

  export default Options