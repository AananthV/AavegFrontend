import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import '../css/choooseHostel.css'

const styles = {
  button: {
    marginTop: '7px',
    opacity: '0.5',
    padding: 0
  },
  modal: {
    margin: 'auto',
    marginTop: '5%'
  },
  modalBody: {
    textAlign: 'center'
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
    console.log(e.target)
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
    return process.env.REACT_APP_FRONT_BASE_URL + 'images/hostels/' + img.item + '.jpg'
  }

  render () {
    const hostel = ['agate', 'azurite', 'bloodstone', 'cobalt', 'opal']
    return (
      <span>
        <Button variant='dark' onClick={this.handleShow.bind(this)} style={styles.button}>
                Choose Hostel
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose.bind(this)} style={styles.modal}>
          <Modal.Header style={{ fontSize: '28px', border: 'none' }} className={localStorage.getItem('hostel') + '-bg'} closeButton>
                    Choose Hostel
          </Modal.Header>
          <Modal.Body className='dark-bg' style={styles.modalBody}>
            <ul>
              {hostel.map((item, index) => {
                return (
                  <li>
                    <input
                      type='radio'
                      name='hostel'
                      checked={this.state.clicked === item}
                      id={item}
                      className={index}
                      onClick={this.check.bind(this)}
                    />
                    <label for={item}><img src={this.imgUrl({ item })} alt={item} /></label>
                  </li>
                )
              })}
            </ul>
            <Button variant='info' onClick={this.handleClick.bind(this)}>Submit</Button>
          </Modal.Body>
        </Modal>
      </span>
    )
  }
}
export default ChooseHostel
