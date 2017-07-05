import React from 'react';
import Header from  './components/Header/Header';
import Footer from './components/Footer/Footer';
import './static/styles/foundation.css';

class App extends React.Component {
  render() {
    return (
      <div>
          <Header/>
          {this.props.children}
          <Footer/>
      </div>
    );
  }
}

export default App;
