import React, { Component } from 'react'
import { Row, Col, Table, Spinner } from 'react-bootstrap'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'
import { InnerPage, Title, Text } from '../components/InnerPage'
const config = require('../config.js')

class ImageButton extends Component {
  render () {
    return (
      <div className='d-flex flex-column align-items-center'>
        <img src={this.props.src} style={{ height: '2em', marginTop: '20px', marginBottom: '4px' }} alt='img' />
        {this.props.children}
      </div>
    )
  }
}

class IconButton extends Component {
  render () {
    return (
      <div className='d-flex flex-column align-items-center'>
        <i className={this.props.icon} />
        {this.props.children}
      </div>
    )
  }
}

class ClusterCupDetails extends Component {
  render () {
    return (
      <Row className='justify-content-around'>
        <ImageButton src={'/images/cups/' + this.props.cup + '.png'}>{this.props.cup}</ImageButton>
        <ImageButton src={'/images/clusters/' + this.props.cluster + '.png'}>{this.props.cluster}</ImageButton>
      </Row>
    )
  }
}

class PointsTable extends Component {
  render () {
    return (
      <Table className='m-0' striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {this.props.points.map((value, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{value}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

class TimeVenueRules extends Component {
  render () {
    const date = this.props.date
    const time = this.props.time
    return (
      <Row className='justify-content-around pb-3 p-md-0'>
        <IconButton icon='fa fa-map-marker fa-2x'>{this.props.venue}</IconButton>
        <IconButton icon='fa fa-calendar fa-2x'>{date}</IconButton>
        <IconButton icon='fa fa-clock-o fa-2x'>{time}</IconButton>
        <a style={{ color: '#f7f7f7cc' }} href={this.props.rules}>
          <IconButton icon='fa fa-book fa-2x'>Rules</IconButton>
        </a>
      </Row>
    )
  }
}

class EventDetails extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      loaded: false,
      event: undefined
    }
  }

  componentDidMount () {
    const event_id = this.props.match.params.event_id
    if (event_id !== undefined) {
      this.getEventDetails(event_id)
    }
  }

  getEventDetails (event_id) {
    axios.get(
      config.REACT_APP_API_BASE_URL + 'events/' + event_id
    ).then(res => {
      if (res.data.length > 0) {
        this.setState({ loaded: true, event: res.data[0].details[0] })
      }
    })
  }

  render () {
    if (this.state.loaded) {
      return (
        <InnerPage>
          <Title>{this.state.event.name}</Title>
          <ClusterCupDetails cluster={this.state.event.cluster} cup={this.state.event.cup} />
          <Text>{this.state.event.description}</Text>
          <Row className='p-3 flex-column-reverse flex-md-row'>
            <Col lg={4} md={6}>
              <PointsTable points={this.state.event.points} />
            </Col>
            <Col className='d-flex flex-column justify-content-center'>
              <TimeVenueRules
                venue={this.state.event.venue}
                date={this.state.event.date}
                time={this.state.event.startTime}
                rules={this.state.event.rules}
              />
            </Col>
          </Row>
        </InnerPage>
      )
    } else {
      return (
        <InnerPage>
          <Title>
            Loading...
            <Spinner animation='border' role='status' />
          </Title>
        </InnerPage>
      )
    }
  }
}

export default EventDetails
