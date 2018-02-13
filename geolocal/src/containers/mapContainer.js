import React from 'react';
import {connect} from 'react-redux';


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
        lon: store.form.lon
    }
}

export default connect(mapStateToProps)(MapContainer);