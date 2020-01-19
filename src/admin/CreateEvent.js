import React, { Component } from 'react'
import { Form, Button, Col, Row, Alert } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import DateTime from '../components/DateTime'
import { InnerPage, Title } from '../components/InnerPage'
const qs = require('querystring')

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
  }
}

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
      points: [],
      error: false,
      success: false,
      errors: [],
      numPoints: [],
      cup_list: [],
      cluster_list: [],
      venue_list: []
    }
  }

  async componentDidMount () {
    axios.get(process.env.REACT_APP_API_BASE_URL + 'api/cups', {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      this.setState({ cup_list: res.data })
    })
    axios.get(process.env.REACT_APP_API_BASE_URL + 'api/clusters', {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      this.setState({ cluster_list: res.data })
    })
    axios.get(process.env.REACT_APP_API_BASE_URL + 'api/venue', {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      this.setState({ venue_list: res.data })
    })
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
      APIToken: sessionStorage.getItem('APIToken') || 0

    }
    axios.post(process.env.REACT_APP_API_BASE_URL + 'api/admin/events/create', qs.stringify(event), {
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
          <Form.Group controlId='name'>
            <Form.Label>Event Name</Form.Label>
            <Form.Control placeholder='Event Name' onChange={this.handleChange.bind(this)} />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId='cup'>
              <Form.Label>Cup</Form.Label>
              <Form.Control as='select' onChange={this.handleChange.bind(this)}>
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
              <Form.Control as='select' onChange={this.handleChange.bind(this)}>
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
            <Button variant='info' onClick={this.addField.bind(this)}>Add more points</Button>
            <Form.Group>
              <Form.Label>1st place</Form.Label>
              <Form.Control name='points' id='1' placeholder='1st Place' onChange={this.handleChange.bind(this)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>2nd place</Form.Label>
              <Form.Control name='points' id='2' placeholder='2nd Place' onChange={this.handleChange.bind(this)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>3rd place</Form.Label>
              <Form.Control name='points' id='3' placeholder='3rd Place' onChange={this.handleChange.bind(this)} />
            </Form.Group>
            {(this.state.numPoints).map((item, index) => {
              return (
                <Form.Group>
                  <Form.Label>{item} Place</Form.Label>
                  <Form.Control name='points' id={item} placeholder={item + 'th Place'} onChange={this.handleChange.bind(this)} />
                </Form.Group>
              )
            })}
          </div>
          <Form.Row>
            <Form.Group as={Col} controlId='venue'>
              <Form.Label>Venue</Form.Label>
              <Form.Control as='select' onChange={this.handleChange.bind(this)}>
                <option>Please select</option>
                <option>Orion</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId='rules'>
              <Form.Label>Rules</Form.Label>
              <Form.Control placeholder='Link to the rules doc' onChange={this.handleChange.bind(this)} />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label>Event Description</Form.Label>
            <TextField
              id='description'
              placeholder='Placeholder'
              multiline
              onChange={this.handleChange.bind(this)}
            />
          </Form.Group>
          <Row>
            <Col lg={8} md={12} sm={12} style={styles.col}>
              <DateTime value={this.state.startTime} onChangeProp={this.handleStartTime.bind(this)} />
            </Col>
            <Col lg={4} md={12}>
              <Button variant='info' type='submit' style={styles.button}>
                                    Create
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
