import React from 'react'
import './overview.css';

const overview = () => {
    return (
        <div className="over">
            
            <button className="btn"
            onClick={'#'}>
                Overview
                </button>
            <button className="btn"
            onClick={'#'}>
                Characters
                </button>
            <button className="btn"
            onClick={'#'}>
                Review
                
                </button>

          <h2 className="info">
          <h2 className="border">
              <span style={{color:"black"}}>
                  Synopsis
              </span>
                  </h2>
          
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.

        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
          </p>
          </h2>


        <h2 className="info">
          <h2 className="border">
            <span style={{color:"black"}}>
                 Movie Info
            </span>
          </h2> 
        
         <h5>Release date : January 5, 1998</h5> 
          <h5>Director  : John Doe</h5>
          <h5>Featured song  :  Pegasus fantasi</h5>
          <h5>Budget   : 200 million USD</h5>
          <h5>Release date    : January 5, 1998 </h5>
          <h5>Director  : James Cameron</h5>
          <h5>Featured song  : Soldier dream</h5>
          <h5>Budget   : 200 million USD</h5>
          </h2>
        </div> 
        
    
    )

}

export default overview
