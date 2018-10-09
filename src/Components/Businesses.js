import React from 'react';

import { Link } from 'react-router-dom';

const Businesses = props => (
  <div className="container">
     <div className="row">
     { props.businesses.map((business)=>{
      return (
        <div key={ business.id } className="col-md-5" style={{ marginBottom: "2rem" }}>
          <div className="business__name">
              <h5>{ business.name }</h5>
              <p className="business__address">Address: <span>
                { business.vicinity }
              </span></p>
          </div>
          <button className="business__button">
            <Link to={{ 
            pathname: `/business/${business.reference}`,
            state: { business: business.place_id }
            }}>View Business</Link>
          </button>
        </div>
       )
    }) }
     </div>
    </div>
)



export default Businesses;






// .length < 20 ? `${ business.name }` : `${ business.name.substring(0,25)}...`}