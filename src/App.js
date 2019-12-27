import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  
import NavBar from './components/NavBar'


class App extends Component {
	render() {
		return (
		<Router>
		<Route path="/home"   component= {NavBar}/>
		</Router>
    	);
	}
}

export default App;

