import React from 'react';


const API_KEY = 'AIzaSyAEkM2V7MFuh3lGe7Rg5w6i63wasMaXf2o';


class Business extends React.Component {
  state = {
    activeBusiness: {},
    picture: ''
  }

  componentDidMount = async () => {
    const individualName = this.props.location.state.business;
    const req = 
    await fetch(`http://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${individualName}&key=${API_KEY}`);
    const res = await req.json();
    this.setState({activeBusiness: res.result})
    console.log(this.state.activeBusiness);

    const tempPhoto = 'https://www.jainsusa.com/images/store/landscape/not-available.jpg';
    const photo = '';
    if (this.state.activeBusiness.photos.length > 0) {
      const actualPhoto = await fetch(`http://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.state.activeBusiness.photos[0].photo_reference}&key=${API_KEY}`);
      photo = await actualPhoto;
      let picture = Object.assign({}, this.state.picture);
      picture = photo;
      return this.setState({picture});
    }
  
    else {
      photo = tempPhoto;
    }
    console.log(this.state.picture)
  


    // this.state.businesses.map = async (business) => {
    // const photo_call = await fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${business.photos[0].photo_reference}&key=${API_KEY}`);
    // photos = await photo_call;
    //   return photos;
    // }
    // console.log(photos);
    // console.log(this.state.businesses);
  }
  
    

 
 render() {
   const business = this.state.activeBusiness;
   return (
     <div className="container">
      <div className="active-business">
      <img className="active-business__img" src = {this.state.picture} alt={business.place_id}/>
      </div>
     </div>
   );
 }
};



export default Business;