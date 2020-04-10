import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Explore from './components/pages/explore_page/Explore';
import Projects from './components/pages/projects_page/Projects';
import Footer from './components/navbar/Footer';

function App() {
  return (
  <>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Explore} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    <Footer />
  </>
  );
}

export default App;
