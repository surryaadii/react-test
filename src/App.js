import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './layout/components/Home'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ Home }/> 
          <Route render={ () => <h1>404 Page Not Found</h1> } />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
