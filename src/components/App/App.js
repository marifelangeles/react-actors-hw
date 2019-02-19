import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
