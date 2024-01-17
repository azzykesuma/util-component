import { useState } from "react"

export const TestComponent = () =>  {
  const [testState, setTestState] = useState('tecwebfewst')
  return (
    <div>{testState}</div>
  )
}
