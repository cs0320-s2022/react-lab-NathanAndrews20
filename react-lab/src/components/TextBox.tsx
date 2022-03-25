import React from 'react'

// @ts-ignore
import 'react-awesome-button/dist/styles.css'

interface TextBoxProps {
  change: React.Dispatch<string>
  labelText: string
}

const TextBox = (props: TextBoxProps) => {

  return (
    <div className="text-box">
      <label>{props.labelText}</label>
      <input type="text" onChange={(e) => {
        props.change(e.target.value)
      }}/>
    </div>
  )
}

export default TextBox