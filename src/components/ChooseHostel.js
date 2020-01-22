import React, { Component } from 'react'
import { Modal, Nav, Button, Row, Col } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import '../css/choooseHostel.css'
const config = require('../config.js')

const styles = {
  button: {
    opacity: '0.5',
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: '8px'
  },
  modal: {
    margin: 'auto',
    marginTop: '5%'
  },
  modalBody: {
    textAlign: 'center'
  },
  rowCenterAlign: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}

class ChooseHostel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      clicked: localStorage.getItem('hostel'),
      key: localStorage.getItem('key')
    }
  }

  handleClick () {
    localStorage.setItem('hostel', this.state.clicked)
    localStorage.setItem('key', this.state.key)
    this.setState({ show: false })
    window.location.reload()
  }

  check (e) {
    this.setState({ clicked: e.target.id })
    this.setState({ key: e.target.className })
  }

  handleClose () {
    this.setState({ show: false })
  }

  handleShow () {
    this.setState({ show: true })
  }

  imgUrl (img) {
    return config.REACT_APP_FRONT_BASE_URL + 'images/hostels/' + img.item + '.jpg'
  }

  render () {
    const hostel = ['agate', 'azurite', 'bloodstone', 'cobalt', 'opal']
    const isHostelSet = localStorage.getItem('key') != null
    return (
      <span>
        <Nav.Link onClick={this.handleShow.bind(this)}>
          {isHostelSet ? (
            <img
              alt=''
              src={'/images/hostels/' + localStorage.getItem('hostel') + '.png'}
              height='30'
              className='d-inline-block align-top'
            />
          ) : (
            "Choose Hostel"
          )}
        </Nav.Link>
        <Modal show={this.state.show} onHide={this.handleClose.bind(this)} style={styles.modal}>
          <Modal.Header style={{ fontSize: '28px', border: 'none' }} className={localStorage.getItem('hostel') + '-bg'} closeButton>
                    Choose Hostel
          </Modal.Header>
          <Modal.Body className='dark-bg' style={styles.modalBody}>
            <Row style={styles.rowCenterAlign}>
              {hostel.map((item, index) => {
                return (
                  <Col xs={6} md={4}>
                    <input
                      type='radio'
                      name='hostel'
                      checked={this.state.clicked === item}
                      id={item}
                      className={index}
                      onClick={this.check.bind(this)}
                    />
                    <label for={item}><img src={this.imgUrl({ item })} alt={item} /></label>
                  </Col>
                )
              })}
            </Row>
            <Button variant='info' onClick={this.handleClick.bind(this)}>Submit</Button>
          </Modal.Body>
        </Modal>
      </span>
    )
  }
}
export default ChooseHostel
