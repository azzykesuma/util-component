import React, {useState} from 'react'

export const AnotherTestComponent = () => {
    const [content, setContent] = useState("wedefe") // [state, setState
  return (
    <div>
      <h6>{content}</h6>
    </div>
  )
}

