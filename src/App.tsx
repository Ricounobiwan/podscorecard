import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface AppProps {
  name: string
}

// type props = ...
// function App<props>({name}:{name:string})
function App(props: AppProps) {
  const [count, setCount] = useState(0)

  console.log('User: ', user)

  return (
    <div className="App">
      <div>
        <h1>POD SCORECARD</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">Click</p>
      </div>
    </div>
  )
}

export default App
