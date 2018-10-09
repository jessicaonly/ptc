import React from 'react';


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
          <button className="business__button">View Business </button>
        </div>
       )
    }) }
     </div>
    </div>
)



export default Businesses;




{/* <div key={ business.id }>
<p>{ business.name }</p>
</div> */}

// .length < 20 ? `${ business.name }` : `${ business.name.substring(0,25)}...`}