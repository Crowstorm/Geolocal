import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import ButtonsContainer from '../containers/buttonsContainer';

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
        //console.log(address)
        //this.props.getFormAddress(address);
        this.props.getDataFromGeocode(address);
        this.props.test();
    }

    handleSecondFormSubmit = (e) => {
        e.preventDefault()
        alert('lat' + this.props.lat + 'lon' + this.props.lon)
    }


    getForm = () => {
        return (
            <div>
                <form onSubmit={this.handleFirstFormSubmit}>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>Adres</label>
                                <input type="text" className="form-control" required ref="address" defaultValue='Piotrkowska 1, Łódź' />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <button type="submit" className="btn btn-primary center">Pobierz dane</button><br /><br />
                        </div>
                    </div>
                </form>

                <form onSubmit={this.handleSecondFormSubmit}>
                    {/* <ButtonsContainer /> */}
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
                                <input type="text" className="form-control"  value={(this.props.street) ? this.props.street : '...'} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Numer ulicy</label>
                                <input type="text" className="form-control"  value={(this.props.streetNr) ? this.props.streetNr : '...'} />
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
                                <input type="text" className="form-control"  value={(this.props.city) ? this.props.city : '...'} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label>Województwo</label>
                                <input type="text" className="form-control"  value={(this.props.voivodeship) ? this.props.voivodeship : '...'} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label>Powiat</label>
                                <input type="text" className="form-control"  value={(this.props.county) ? this.props.county : '...'} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label>Gmina</label>
                                <input type="text" className="form-control"  value={(this.props.borough) ? this.props.borough : '...'} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label>Kraj</label>
                                <input type="text" className="form-control"  value={(this.props.country) ? this.props.country : '...'} />
                            </div>
                        </div>

                        {/* lat lon */}
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Latitude</label>
                                <input type="text" className="form-control"  value={(this.props.lat) ? this.props.lat : '...'} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Longitude</label>
                                <input type="text" className="form-control"  value={(this.props.lon) ? this.props.lon : '...'} />
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