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

    getResults = () =>{
        return(
            <div>
                <div>{this.props.errorAPI}</div>
                <div>{this.props.name}</div>
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
                            <button type="submit" className="btn btn-primary center" >Pojedyńczo</button><br /><br />
                        </div>
                    </div>
                </form>
                {results}
            </div>
        )
    }
}

export default SingleButton;