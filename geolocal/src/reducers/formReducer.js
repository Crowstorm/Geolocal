

let initial_state = {
    addressInput: null,
    street: null,
    streetNr: null,
    postalCode: null,
    city: null,
    voivodeship: null,
    county: null,
    borough: null,
    country: null
};

export default (state = initial_state, action) => {

    switch (action.type) {
        // case FETCH_LAT_LON: {
        //     localStorage.setItem('AxiosLat', action.payload.data.results[0].geometry.location.lat);
        //     localStorage.setItem('AxiosLon', action.payload.data.results[0].geometry.location.lng);
        //     return Object.assign({}, state, {
        //         axiosDataLat: action.payload.data.results[0].geometry.location.lat,
        //         axiosDataLon: action.payload.data.results[0].geometry.location.lng,
        //     })
        // }
        default: {
            return state;
        }
    }
}