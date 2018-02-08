import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="row bg-dark text-white h-10">
                <div className='container d-flex justify-content-center'>
                    <div className="row">
                        <p>Geolokalizacja BMS</p>
                    </div>
                    <div className="row">
                        <img src="http://www.iconarchive.com/download/i45759/tatice/operating-systems/Globe.ico" style={{ height: 100 + 'px' }} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;