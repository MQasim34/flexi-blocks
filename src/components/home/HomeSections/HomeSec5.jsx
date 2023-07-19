import React from 'react'
import { section5 } from '../../../siteContent/home/HomeCon'

const HomeSec5 = () => {
  return (
    <div className="HomeSec5">
      <div className="main">
        <div className="inner">
          {section5.map( (sec5) => (
          <div key={sec5.id} className="content">
            <div className="left">
              <img src={sec5.icon} alt="" />
            </div>
            <div className="right">
              <h1>{sec5.title}</h1>
              <p>{sec5.details}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeSec5