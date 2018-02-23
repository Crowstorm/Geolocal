
//AKCJE
import {
    GET_FORM_ADDRESS,
    GET_DATA_FROM_GEOCODE,
    UPDATE_LAT_LON,
    GET_TEST,
    FILL_ARRAYS
} from '../actions/formActions'

let initial_state = {
    addressInput: null,
    street: null,
    streetNr: null,
    postalCode: null,
    city: null,
    voivodeship: null,
    county: null,
    borough: null,
    country: null,
    lat: null,
    lon: null,
    addressError: false,
    testUlica: null,
    testLat: null,
    testLon: null,
    arrSucc: [],
    arrFail: [],
    arrCheck: [],
    arrFailIndex: 0
};

export default (state = initial_state, action) => {

    switch (action.type) {
        case FILL_ARRAYS: {
            return Object.assign({}, state, {
                arrSucc: action.arrSucc,
                arrFail: action.arrFail,
                arrCheck: action.arrCheck
            })
        }
        case GET_TEST: {
            return Object.assign({}, state, {
                testUlica: action.testUlica,
                testLat: action.testLat,
                testLon: action.testLon
            })
        }
        case UPDATE_LAT_LON: {
            return Object.assign({}, state, {
                lat: action.lat,
                lon: action.lon
            })
        }

        case GET_FORM_ADDRESS: {
            return Object.assign({}, state, {
                address: action.address
            })
        }

        case GET_DATA_FROM_GEOCODE: {
            try {
                return Object.assign({}, state, {
                    street: action.payload.data.results[0].address_components[1].long_name,
                    streetNr: action.payload.data.results[0].address_components[0].long_name,
                    city: action.payload.data.results[0].address_components[3].long_name,
                    voivodeship: action.payload.data.results[0].address_components[5].long_name,
                    county: action.payload.data.results[0].address_components[4].long_name,
                    country: action.payload.data.results[0].address_components[6].long_name,
                    lat: action.payload.data.results[0].geometry.location.lat,
                    lon: action.payload.data.results[0].geometry.location.lng,
                    addressError: false
                })
            } catch (err) {
                console.log(err);
                return Object.assign({}, state, {
                    street: null,
                    streetNr: null,
                    city: null,
                    voivodeship: null,
                    county: null,
                    country: null,
                    lat: null,
                    lon: null,
                    addressError: true
                })
            }
        }

        default: {
            return state;
        }
    }
}