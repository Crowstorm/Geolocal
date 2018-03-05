import React from 'react';

class MassButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    handleMassButtonSubmit = (e) =>{
        e.preventDefault();
        this.props.massGeoloc();
    }

    getResults = () =>{
        return(
            <div>
                <p> Poprawnie ustawione adresów : {this.props.arrSucc.length} </p>
                <p> Adresy do skorygowania: {this.props.arrCheck.length} </p>
                <p> Nie pobrano adresów : {this.props.arrFail.length} </p>
            </div>
        )
    }
    render() {
        let renderResults = (this.props.arrFail.length == 0) ? '' : this.getResults() ;
        return (
            <div>
                <form onSubmit={this.handleMassButtonSubmit}>
                    <div className="row">
                        <div className="col-lg-12">
                            <button type="submit" className="btn btn-primary center">Masowe</button><br /><br />
                        </div>
                    </div>
                </form>

                <div>
                    {renderResults}
                </div>
            </div>
        )
    }
}

export default MassButton;