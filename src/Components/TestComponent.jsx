import React, {useState} from "react"
export const TestComponent = (props) =>  { 
  const [text, setText] = useState("wedefe")
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}
