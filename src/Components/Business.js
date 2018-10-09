import React from 'react';


const API_KEY = 'AIzaSyAEkM2V7MFuh3lGe7Rg5w6i63wasMaXf2o';


class Business extends React.Component {
  state = {
    activeBusiness: {}
  }

  componentDidMount = async () => {
    const indiividualName = this.props.location.state.business;
    const req = 
    await fetch(`http://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${indiividualName}&fields=name&key=${API_KEY}`);
    const res = await req.json();
    this.setState({activeBusiness: res})
    console.log(this.state.activeBusiness);
}

 render() {
   console.log(this.props)
   return (
     <div>Business Component</div>
   );
 }
};



export default Business;