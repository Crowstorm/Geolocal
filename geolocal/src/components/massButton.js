import React from 'react';

class MassButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('elo');
        this.props.test();
    }

    getResults = () =>{
        return(
            <div>
                <p> Liczba SAKCESOW : {this.props.arrSucc.length} </p>
                <p> Liczba do poprawy: {this.props.arrCheck.length} </p>
                <p> Liczba FEJLI : {this.props.arrFail.length} </p>
            </div>
        )
    }
    render() {
        let renderResults = (this.props.arrSucc.length == 0) ? ':(' : this.getResults() ;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-12">
                            <button type="submit" className="btn btn-primary center" disabled>Masowe</button><br /><br />
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