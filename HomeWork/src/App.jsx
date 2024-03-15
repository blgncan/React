import { useState } from 'react'
import './assets/Scss/style.scss'

import LeftBar from './components/leftbar/LeftBar'
import TopPanel from './components/header/TopPanel'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      
        <TopPanel />
             
      <div className='container2'>
        <div className='LeftBar'>
          <LeftBar />

          <Content />


        </div>
      </div>
      <Footer />
    </>
  )
}

export default App