import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Team from './components/Teams';
import Footer from './components/Footer'
import Header from './components/Header'

class App extends Component {
	render() {
		return (
		<Router>
		<Route path="/"   component= {Header}/>
		<Route path="/teams"   component= {Team}/>
		<Route path="/"   component= {Footer}/>
		</Router>
    	);
	}
}

export default App;

