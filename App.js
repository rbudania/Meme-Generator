import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Meme from './Meme'
import Footer from './Footer'

function App() {
  return (
    <div className="App">         
          <Header/>
          <Meme/>
          <Footer/>
    </div>
  );
}

export default App;
