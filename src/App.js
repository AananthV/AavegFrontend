import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'


class App extends Component {
	render() {
		return (
		<Router>
		<Route path="/"   component= {NavBar}/>
		<Route path="/" component = {Footer} />
		</Router>
    	);
	}
}

export default App;
