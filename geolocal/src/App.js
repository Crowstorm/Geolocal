import React, { Component } from 'react';
import './App.css';

//containers
import HeaderContainer from './containers/headerContainer'
import FooterContainer from './containers/footerContainer'
import FormContainer from './containers/formContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <FormContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
