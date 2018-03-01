import React from 'react';

class SingleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.getSingleRecord();
    }

    handleRemoveRecord = (id) =>{
        this.props.deleteOneRecord(id)
    }

    getResults = () =>{
        let button = (this.props.errorAPI) ? <button type="submit" onClick={() => this.handleRemoveRecord(this.props.clientId)} className="btn btn-primary center" >Usuń rekord z bazy</button> : '';
        return(
            <div>
                <div>{this.props.errorAPI}</div>
                <div>{this.props.msg}</div>
                <div>{this.props.name}</div>
                <div>{this.props.phoneNumber}</div>
                <div>{this.props.checkAddress}</div>
                {button}
            </div>
        )
    }

    render() {
        let results = this.getResults();
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-12">
                            <button  type="submit" className="btn btn-primary center" >Pojedyńczo</button><br /><br />
                        </div>
                    </div>
                </form>
                {results}
            </div>
        )
    }
}

export default SingleButton;