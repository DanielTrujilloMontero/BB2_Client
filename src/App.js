import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import AppLogin from './components/AppLogin';
import GetItems from './service/GetItems';

function App() {

  if(localStorage.getItem('isLoged') === 'false') {
    return (
      <div className="App">
        <Header></Header>
        <GetItems></GetItems>
        <Footer></Footer>
        <h3>{localStorage.getItem('Items')}</h3>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header></Header>
        <AppLogin></AppLogin>
        <Footer></Footer>
      </div>
    );
  }
};

export default App;
