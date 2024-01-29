import React from 'react'
import "./Navbar.css"
import datas from "../../utils/data.js"
const Navbar = ({data}) => {
  return (
  <div className='container'>
   {
    data.map((data)=>(
         <div className='card-container'>
      <img src={data.img} ></img>
      <div className='avatar'>
        <img src={data.avatar}></img>
      </div>
      <div className='text'>
        <p> {data.text}</p>
      </div>
    </div>
    ))
   }
  </div>
  
  );
}

export default Navbar