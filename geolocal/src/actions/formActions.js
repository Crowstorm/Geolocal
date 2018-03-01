import axios from 'axios';

import Api from '../services/api';


//namespace
const namespace = 'GEO';

//const names
export const GET_FORM_ADDRESS = `GET_FORM_ADDRESS_${namespace}`;
export const GET_DATA_FROM_GEOCODE = `GET_DATA_FROM_GEOCODE_${namespace}`;
export const UPDATE_LAT_LON = `UPDATE_LAT_LON_${namespace}`;
export const GET_TEST = `GET_TEST_${namespace}`;
export const FILL_ARRAYS = `FILL_ARRAYS_${namespace}`;
export const GET_SINGLE_RECORD = `GET_SINGLE_RECORD_${namespace}`;
export const SEND_MESSAGE = `SEND_MESSAGE_${namespace}`;
export const UPDATE_DB_COORDS = `UPDATE_DB_COORDS_${namespace}`;

//functions

export function deleteOneRecord(id) {
    return function (dispatch) {
        console.log(id);
        let params = { id }
        console.log(params)
        Api.delete('/api/database/delete', params).then((res, err) => {
            if (err) console.log(err);

            if (res.success) {
                dispatch({
                    type: SEND_MESSAGE,
                    msg: res.msg
                })
                console.log(res.msg);
            }
        })
    }
}

export function getSingleRecord() {
    return function (dispatch) {
        Api.get('/api/geoloc/single').then((res) => {
            if (res.success) {
                console.log(res);
                if (res.data.error == "No address found") {
                    dispatch({
                        type: GET_SINGLE_RECORD,
                        errorAPI: res.data.error,
                        name: res.data.name,
                        phoneNumber: res.data.phoneNumber,
                        clientId: res.data.clientId
                    })
                } else if (res.data.error == "Could not get coordinates") {
                    // const address = res.data.addresses[0].route.concat(' ').concat(res.data.addresses[0].street_number).concat(', ').concat(res.data.addresses[0].locality);
                    //console.log('adres', address)
                    dispatch({
                        type: GET_SINGLE_RECORD,
                        errorAPI: res.data.error,
                        name: res.data.clientName,
                        checkAddress: res.data.addressNoEncode,
                        clientId: res.data.clientId
                    })
                } else {
                    console.log('res', res)
                    dispatch({
                        type: GET_SINGLE_RECORD,
                        name: res.data.clientName,
                        checkAddress: res.data.addressNoEncode,
                        clientId: res.data.clientId
                    });
                    dispatch({
                        type: SEND_MESSAGE,
                        msg: 'Adres ustawiony poprawnie, możesz przejść dalej'
                    })
                    //const address = res.data.addresses[0].route.concat(' ').concat(res.data.addresses[0].street_number).concat(', ').concat(res.data.addresses[0].locality);

                    console.log('adres ustawiony poprawnie', res.data.clientName, ', ', res.data.addressNoEncode)
                }


            }
        })
    }
}

//Update coordinates in database
export function updateDBcoords(id, lat, lon) {
    return function (dispatch) {
        let params = { id, lat, lon };
        console.log('id', params.id)

        Api.post('/api/ulica/coordy', params).then((res) => {
            if (res.success) {
                dispatch({
                    type: UPDATE_DB_COORDS,
                    dbLat: lat,
                    dbLon: lon,
                })
            } else {
                alert('Something went wrong, check console for errors');
                console.log('Response: ', res);
            }
        })
    }
}
export function testUpdate(ulica, miasto, lat, lon) {
    return function (dispatch) {
        let params = { ulica, miasto, lat, lon };
        //console.log(params);

        Api.post('/api/ulica/coordy', params).then((res) => {
            if (res.success) {
                //console.log('resp', res)
                dispatch({
                    type: GET_TEST,
                    testUlica: ulica,
                    testLat: lat,
                    testLon: lon
                })
            } else {
                alert('Cos poszlo nie tak');
                console.log('respons', res)
            }
        })
    }
}

export function test() {
    return function (dispatch) {
        Api.get('/api/ulica/all').then((res) => {
            console.log('resp', res);
            dispatch({
                type: FILL_ARRAYS,
                arrSucc: res.data.arrSucc,
                arrFail: res.data.arrFail,
                arrCheck: res.data.arrCheck
            })
        })
    }
}

export function updateLatLon(lat, lon) {
    let _lat = Number(lat);
    let _lon = Number(lon);

    return function (dispatch) {
        dispatch({
            type: UPDATE_LAT_LON,
            lat: _lat,
            lon: _lon
        })
    }
}

export function getFormAddress(address) {
    let _address = address;

    console.log(_address);
    return function (dispatch) {
        dispatch({
            type: GET_FORM_ADDRESS,
            address: _address
        })

    }
}

export function getDatafromGeocode(address) {
    //Split full address into parts
    let result;
    result = address.split(',');
    let addressApi;
    let country = 'PL';
    console.log('result', result);
    if (result.length == 2) {
        console.log('mam dwa"');
        let street = result[0].replace(/\s/g, '');
        let city = result[1].replace(/\s/g, '');
        addressApi = encodeURI(street.concat(', ').concat(city)); //Dla API
    } else if (result.length == 3) {
        let street = result[0].replace(/\s/g, '');
        let streetNumber = result[1].replace(/\s/g, '');
        let city = result[2].replace(/\s/g, '');
        addressApi = encodeURI(street.concat(', ').concat(streetNumber).concat(',').concat(city)); //Dla API
    }

    //console.log('test', street, city, country)

    //api call url, podmienic klucz api, bo ten moj joł
    //1 klucz
    //AIzaSyBHek4tQK4jSQhVSoxw4s4c8tz_1z3xuNI
    //2 klucz api
    //AIzaSyD4N5V3BF_gXXHy5ZC_EuQGYTgUkc3Feb0
    //3 klucz
    // AIzaSyAMqoqcQ5d0U9jDKDgNaj1K3vsV3MoSAds
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressApi}&key=AIzaSyBHek4tQK4jSQhVSoxw4s4c8tz_1z3xuNI`;
    console.log(url);

    const request = axios.get(url);
    //console.log(request);

    return function (dispatch) {
        dispatch({
            type: GET_DATA_FROM_GEOCODE,
            payload: request
        })
    }
}