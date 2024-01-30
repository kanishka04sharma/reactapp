import React from 'react';
import './Navbar.css';
// import datas from '../../utils/Data.js';

const Navbar = ({datas}) => {
  return (
    <div className='container'>
      {datas.map((data) => (
        <div className='card-container' key={data.id}>
          <img src={data.img} alt={data.text} />
          <div className='avatar'>
            <img src={data.avatar} alt={data.text} />
          </div>
          <div className='text'>
            <p>{data.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
