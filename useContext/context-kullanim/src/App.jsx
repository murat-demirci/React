import { useState } from 'react'
import './App.css'
import AuthContext from './context/auth-context'
import Auth from './Auth'

function App() {
  const [oldStatus, setOldStatus] = useState(false)
  const loginAuth= ()=>{
    setOldStatus(!oldStatus);
  };

  return (
    <AuthContext.Provider value={{status:oldStatus,login:loginAuth}}>
      <Auth/>
    </AuthContext.Provider>
  )
}

export default App
