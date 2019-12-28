import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import LoginForm from './LoginForm'

const styles = {
  // this will make sure the login button doesnot look weird in mobile nav
  button: {
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
      <Button variant='dark' style={styles.button} onClick={this.handleShow.bind(this)}>
                    Login
      </Button>
      <Modal centered show={this.state.show} onHide={this.handleClose.bind(this)}>
        <Modal.Header className='red-bg' closeButton>
                      Login
        </Modal.Header>
        <Modal.Body className='dark-bg'><LoginForm close={this.handleClose.bind(this)} /></Modal.Body>
      </Modal>
           </span>
  }
}
export default Login
