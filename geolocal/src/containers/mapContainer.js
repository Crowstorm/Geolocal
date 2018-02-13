import React from 'react';
import {connect} from 'react-redux';

import  {updateLatLon} from '../actions/formActions';



import Map from '../components/map'


class MapContainer extends React.Component{
    render(){
        return(
            <Map {...this.props}/>
        )
    }
}

const mapStateToProps = (store) =>{
    return{
        address: store.form.addressInput,
        lat: store.form.lat,
        lon: store.form.lon,
        addressError: store.form.addressError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        updateLatLon: (lat, lon) =>{
            dispatch(updateLatLon(lat, lon))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);