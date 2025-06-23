import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <h1>Vite + React</h1>
      <HomePage />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count: {count}
        </button>
      </div>
    </div>
  )
}

export default App