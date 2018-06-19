import React, { Component } from 'react';

import Nav from 'components/header.js'


class App extends Component {
    render() {
      return (
        <div>
          <Nav />
       </div>
      );
    }
  }


ReactDOM.render(<App />), document.getElementById('app')