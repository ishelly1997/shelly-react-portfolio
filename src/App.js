
import './App.css';
import React, { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  var component = {page:''}

  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      {component.page == 'Resume'? <Resume/>:<Projects/>}
    <Footer/>
    </div>
  );
}

export default App;
