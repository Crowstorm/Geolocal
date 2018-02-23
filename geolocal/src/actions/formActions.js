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

//functions

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
    let _lat = lat;
    let _lon = lon;

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
    //console.log('result', result);

    let street = result[0].replace(/\s/g, '');;
    let city = result[1].replace(/\s/g, '');;
    const country = 'PL';

    //console.log('test', street, city, country)

    //api call url, podmienic klucz api, bo ten moj joł
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${street},${city}&key=AIzaSyBHek4tQK4jSQhVSoxw4s4c8tz_1z3xuNI`;
    //console.log(url);

    const request = axios.get(url);
    //console.log(request);

    return function (dispatch) {
        dispatch({
            type: GET_DATA_FROM_GEOCODE,
            payload: request
        })
    }
}