import React from 'react';


const API_KEY = 'AIzaSyAEkM2V7MFuh3lGe7Rg5w6i63wasMaXf2o';


class Business extends React.Component {
  state = {
    activeBusiness: {},
    picture: ''
  }

  componentDidMount = async () => {
    const indiividualName = this.props.location.state.business;
    const req = 
    await fetch(`http://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${indiividualName}&key=${API_KEY}`);
    const res = await req.json();
    this.setState({activeBusiness: res.result})
    console.log(this.state.activeBusiness);

    const tempPhoto = 'https://www.jainsusa.com/images/store/landscape/not-available.jpg';
    if (this.state.activeBusiness.photos.length > 0) {
      const actualPhoto = await fetch(`http://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.state.activeBusiness.photos[0].photo_reference}&key=${API_KEY}`);
      const photo = await actualPhoto.getUrl();
      this.setState({picture: photo});
    }
    else {
    this.setState({picture: tempPhoto});
    }
    console.log(this.state.picture)
  
}
  
    

 
 render() {
   const business = this.state.activeBusiness;
   return (
     <div className="container">
      <div className="active-business">
      <div className="active-business__img" src={this.state.picture} alt={business.place_id}/>
      </div>
     </div>
   );
 }
};



export default Business;