import React from 'react';
import './styles.css';


import GoogleMapsLoader from 'google-maps';

//MOJ KLUCZ DO API, DO WYMIANY POZNIEJ BO MOGA ZBANOWAC JAK ZA DUZY RUCH
GoogleMapsLoader.KEY = 'AIzaSyBHek4tQK4jSQhVSoxw4s4c8tz_1z3xuNI';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.handleLocationError = this.handleLocationError.bind(this);
        this.state = {

        }
    }

    //map start
    componentWillReceiveProps(nextProps) {
        //https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

        GoogleMapsLoader.load((google) => {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 15
            })



            // Try HTML5 geolocation.
            if (navigator.geolocation) {

                navigator.geolocation.getCurrentPosition((position) => {

                    let _lat = (Number(nextProps.lat)) ? Number(nextProps.lat) : 1;
                    let _lon = (Number(nextProps.lon)) ? Number(nextProps.lon) : 1;
                    console.log(_lat, _lon);

                    var pos = {
                        lat: _lat,
                        lng: _lon
                    }

                    var marker = new window.google.maps.Marker({
                        position: {
                            lat: _lat,
                            lng: _lon
                        },
                        map: map,
                        draggable: true,
                        title: 'Marker'
                    })

                    map.setCenter(pos);

                    //marker listeners
                    window.google.maps.event.addListener(marker, 'dragstart', function () {
                    });

                    window.google.maps.event.addListener(marker, 'dragend', (e) => {
                        this.props.updateLatLon(e.latLng.lat().toFixed(7), e.latLng.lng().toFixed(7))
                    });


                }, () => {
                    this.handleLocationError(true, map.getCenter());
                });

            } else {
                // Browser doesn't support Geolocation
                this.handleLocationError(false, map.getCenter());
            }

        })
    }

    handleLocationError(browserHasGeolocation, pos, map) { }

    //map end
    getMap = () =>{
        if(!this.props.addressError){
            return(
                <div className='d-flex justify-content-center' id='map' />  
            )
        } else {
            return(<div>Błędny adres </div>)
        }

    }

    render() {
        console.log('propsy mapy', this.props);
        let renderMap = this.getMap();
        return (
            <div>
                {renderMap}
            </div>
        )
    }
}

export default Map;