import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './pages/About'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import Scoreboard from './pages/Scoreboard'
import Login from './pages/Login'
import CreateEvent from './admin/CreateEvent'
import AddScore from './admin/Scoreboard'
import Home from './pages/Home'
import FourOhFour from './pages/404'
import Admin from './pages/Admin'
import Sponsors from './pages/Sponsors'
import './css/main.css'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  render () {
    return (
      <Router basename={'/20'}>
        <Route path='/' component={NavBar} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/events/:event_id' component={EventDetails} />
          <Route exact path='/scoreboard' component={Scoreboard} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/sponsors' component={Sponsors}/>
          <ProtectedRoute exact path='/admin' component={Admin}/>
          <ProtectedRoute exact path='/admin/scoreboard' component={AddScore} />
          <ProtectedRoute exact path='/admin/events' component={CreateEvent} />
          <Route component={FourOhFour} />

        </Switch>

      </Router>
    )
  }
}

export default App
