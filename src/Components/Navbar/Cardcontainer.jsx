import React from 'react'

const Cardcontainer = ({img,avatar,text}) => {
  return (
     <div className='card-container'>
          <img src={img} alt={text} />
          <div className='avatar'>
            <img src={avatar} alt={text} />
          </div>
          <div className='text'>
            <p>{text}</p>
          </div>
        </div>
  )
}

export default Cardcontainer