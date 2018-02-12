import React from 'react';
import {connect} from 'react-redux';


import Form from '../components/form';
import {getFormAddress, getDatafromGeocode} from '../actions/formActions';


class FormContainer extends React.Component{
    render(){
        return(
            <Form {...this.props}/>
        )
    }
}

const mapStateToProps = (store) =>{
    return{
        address: store.form.addressInput
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);