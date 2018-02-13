import React from 'react';
import {connect} from 'react-redux';

import Buttons from '../components/buttons'

class ButtonsContainer extends React.Component{
    render(){
        return(
            <Buttons {...this.props}/>
        )
    }
}

const mapStateToProps = (store) =>{
    return{
        street: store.form.street,
        streetNr: store.form.streetNr,
        postalCode: store.form.postalCode,
        city: store.form.city,
        voivodeship: store.form.voivodeship,
        county: store.form.county,
        borough: store.form.borough,
        country: store.form.country,
    }
}

export default connect(mapStateToProps)(ButtonsContainer);