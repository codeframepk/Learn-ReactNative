import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Store from './redux/store'
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <div>
        <Header />
        <Section data="data from app.js" />
        <Footer />
      </div>
      </Provider>
    );
  }
}

export default App;
