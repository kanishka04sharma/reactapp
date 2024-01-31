import React from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx"
import datas from "./utils/Data.js"

const App = () => {
  return (
    <>
      <Navbar datas={datas.slice(0,3)}></Navbar>
      <Navbar datas={datas.slice(3,7)}></Navbar>
    </>
  )
}

export default App