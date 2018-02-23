import React from 'react';
import { connect } from 'react-redux';

import MassButton from '../components/massButton';
import { test } from '../actions/formActions';

class MassButtonContainer extends React.Component {
    render() {
        return (
            <MassButton {...this.props} />
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
        arrCheck: store.form.arrCheck
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        test: () => {
            dispatch(test())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MassButtonContainer);