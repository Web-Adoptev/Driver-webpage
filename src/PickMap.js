import React from 'react'
// import {useEffect} from 'react'
import { Component } from 'react'
// import {render} from 'react-dom'
// import ReactDOM from 'react-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {geolocated} from 'react-geolocated';
import './PickMap.css'

class PickMap extends Component {
  
  
    componentDidMount()
    {
        window.addEventListener('load', this.initMap);
    }
   
    componentWillUnmount() 
    { 
      window.removeEventListener('load', this.initMap);
    }
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
    
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };
      // renderMarkers(map, maps) {
      //   let marker = new maps.Marker({
      //     position: myLatLng,
      //     map,
      //     title: 'Hello World!'
          
      //   });
      // }
      
    
    render() {

      // const location = useGeolocation();
      // const showMyLocation = () => {
      //   if(location.loaded && !location.error) {
      //     mapRef.current.leafletElement.flyTo([location.coordinates.lat, location.coordinates.lng]
      //       );
      //   }
      //   else{
      //     alert(location.error.message)
      //   }
      // }
      
    return (
        <div>
        <div className="PickMap">
             <input type= "text" id="Pickup_pickup" className="pick"  placeholder="Pickup" onClick={initMap}  readOnly={true}></input>
        </div>
        <div className="details">
            <input type="text" id="pick_details" className="details_pick" placeholder="Pickup details" readOnly={true}></input>
            <input type="text" id="pick_name" className="name" placeholder="Name" readOnly={true}></input>
            <input type="text" id="pick_address" className="address" placeholder="Address" readOnly={true}></input>
            <input type="text" id="contact_name" className="contact_name" placeholder="Contact name" readOnly={true}></input>
            <input type="phone" id="pick_contacts" className="contacts" placeholder="Contacts" readOnly={true}></input>
        </div>
        <div>
        <Map  id= "map" google={this.props.google}
        onClick={this.onMapClicked}>
      <Marker onClick={this.onMarkerClick}
              name={'Current location'} />

      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
      </InfoWindow>
{/* 
      {location.loaded && !location.error &&(
      <Marker>
         position= {
         location.coordinates.lat, 
         location.coordinates.lng}
         </Marker>
      )} */}
    </Map>
    </div>
    </div>
    )
    }
  }
    
       window.onload = initMap();
  let  map, google, infoWindow, markers;

    function initMap() {
    // window.alert("working")
    
    //   map = new window.google.maps.Map(document.getElementById("map"), {
    //     center : { lat: 17.3850, lng: 78.4867},
       
    //     zoom: 8,
    //   });
    //   infoWindow = new window.google.maps.InfoWindow();
     
    //   const locationButton = document.createElement("button");
    
    //   locationButton.textContent = "Pan to Current Location";
    //   locationButton.classList.add("custom-map-control-button");
    //   map.window.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    //   locationButton.addEventListener("click", () => {
    //     // Try HTML5 geolocation.
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //           const pos = {
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude,
    //           };
    
    //           infoWindow.setPosition(pos);
    //           infoWindow.setContent("Location found.");
    //           infoWindow.open(map);
    //           map.setCenter(pos);
    //         },
    //         () => {
    //           handleLocationError(true, infoWindow, map.getCenter());
    //         }
    //       );
    //     } else {
    //       // Browser doesn't support Geolocation
    //       handleLocationError(false, infoWindow, map.getCenter());
    //     }
    //   });
    // }
    // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    //   infoWindow.setPosition(pos);
    //   infoWindow.setContent(
    //     browserHasGeolocation
    //       ? "Error: The Geolocation service failed."
    //       : "Error: Your browser doesn't support geolocation."
    //   );
    //   infoWindow.open(map);
    // }
  "use strict";
  
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      var currentLatitude = position.coords.latitude;
      var currentLongitude = position.coords.longitude;
       map = new window.google.maps.Map(document.getElementById('map'), {
       zoom: 15,
        center: {lat: currentLatitude, lng: currentLongitude},
       });
       infoWindow = new window.google.maps.InfoWindow();
       console.log(currentLatitude + " " + currentLongitude)
       infoWindow.setPosition(currentLatitude, currentLongitude);
                 infoWindow.setContent("Location found.");
                 infoWindow.open(map);
                 map.setCenter(currentLatitude, currentLongitude);
      // default marker at current location
      // var markers = new window.google.maps.Marker({
      // position: new google.maps.LatLng(currentLatitude, currentLongitude),
      // map: map,
      // title: 'Hello World!'
      // });
      new window.google.maps.Marker({
        position: {lat: currentLatitude, lng: currentLongitude},
        map,
        title: "You are here!",
      });

       var userLatLng = new window.google.maps.LatLng(currentLatitude, currentLongitude);
      }
  )
    }
  }
    

      //your filter function
      // var markersFiltered = markers.filter(function(markers, index, array, google) {
      //   var myLatlng = new window.google.maps.LatLng(markers.Latitude, markers.Longitude);
      //   return google.maps.geometry.spherical.computeDistanceBetween(userLatLng, myLatlng) < 10000;
      // });

      // window.onload = function(a) {
      //   var mapOptions = {
      //     center: new window.google.maps.LatLng(markers[0].Latitude, markers[0].Longitude),
      //     zoom: 8,
      //     mapTypeId: window.google.maps.MapTypeId.ROADMAP
      //   };

      //   var infoWindow = new window.google.maps.InfoWindow();
      //   var map = new window.google.maps.Map(document.getElementById("dvMap"), mapOptions);

      //   for (var i = 0; i < markersFiltered.length; i++) {
      //     var data = markers[i];
      //     var myLatlng = new window.google.maps.LatLng(data.Latitude, data.Longitude);
      //     var marker = new window.google.maps.Marker({
      //       position: myLatlng,
      //       draggable: true,
      //       animation: google.maps.Animation.DROP,
      //       get map() {
      //         return map;
      //       }
      //     });
      //     (function(marker, data) {
      //       window.google.maps.event.addListener(marker,
      //         "click",
      //         function(e) {
      //           infoWindow.setContent(data.Venue + " " + data.Genre.Name);
      //           infoWindow.open(map, marker);
      //         });
      //     })(marker, data);
      //   }

//       };
//     });
// }; 
    
        

 

// export default geolocated({
//   positionOptions: {
//     enableHighAccuracy: false
//   },
//   userDecisionTimeout: 10000
// })
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCwXzwNOfT_qUGN7hE5_-oPMlvRJs8zcvk')
})(PickMap)

  