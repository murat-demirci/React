import { useState } from 'react'
import './App.css'
import TitleOne from './TitleOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TitleOne/>
    </div>
  )
}

export default App
