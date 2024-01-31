import React from 'react';
import './Navbar.css';
import Cardcontainer from './Cardcontainer';
// import datas from '../../utils/Data.js';

const Navbar = ({datas}) => {
  return (
    <div className='container'>
      {datas.map((data) => (
       <Cardcontainer img={data.img}
       avatar={data.avatar} 
       text={data.text}
      
       />
      ))}
    </div>
  );
};

export default Navbar;
