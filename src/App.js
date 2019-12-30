import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './pages/About'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import FourOhFour from './pages/404'
import Scoreboard from './pages/Scoreboard'
import './css/main.css'

class App extends Component {
  render () {
    return (
      <Router>
        <Route path='/' component={NavBar} />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/events/:event_id' component={EventDetails} />
          <Route exact path='/scoreboard' component={Scoreboard} />
          <Route component={FourOhFour} />
        </Switch>
      </Router>
    )
  }
}

export default App
