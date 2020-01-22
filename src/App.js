import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './pages/About'
import Events from './pages/Events'
import Team from './pages/Team'
import EventDetails from './pages/EventDetails'
import Scoreboard from './pages/Scoreboard'
import CreateEvent from './admin/CreateEvent'
import AddScore from './admin/Scoreboard'
import Home from './pages/Home'
import FourOhFour from './pages/404'
import './css/main.css'

class App extends Component {
  render () {
    return (
      <Router>
        <Route path='/' component={NavBar} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/events/:event_id' component={EventDetails} />
          <Route exact path='/scoreboard' component={Scoreboard} />
          <Route exact path='/admin/scoreboard' component={AddScore} />
          <Route exact path='/admin/create_event' component={CreateEvent} />
          <Route component={FourOhFour} />
        </Switch>
      </Router>
    )
  }
}

export default App
