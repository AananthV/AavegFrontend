import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/main.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import FourOhFour from './pages/404'

class App extends Component {
  render () {
    return (
      <Router>
        <Route path='/' component={NavBar} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={FourOhFour} />
        </Switch>
      </Router>
    )
  }
}

export default App
