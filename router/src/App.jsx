import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>

        {/* http://localhost:5173/aboutUs */}
        <Route path='/aboutUs' element={<AboutUs/>}/>
      </Routes>
    </div>
  )
}

export default App
