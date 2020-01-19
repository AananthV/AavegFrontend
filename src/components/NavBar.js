import React, { Component } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import Login from './LoginModal'
import ChooseHostel from './ChooseHostel'

const styles = {
  // this will make sure the login button doesnot look weird in mobile nav
  button: {
    paddingLeft: 0,
    paddingRight: 0
  }
}

class NavBar extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount () {
    if (sessionStorage.getItem('user_id') && !this.state.isLoggedIn) {
      this.setState({ isLoggedIn: true })
    }
  }

  componentDidUpdate () {
    if (sessionStorage.getItem('user_id') && !this.state.isLoggedIn) {
      this.setState({ isLoggedIn: true })
    }
  }

  logout () {
    sessionStorage.clear()
    this.setState({ isLoggedIn: false })
  }

  render () {
    var isLoggedIn = this.state.isLoggedIn
    return <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' sticky='top'>
        <Navbar.Brand href={process.env.REACT_APP_FRONT_BASE_URL}>
          <img
            alt=''
            src='/images/glyph_white.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
				Aaveg
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href={process.env.REACT_APP_FRONT_BASE_URL + 'about'}>About</Nav.Link>
            <Nav.Link href={process.env.REACT_APP_FRONT_BASE_URL + 'events'}>Events</Nav.Link>
            <Nav.Link href={process.env.REACT_APP_FRONT_BASE_URL + 'scoreboard'}>Scoreboard</Nav.Link>
            <Nav.Link href='https://medium.com/aaveg-blog'>Blog</Nav.Link>
            <Nav.Link href={process.env.REACT_APP_FRONT_BASE_URL + 'sponsors'}>Sponsors</Nav.Link>
            <Nav>
              <ChooseHostel />
            </Nav>
          </Nav>
          <Nav>
            <Nav.Link href={process.env.REACT_APP_FRONT_BASE_URL + 'team'}>Team</Nav.Link>
          </Nav>
          <Nav>{isLoggedIn ? (
            <Button variant='dark' style={styles.button} onClick={this.logout.bind(this)}>Logout</Button>
          ) : (
            <Login />
          )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
           </div>
  }
}
export default NavBar
