import React from 'react';
import { connect } from 'react-redux';

import SingleButton from '../components/singleButton';

import { getSingleRecord } from '../actions/formActions';


class SingleButtonContainer extends React.Component{
    render(){
        return(
            <SingleButton {...this.props}/>
        )
    }
}

const mapStateToProps = (store) => {
    return {
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
        lon: store.form.lon,
        arrSucc: store.form.arrSucc,
        arrFail: store.form.arrFail,
        arrCheck: store.form.arrCheck,
        errorAPI: store.form.errorAPI,
        name: store.form.name,
        phoneNumber: store.form.phoneNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSingleRecord: () => {
            dispatch(getSingleRecord())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleButtonContainer);