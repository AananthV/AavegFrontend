import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './components/NavBar'
import About from './components/About'

import './css/main.css';


class App extends Component {
	render() {
		return (
			<Router>
				<Route path="/"   component= {NavBar}/>
				<Route path="/about"   component= {About}/>
			</Router>
    );
	}
}

export default App;
