import React from 'react';
import {connect} from 'react-redux';


import Form from '../components/form';
import {getFormAddress, getDatafromGeocode, updateLatLon} from '../actions/formActions';


class FormContainer extends React.Component{
    render(){
        return(
            <Form {...this.props}/>
        )
    }
}

const mapStateToProps = (store) =>{
    return{
        address: store.form.addressInput,
        street: store.form.street,
        streetNr: store.form.streetNr,
        postalCode: store.form.postalCode,
        city: store.form.city,
        voivodeship: store.form.voivodeship,
        county: store.form.county,
        borough: store.form.borough,
        country: store.form.country,
        lat: store.form.lat,
        lon: store.form.lon
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        // changeCoords: (lat, lon, login) => {
        //     dispatch(changeCoords(lat, lon, login))
        // },
        getFormAddress: (address) =>{
            dispatch(getFormAddress(address))
        },
        getDataFromGeocode: (address) => {
            dispatch(getDatafromGeocode(address))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);