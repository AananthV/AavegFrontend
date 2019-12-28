import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar'
import About from './pages/About'
import Events from './pages/Events'
import Cluster from './pages/Cluster'
import FourOhFour from './pages/404'
import './css/main.css';


class App extends Component {
	render() {
		return (
			<Router>
				<Route path="/"   component= {NavBar}/>
				<Switch>
					<Route exact path="/about"   component= {About}/>
					<Route exact path="/events"   component= {Events}/>
					<Route exact path="/events/:cluster"   component= {Events}/>
					<Route component= {FourOhFour}/>
				</Switch>
			</Router>
    );
	}
}

export default App;
