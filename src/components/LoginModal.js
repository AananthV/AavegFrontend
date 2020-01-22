import React, { Component } from 'react'
import { Modal, Nav, Button } from 'react-bootstrap'
import LoginForm from './LoginForm'

const styles = {
  // this will make sure the login button doesnot look weird in mobile nav
  button: {
    opacity: '0.5',
    paddingLeft: 0,
    paddingRight: 0
  }
}

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }

  handleClose () {
    this.setState({ show: false })
  }

  handleShow () {
    this.setState({ show: true })
  }

  render () {
    return <span>
      <Nav.Link onClick={this.handleShow.bind(this)}>
                    Login
      </Nav.Link>
      <Modal centered show={this.state.show} onHide={this.handleClose.bind(this)}>
        <Modal.Header style={{ fontSize: '28px', border: 'none' }} className={localStorage.getItem('hostel') + '-bg'} closeButton>
                      Login
        </Modal.Header>
        <Modal.Body className='dark-bg'><LoginForm close={this.handleClose.bind(this)} /></Modal.Body>
      </Modal>
           </span>
  }
}
export default Login
