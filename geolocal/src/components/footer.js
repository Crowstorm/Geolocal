import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer className="row bg-dark text-white p-2 footer h-10 w-100 m-0" style={{"position": "relative", "bottom": 0}}>
                <p>Jasny skuter jestem footer</p>
            </footer>
        )
    }
}

export default Footer;