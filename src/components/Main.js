import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import GetItems from './service/GetItems';

function Main() {
    return (
        <div className="App">
            <Header></Header>
            <GetItems></GetItems>
            <Footer></Footer>
        </div>
    );
}

export default Main;