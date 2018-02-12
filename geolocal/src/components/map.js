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
    componentDidMount() {

        //https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

        GoogleMapsLoader.load((google) => {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 15
            })



            // Try HTML5 geolocation.
            if (navigator.geolocation) {

                //przekonwertuj z adresu usera


                // console.log("Pobrany adres: ", street, ' ', city)
                navigator.geolocation.getCurrentPosition((position) => {

                    function lat() {
                        if (localStorage.getItem('AxiosLat')) {
                            return Number(localStorage.getItem('AxiosLat'))
                        } else {
                            return position.coords.latitude;
                        }
                    }

                    function lon() {
                        if (localStorage.getItem('AxiosLon')) {
                            return Number(localStorage.getItem('AxiosLon'))
                        } else {
                            return position.coords.longitude;
                        }
                    }

                    let _lat = lat();
                    let _lon = lon();
                    console.log(_lat, _lon);

                    // var pos = {
                    //     lat: position.coords.latitude,
                    //     lng: position.coords.longitude
                    // };
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

                    //tez local storage
                    //let login = this.checkLogin();
                    //this.props.changeCoords(_lat.toFixed(7), _lon.toFixed(7), login);
                    localStorage.setItem('tempLat', _lat);
                    localStorage.setItem('tempLon', _lon);

                    //marker listeners
                    window.google.maps.event.addListener(marker, 'dragstart', function () {
                    });

                    window.google.maps.event.addListener(marker, 'dragend', (e) => {
                        // document.getElementById('test').innerHTML = '<p>Want to export: Current Lat: ' + e.latLng.lat().toFixed(7) + ' Current Lng: ' + e.latLng.lng().toFixed(7) + '</p>';
                        // let login = this.checkLogin();

                        //lepiej w localstorage chyba albo nastepny reducer
                        localStorage.setItem('tempLat', e.latLng.lat().toFixed(7));
                        localStorage.setItem('tempLon', e.latLng.lng().toFixed(7));
                        //this.props.changeCoords(e.latLng.lat().toFixed(7), e.latLng.lng().toFixed(7), login);
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

    render() {
        return (
            <div>
                <div className='d-flex justify-content-center' id='map' />
            </div>
        )
    }
}

export default Map;