import React from 'react';

const API_KEY = 'AIzaSyAEkM2V7MFuh3lGe7Rg5w6i63wasMaXf2o';

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