import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import Secondpage from './Secondpage.jsx'
import Bottom from './Components/Bottom.jsx'
import Banner from './Components/Banner.jsx'
function App() {
  return (
    <div>
      <Navbar />
      <Home />  
      <div className='bg-[#1c1c1c]'>
        <Secondpage />
        <Banner/>
        <Bottom />
      </div>
    </div>
  )
}

export default App
