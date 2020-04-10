import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Explore from './components/pages/explore_page/Explore';
import Footer from './components/navbar/Footer';

function App() {
  return (
  <div>
    <Navbar />
    <Explore />
    <Footer />
  </div>
  );
}

export default App;
