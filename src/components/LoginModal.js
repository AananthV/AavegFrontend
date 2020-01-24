import React, { Component } from 'react'
import { Modal, Nav } from 'react-bootstrap'
import LoginForm from './LoginForm'

class LoginModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
  }

  handleClose () {
    this.props.checkHostel();
    this.setState({ show: false })
  }

  handleShow () {
    this.setState({ show: true })
  }

  render () {
    return <span>
      <Modal centered show={this.state.show} onHide={this.handleClose.bind(this)} backdrop="static" keyboard={false}>
        <Modal.Header style={{ fontSize: '28px', border: 'none' }} className={localStorage.getItem('hostel') + '-bg'}>
                      Login and Choose Hostel
        </Modal.Header>
        <Modal.Body className='dark-bg'><LoginForm close={this.handleClose.bind(this)} /></Modal.Body>
      </Modal>
    </span>
  }
}
export default LoginModal
