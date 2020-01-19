import React, { Component } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'

import ContactModal from './ContactModal'

const styles = {
  // this will make sure the login button doesnot look weird in mobile nav
  button: {
    paddingLeft: 0,
    paddingRight: 0
  },
  nav: {
    fontFamily: "Comfortaa-Regular",
    textTransform: "Uppercase",
    color: "white",
    backgroundColor: "#000000aa"
  }
}

class NavBar extends Component {
  render () {
    return <div>
      <Navbar collapseOnSelect expand='lg' variant='dark' sticky='top' style={styles.nav}>
        <Navbar.Brand href={process.env.REACT_APP_FRONT_BASE_URL}>
          <img
            alt=''
            src='/images/logo_white.png'
            height='30'
            className='d-inline-block align-top'
          />{' '}
        </Navbar.Brand>
        <Nav className="ml-auto">
          <ContactModal/>
        </Nav>
      </Navbar>
           </div>
  }
}
export default NavBar
