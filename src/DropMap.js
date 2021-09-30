import React from 'react'
import './DropMap.css'
import { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class DropMap extends Component {

  componentDidMount()
    {
        window.addEventListener('load', this.initMap);
    }
   
    componentWillUnmount() { 
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
    render() {
    return (
        <div>
            <div className="DropMap">
             <input type= "text" id="drop" className="drop"  placeholder="Drop" readOnly={true}></input>
        </div>
        <div className="details">
            <input type="text" id="drop_details" className="details_drop" placeholder="Drop details" readOnly={true}></input>
            <input type="text" id="drop_name" className="name_drop" placeholder="Name" readOnly={true}></input>
            <input type="text" id="drop_address" className="address_drop" placeholder="Address" readOnly={true}></input>
            <input type="text" id="contact_name" className="contact_name" placeholder="Contact name" readOnly={true}></input>
            <input type="phone" id="drop_contacts" className="contact" placeholder="Contacts" readOnly={true}></input>

            
        </div>
        
        <div>
        <Map google={this.props.google}
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
    </Map>
    </div>
        </div>
    )
}
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCwXzwNOfT_qUGN7hE5_-oPMlvRJs8zcvk')
  })(DropMap)