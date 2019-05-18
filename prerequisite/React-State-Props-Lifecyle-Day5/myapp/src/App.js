import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section data="data from app.js"/>
        <Footer />

      </div>
    );
  }
}

export default App;
