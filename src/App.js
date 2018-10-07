/* global google */

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import Form from './Components/Form';
import Businesses from './Components/Businesses'

const API_KEY = 'AIzaSyAEkM2V7MFuh3lGe7Rg5w6i63wasMaXf2o';
const geocoder = new google.maps.Geocoder();
var user_position = {};

class App extends Component {
  state = {
    businesses: [],
  }



  getBusiness = async (e) => {
    const businessName = e.target.elements.businessName.value;
    e.preventDefault();
    const api_call = await fetch(`http://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${user_position.lat},${user_position.lng}&radius=1500&keyword=${businessName}&key=${API_KEY}`);
    const data = await api_call.json();
    console.log(data)
    if (data.results.photos !== null){
    this.setState({ businesses: data.results });
    }
    else {
      console.log('There was an error!');
    }

    console.log(user_position.lat , user_position.lng)
 
    // getLocation = async (e) => {
    //   const lat = '';
    //   const lng = '';
    //   const address = e.target.elements.userLocation.value;
    //   await geocoder.geocode( { 'address': address}, function(results, status) {
    //     if (status == google.maps.GeocoderStatus.OK) {
    //        lat = results[0].geometry.location.lat();
    //        lng = results[0].geometry.location.lng();
    //       }
    //      else {
    //       alert("Geocode was not successful for the following reason: " + status);
    //     }
    //   });
    //   alert('Latitude: ' + lat + ' Logitude: ' + lng);
    // }
    




    

    // this.state.businesses.map = async (business) => {
    // const photo_call = await fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${business.photos[0].photo_reference}&key=${API_KEY}`);
    // photos = await photo_call;
    //   return photos;
    // }
    // console.log(photos);
    // console.log(this.state.businesses);
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Form getBusiness={this.getBusiness} />
        <Businesses businesses={this.state.businesses}/>
        </div>
      </BrowserRouter>
    );
  }
}


function getLocation(callback) {
  if (navigator.geolocation) {
      var lat_lng = navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);
        user_position.lat = position.coords.latitude; 
        user_position.lng = position.coords.longitude; 
        callback(user_position);
      });
  } else {
      alert("Geolocation is not supported by this browser.");
  }
}
getLocation(function(lat_lng){
console.log(lat_lng);
});






export default App;
