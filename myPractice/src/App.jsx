import { useState } from 'react'
import './App.css'
import Login from './components/Menu'
import Kayit from './components/Kayit'
import Cartcurt from './components/Cartcurt'
import Menu from './components/Menu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Menu/>
    </div>
      
     <div>
      <Kayit/>
     </div>
    <hr></hr>
     
  
      <div>
        <Cartcurt/>
      </div>
      
    </>
  )
}

export default App
