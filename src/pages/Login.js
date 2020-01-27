import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import LoginModal from '../components/LoginModal'
import '../css/login.css'
import axios from 'axios'
const config = require('../config.js')
const qs = require('querystring')

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class HostelContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      active: false,
      inactive: false
    }
    document.querySelector('body').style = "overflow: hidden";
  }
  render () {
    return (
      <div class={
        'hostel-container ' +
        this.props.hostel + '-bg' +
        (this.state.active ? ' active' : '') +
        (this.state.inactive ? ' inactive' : '')
      }>
        <img
          src={config.REACT_APP_FRONT_BASE_URL + 'images/hostels/' + this.props.hostel + '.png'}
          onClick={e => this.props.onClick(this.props.hostel)}
          alt={this.props.hostel}/>
        <Button
          variant="dark"
          className={(this.state.active ? '' : ' d-none')}
          href={config.REACT_APP_FRONT_BASE_URL}>
          Home
        </Button>
      </div>
    )
  }
}

class Login extends Component {
  constructor (props) {
    super(props);
    this.hostels = ['agate', 'azurite', 'bloodstone', 'cobalt', 'opal']
    this.hostelRefs = {};
    for (let hostel of this.hostels) {
      this.hostelRefs[hostel] = React.createRef();
    }
    this.hostelChosen = false;
    this.isLoggedIn = localStorage.getItem('user_id') != null
  }

  chooseHostel (h) {
    for (let [hostel, ref] of Object.entries(this.hostelRefs)) {
      if (hostel === h) {
        ref.current.setState({ active: true });
      } else {
        ref.current.setState({ inactive: true });
      }
    }

    const user = {
      APIToken: localStorage.getItem('APIToken'),
      hostel: capitalizeFirstLetter(h)
    }
    axios.put(config.REACT_APP_API_BASE_URL + 'user/hostel', qs.stringify(user), {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      console.log('Hostel set in DB')
    })

    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(/images/bg_' + h + '.jpg)';

    localStorage.setItem('hostel', h)

    this.hostelChosen = true;
  }

  componentDidMount () {
    if (this.hostelChosen === false && localStorage.getItem('hostel') != null) {
      this.chooseHostel(localStorage.getItem('hostel'));
    }
  }

  checkHostel () {
    const user = {
      APIToken: localStorage.getItem('APIToken')
    }
    axios.post(config.REACT_APP_API_BASE_URL + 'user/hostel', qs.stringify(user), {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      if (res.data.hostel_chosen) {
        this.chooseHostel(res.data.hostel.toLowerCase());
      }
    })
  }

  render () {
    return (
      <div>
        <div class="hostel-div">
          {this.hostels.map(hostel => <HostelContainer
            hostel={hostel}
            onClick={this.chooseHostel.bind(this)}
            key={hostel}
            ref={this.hostelRefs[hostel]}/>)}
        </div>
        {this.isLoggedIn ? '' : <LoginModal checkHostel={this.checkHostel.bind(this)}/>}
      </div>
    )
  }
}

export default Login
