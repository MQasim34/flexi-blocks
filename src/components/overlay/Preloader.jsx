import React from 'react'
import entireLoader from '../../assets/homeImg/entireLoader.gif' 

const Preloader = () => {
  return (
    <div className='preloader'>
         <div className="loader">
            <img src={entireLoader} alt="" />
         </div>
    </div>
  )
}

export default Preloader