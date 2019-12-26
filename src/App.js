import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Team from './components/Team';
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'

class App extends Component {
	render() {
		return (
		<Router>
		<Route path="/"   component= {Header}/>
		<Route path="/team"   component= {Team}/>
		<Route path="/about"   component= {About}/>
		<Route path="/"   component= {Footer}/>
		</Router>
    	);
	}
}

export default App;

