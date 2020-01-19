import React, { Component } from 'react'
import Countdown from 'react-countdown';
import { Row, Col } from 'react-bootstrap'

import '../css/home.css'

const styles = {

}

class TextBox extends Component {
  render () {
    return (
      <span className="countdown-textbox">
        {this.props.children}
      </span>
    )
  }
}

class DateTimeBox extends Component {
  render () {
    const v1 = Math.floor(this.props.value / 10);
    const v2 = this.props.value % 10;
    return (
      <span className="d-flex flex-column align-items-end m-0 datetime-box">
        <span>
          <TextBox>{v1}</TextBox>
          <TextBox>{v2}</TextBox>
        </span>
        <span className="datetime-text">
          {this.props.unit}
        </span>
      </span>
    )
  }
}

class DateTimeContainer extends Component {
  render () {
    return (
      <Row>
        <Col xs={6} md={3} className="d-flex justify-content-center align-items-center">
          <DateTimeBox value={this.props.days} unit="Days"/>
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center align-items-center">
          <DateTimeBox value={this.props.hours} unit="Hours"/>
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center align-items-center">
          <DateTimeBox value={this.props.minutes} unit="Minutes"/>
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center align-items-center">
          <DateTimeBox value={this.props.seconds} unit="Seconds"/>
        </Col>
      </Row>
    )
  }
}

const DTGRenderer = ({days, hours, minutes, seconds}) => (
  <DateTimeContainer
    days={days}
    hours={hours}
    minutes={minutes}
    seconds={seconds}
    />
)

class DTGContainer extends Component {
  render() {
    const startDate = Date.parse("2020-02-07T04:30:00+05:30");
    return (
      <span className="d-flex flex-column align-items-center justify-content-center">
        <Countdown
          date={startDate}
          renderer={DTGRenderer}
          />
        <span className="dtg-text">
          Days to go
        </span>
      </span>
    )
  }
}

class Home extends Component {
  render () {
    return (
      <span className="dtg-main">
        <DTGContainer/>
      </span>
    )
  }
}

export default Home
