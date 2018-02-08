import React from 'react';

class Form extends React.Component {

    getForm = () =>{
        return(
            <form>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <label>Adres</label>
                        <input type="text" className="form-control" placeholder="Example input" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Ulica</label>
                        <input type="text" className="form-control" placeholder="Another input" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Numer ulicy</label>
                        <input type="text" className="form-control" placeholder="Another input" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Kod pocztowy</label>
                        <input type="text" className="form-control" placeholder="Another input" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Miasto</label>
                        <input type="text" className="form-control" placeholder="Another input" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <div className="form-group">
                        <label>Województwo</label>
                        <input type="text" className="form-control" placeholder="Another input" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label>Powiat</label>
                        <input type="text" className="form-control" placeholder="Another input" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label>Gmina</label>
                        <input type="text" className="form-control" placeholder="Another input" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label>Kraj</label>
                        <input type="text" className="form-control" placeholder="Another input" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <button type="submit" className="btn btn-primary center">Pobierz</button><br /><br />
                </div>
            </div>
        </form>
        )
    }

    getMap = () =>{
        return(
            <img src="https://www.goatsontheroad.com/wp-content/uploads/2012/03/old-world-map-1.jpg" />
        )
    }
    render() {
        let renderForm = this.getForm();
        let renderMap = this.getMap();
        return (
            <div>
               {renderForm}
               {renderMap}
            </div>
        )
    }
}

export default Form;