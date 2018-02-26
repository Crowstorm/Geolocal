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

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-12">
                            <button type="submit" className="btn btn-primary center" >Pojedyńczo</button><br /><br />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingleButton;