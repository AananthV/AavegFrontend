import React, { Component } from 'react'
import { Form, Button, Col, Row, Alert } from 'react-bootstrap'
import Select from 'react-select'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import DateTime from '../components/DateTime'
import { InnerPage, Title } from '../components/InnerPage'
const qs = require('querystring')
const config = require('../config.js')

const styles = {
  col: {
    marginTop: '20px',
    textAlign: 'center'
  },
  button: {
    width: '100%',
    padding: '8px',
    fontSize: '30px',
    marginTop: '20px'
  },
  alert: {
    marginTop: '20px'
  },
  blackText: {
    color: '#000000'
  }
}

function nth(n){return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}

class CreateEvent extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      startTime: new Date().toISOString(),
      name: '',
      cup: '',
      cluster: '',
      venue: '',
      rules: '',
      description: '',
      points: ['', '', ''],
      error: false,
      success: false,
      errors: [],
      numPoints: [1, 2, 3],
      cup_list: [],
      cluster_list: [],
      venue_list: [],
      eventOptions: [],
      events: []
    }
    this.eventChosen = false;
  }

  componentDidMount () {
    this.getEvents();
    axios.get(config.REACT_APP_API_BASE_URL + 'cups', {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      this.setState({ cup_list: res.data })
    })
    axios.get(config.REACT_APP_API_BASE_URL + 'clusters', {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      this.setState({ cluster_list: res.data })
    })
    axios.get(config.REACT_APP_API_BASE_URL + 'venue', {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      this.setState({ venue_list: res.data })
    })
  }

  getEvents () {
    axios.get(
      config.REACT_APP_API_BASE_URL + 'events/'
    ).then(res => {
      const events = []
      const eventOptions = []
      for (const cluster of res.data.eventsData) {
        const options = []
        for (const event of cluster.events) {
          event.startTime = event.startDateTime;
          events[event._id] = event
          options.push({
            value: event._id,
            label: event.name
          })
        }
        const clusterOption = { label: cluster._id, options: options }
        eventOptions.push(clusterOption)
      }
      this.setState({ events: events, eventOptions: eventOptions })
    })
  }

  handleEventSelect (e) {
    this.eventChosen = e.value;
    this.setState(this.state.events[e.value]);
  }

  handleStartTime (e, s) {
    this.setState({ startTime: s })
  }

  addField (e) {
    var numPoints = [...this.state.numPoints]
    if (numPoints.length > 0) {
      numPoints.push(numPoints[numPoints.length - 1] + 1)
    } else {
      numPoints.push(4)
    }
    this.setState({ numPoints: numPoints })
  }

  handleChange (e) {
    if (e.target.id === 'name') {
      this.setState({ name: e.target.value })
    } else if (e.target.id === 'cup') {
      this.setState({ cup: e.target.value })
    } else if (e.target.id === 'cluster') {
      this.setState({ cluster: e.target.value })
    } else if (e.target.id === 'venue') {
      this.setState({ venue: e.target.value })
    } else if (e.target.id === 'rules') {
      this.setState({ rules: e.target.value })
    } else if (e.target.id === 'description') {
      this.setState({ description: e.target.value })
    } else if (e.target.name === 'points') {
      var arr = [...this.state.points]
      arr[parseInt(e.target.id) - 1] = e.target.value
      this.setState({ points: arr })
    }
  }

  async handleSubmit (e) {
    e.preventDefault()
    const event = {
      name: this.state.name,
      cup: this.state.cup,
      cluster: this.state.cluster,
      venue: this.state.venue,
      rules: this.state.rules,
      description: this.state.description,
      startTime: this.state.startTime,
      points: this.state.points,
      APIToken: localStorage.getItem('APIToken') || 0

    }
    const url = this.eventChosen ? 'admin/events/edit/' + this.eventChosen : 'admin/events/create'
    axios.post(config.REACT_APP_API_BASE_URL + url, qs.stringify(event), {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      if (res.data.message === 'error') {
        this.setState({ errors: res.data.error })
        this.setState({ success: false })
        this.setState({ error: false })
      } else {
        this.setState({ success: true })
        this.setState({ errors: [] })
        this.setState({ error: false })
      }
    }).catch(err => {
      this.setState({ error: true })
      this.setState({ errors: [] })
      this.setState({ success: false })
    }
    )
  }

  render () {
    const error = this.state.error ? <Alert variant='danger' style={styles.alert}>Failed to create new event</Alert> : null
    const success = this.state.success ? <Alert variant='success' style={styles.alert}>Successfully created new event</Alert> : null
    return (
      <InnerPage>
        <Title>Create Event</Title>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Row>
            <Col xs={12}>
              <h2 className="mt-4">Select Event</h2>
            </Col>
            <Col
              xs={12}
              style={styles.blackText}
            >
              <Select
                name='eventId'
                options={this.state.eventOptions}
                onChange={this.handleEventSelect.bind(this)}
              />
          </Col>
          </Form.Row>
          <h2 className="mt-4">Event Details</h2>
          <Form.Group controlId='name'>
            <Form.Label>Event Name</Form.Label>
            <Form.Control placeholder='Event Name' onChange={this.handleChange.bind(this)} defaultValue={this.state.name} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Event Description</Form.Label>
            <TextField
              id='description'
              placeholder='Placeholder'
              multiline
              onChange={this.handleChange.bind(this)}
              defaultValue={this.state.description}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId='cup'>
              <Form.Label>Cup</Form.Label>
              <Form.Control as='select' onChange={this.handleChange.bind(this)} value={this.state.cup}>
                <option>Please select</option>
                {
                  (this.state.cup_list).map((item, index) => {
                    return <option>{item.name}</option>
                  })
                }
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId='cluster'>
              <Form.Label>Cluster</Form.Label>
              <Form.Control as='select' onChange={this.handleChange.bind(this)} value={this.state.cluster}>
                <option>Please select</option>
                {
                  (this.state.cluster_list).map((item, index) => {
                    return <option>{item.name}</option>
                  })
                }
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <div id='p'>
            <h2>Points</h2>
            {(this.state.numPoints).map((item, index) => {
              return (
                <Form.Group>
                  <Form.Label>{item + nth(item)} Place</Form.Label>
                  <Form.Control
                    name='points'
                    id={item}
                    type="number"
                    placeholder={'Points'}
                    key={item + 'place'}
                    onChange={this.handleChange.bind(this)}
                    defaultValue={this.state.points[index]}/>
                </Form.Group>
              )
            })}
            <Button variant='info' onClick={this.addField.bind(this)}>Add more points</Button>
          </div>
          <h2 className="mt-4">Additional Info</h2>
          <Form.Row>
            <Form.Group as={Col} controlId='venue'>
              <Form.Label>Venue</Form.Label>
              <Form.Control as='select' onChange={this.handleChange.bind(this)} value={this.state.venue}>
                {
                  (this.state.venue_list).map((item, index) => {
                    return <option>{item.name}</option>
                  })
                }
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId='rules'>
              <Form.Label>Rules</Form.Label>
              <Form.Control placeholder='Link to the rules doc' onChange={this.handleChange.bind(this)} defaultValue={this.state.rules}/>
            </Form.Group>
          </Form.Row>
          <Row>
            <Col className="mt-1" lg={8} md={12} sm={12} style={styles.col}>
              <DateTime value={this.state.startTime} onChangeProp={this.handleStartTime.bind(this)}/>
            </Col>
            <Col lg={4} md={12}>
              <Button variant='info' type='submit' style={styles.button}>
                                    Create / Edit
              </Button>
            </Col>
          </Row>
        </Form>
        {error}{success}
        {
          this.state.errors.map((error) => {
            return <Alert variant='danger' style={styles.alert}>{error}</Alert>
          })
        }
      </InnerPage>
    )
  }
}
export default CreateEvent
