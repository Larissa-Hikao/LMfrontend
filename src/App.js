import React from 'react';
import './App.css';
import {MDBInput} from 'mdbreact';
import NavbarPage from './nav';
import Lateral from './lateral';

import fundo from './assets/grocery.jpg';
import Content from './Content';
function App() {
  return (
    <div className="App">
      <NavbarPage/>
      <Lateral/>
      <Content/>
    </div>
  );
}

export default App;
