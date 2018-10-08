import React from 'react';


const Businesses = props => (
  <div className = "container">
     { props.businesses.map((business)=>{
          return (
            <div key={ business.id }>
            <p>{ business.name }</p>
            </div>
          )
        }) }
    </div>
)



export default Businesses;