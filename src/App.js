import React from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Datas from "./utils/Data.js"
const App = () => {
  return (
    <>
      <Navbar data={Datas.slice(0,3)}></Navbar>
      <Navbar data={Datas.slice(3,5)}></Navbar>

    </>
  )
}

export default App