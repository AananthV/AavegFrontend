import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
const config = require('../config.js')

const styles = {
  // this will make sure the login button doesnot look weird in mobile nav
  button: {
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 0
  },
  nav: {
    fontFamily: "Comfortaa-Regular",
    textTransform: "Uppercase",
    color: "white",
    backgroundColor: "#000000aa"
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
    if (localStorage.getItem('user_id') && !this.state.isLoggedIn) {
      this.setState({ isLoggedIn: true })
    }
  }

  componentDidUpdate () {
    if (localStorage.getItem('user_id') && !this.state.isLoggedIn) {
      this.setState({ isLoggedIn: true })
    }
  }

  logout () {
    localStorage.clear()
    this.setState({ isLoggedIn: false })
  }

  render () {
    var isLoggedIn = this.state.isLoggedIn
    return <div>
      <Navbar collapseOnSelect expand='lg' variant='dark' sticky='top' style={styles.nav}>
        <Navbar.Brand href={config.REACT_APP_FRONT_BASE_URL}>
          <img
            alt=''
            src='/images/logo_white.png'
            height='30'
            className='d-inline-block align-top'
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto' activeKey={this.props.location.pathname}>
            <Nav.Link href={'/about'}>About</Nav.Link>
            <Nav.Link href={'/events'}>Events</Nav.Link>
            <Nav.Link href={'/scoreboard'}>Scoreboard</Nav.Link>
            <Nav.Link href='https://medium.com/aaveg-blog'>Blog</Nav.Link>
            <Nav.Link href={'/sponsors'}>Sponsors</Nav.Link>
            <Nav.Link href={'/team'}>Team</Nav.Link>
          </Nav>
          {isLoggedIn ? (
            <Nav>
              <img
                alt=''
                src={'/images/hostels/' + localStorage.getItem('hostel') + '.png'}
                height='40'
                width='40'
                className='d-none d-lg-inline-block align-top'
              />
              <Nav.Link onClick={this.logout.bind(this)}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav><Nav.Link href={config.REACT_APP_FRONT_BASE_URL + 'login'}>Login</Nav.Link></Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
           </div>
  }
}
export default NavBar
