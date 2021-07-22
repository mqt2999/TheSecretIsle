import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Story from './components/Story';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Quiz from './pages/Quiz'
import Main from './components/Main/Main'

function App() {
  return (
    <Router>
      <Main>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Story" component={Story} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Quiz" component={Quiz} />
      </Main>
    </Router>
  );
}

export default App;
