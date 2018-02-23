import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import ButtonsContainer from '../containers/buttonsContainer';
import MassButtonContainer from '../containers/massButtonContainer';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = { address: null, msg: false }
        // this.onChange = (address) => this.setState({ address })
    }

    showMsg = () => {
        if (this.state.msg === true) {
            return (
                <div> Sprawdź poprawność danych </div>
            )
        } else {
            return null
        }
    }



    handleFirstFormSubmit = (e) => {
        e.preventDefault()
        let address = this.refs.address.value;
        console.log('adres', address)
        //this.props.getFormAddress(address);
        this.props.getDataFromGeocode(address);
        // let ulica = "Piotrkowska 1";
        // let lon = this.props;
        // let lat = 123.23
        // this.props.testUpdate(ulica, lat, lon);
    }

    handleSecondFormSubmit = (e) => {
        e.preventDefault();
        //Split full address into parts
        let result;
        let arrIndex = this.props.arrIndex;
        result = this.props.arrFail[arrIndex].split(',');

        let street = result[0]//.replace(/\s/g, '');
        let city = result[1]//.replace(/\s/g, '');
        let lat = this.props.lat;
        let lon = this.props.lon;
        this.props.testUpdate(street, city, lat, lon)
        console.log('lat' , this.props.lat , 'lon' , this.props.lon, 'street', street, 'city', city)
    }

    // handleThirdFormSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log('elo');
    //     this.props.test();
    // }


    getForm = () => {
        let arrIndex = this.props.arrIndex;
        console.log('arrindex', arrIndex)
        return (
            <div>
                <form onSubmit={this.handleFirstFormSubmit}>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>Adres</label>
                                <input type="text" className="form-control" required ref="address" value={this.props.arrFail[arrIndex]} />
                                {/* defaultValue='Piotrkowska 1, Łódź'  */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <button type="submit" className="btn btn-primary center">Pobierz dane</button><br /><br />
                        </div>
                    </div>

                </form>

                {/* Masowe pobranie z bazy */}

                <MassButtonContainer />

                <form onSubmit={this.handleSecondFormSubmit}>
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Przed potwierdzeniem sprawdź poprawność danych</p>
                        </div>
                    </div>

                    {/* tupdtae */}
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Ulica</label>
                                <input type="text" className="form-control" value={(this.props.street) ? this.props.street : '...'} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Numer ulicy</label>
                                <input type="text" className="form-control" value={(this.props.streetNr) ? this.props.streetNr : '...'} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Kod pocztowy</label>
                                <input type="text" className="form-control" value={(this.props.postalCode) ? this.props.postalCode : '...'} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Miasto</label>
                                <input type="text" className="form-control" value={(this.props.city) ? this.props.city : '...'} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label>Województwo</label>
                                <input type="text" className="form-control" value={(this.props.voivodeship) ? this.props.voivodeship : '...'} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label>Powiat</label>
                                <input type="text" className="form-control" value={(this.props.county) ? this.props.county : '...'} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label>Gmina</label>
                                <input type="text" className="form-control" value={(this.props.borough) ? this.props.borough : '...'} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label>Kraj</label>
                                <input type="text" className="form-control" value={(this.props.country) ? this.props.country : '...'} />
                            </div>
                        </div>

                        {/* lat lon */}
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Latitude</label>
                                <input type="text" className="form-control" value={(this.props.lat) ? this.props.lat : '...'} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Longitude</label>
                                <input type="text" className="form-control" value={(this.props.lon) ? this.props.lon : '...'} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <button type="submit" className="btn btn-primary center">Wyślij</button><br /><br />
                        </div>
                    </div>

                    {/* <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" className="btn btn-primary center">Pobierz</button><br /><br />
                    </div>
                </div> */}
                </form>
            </div>
        )
    }

    render() {
        console.log('propsy', this.props)
        let renderForm = this.getForm();
        //let renderMap = this.getMap();

        return (
            <div>
                {renderForm}

            </div>
        )
    }
}

export default Form;