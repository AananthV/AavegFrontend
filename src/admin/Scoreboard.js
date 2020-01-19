import React, { Component } from 'react'
import { Form, Button, Col, Row, Alert } from 'react-bootstrap'
import Select from 'react-select'
import axios from 'axios'
import DateTime from '../components/DateTime'
import { InnerPage, Title } from '../components/InnerPage'
const qs = require('querystring')

const styles = {
  blackText: {
    color: '#000000'
  }
}

function nth (n) { return ['st', 'nd', 'rd'][((n + 90) % 100 - 10) % 10 - 1] || 'th' }

class AddScore extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      hostelOptions: [],
      events: [],
      eventOptions: [],
      positionInputs: {},
      positions: {},
      points: {},
      eventId: null,
      error: false,
      success: false
    }
    this.submitRef = React.createRef()
  }

  componentDidMount () {
    this.getEvents()
    this.getHostels()
  }

  getEvents () {
    axios.get(
      process.env.REACT_APP_API_BASE_URL + 'api/events/'
    ).then(res => {
      const events = []
      const eventOptions = []
      for (const cluster of res.data.eventsData) {
        const options = []
        for (const event of cluster.events) {
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

  getHostels () {
    axios.get(
      process.env.REACT_APP_API_BASE_URL + 'api/hostels/'
    ).then(res => {
      const hostelOptions = []
      for (const hostel of res.data) {
        hostelOptions.push({ value: hostel._id, label: hostel.name })
      }
      this.setState({ hostelOptions: hostelOptions })
    })
  }

  createHostelSelect (position, points, hostels) {
    return <Form.Row key={position}>
      <Col xs={12}>
        <h3>{position + nth(position)}</h3>
      </Col>
      <Col xs={8} style={styles.blackText}>
        <Select
          defaultValue={hostels}
          isMulti
          name={'position' + position}
          options={this.state.hostelOptions}
          className='basic-multi-select'
          classNamePrefix='select'
          onChange={this.handleHostelSelect.bind(this, position)}
        />
      </Col>
      <Col xs={4}>
        <Form.Control
          name={'points' + position}
          type='number'
          placeholder='Points'
          defaultValue={points}
          onChange={this.handlePointsChange.bind(this, position)}
        />
      </Col>
           </Form.Row>
  }

  handleEventSelect (e) {
    axios.get(
      process.env.REACT_APP_API_BASE_URL + 'api/scoreboard/event/' + e.value
    ).then(res => {
      const positionInputs = {}
      const positions = {}
      const points = {}
      for (const [position, positionData] of Object.entries(res.data)) {
        positionInputs[position] = this.createHostelSelect(
          parseInt(position),
          positionData.points,
          positionData.hostels.map(x => ({ value: x._id, label: x.name }))
        )
        positions[position] = positionData.hostels
        points[position] = positionData.points
      }
      for (const p in this.state.events[e.value].points) {
        const _p = parseInt(p) + 1
        if (positionInputs[_p] == undefined) {
          positionInputs[_p] = this.createHostelSelect(
            _p,
            this.state.events[e.value].points[p],
            []
          )
          points[_p] = this.state.events[e.value].points[p]
        }
      }
      this.submitRef.current.classList.remove('d-none')
      this.submitRef.current.classList.add('d-flex')
      this.setState({ eventId: e.value, positionInputs: positionInputs, positions: positions, points: points })
    })
  }

  handleHostelSelect (position, hostel) {
    const currentPositions = this.state.positions
    currentPositions[position] = hostel.map(hostel => hostel.value)
    this.setState({ positions: currentPositions })
  }

  handlePointsChange (position, e) {
    const currentPoints = this.state.points
    currentPoints[position] = e.target.value
    this.setState({ points: currentPoints })
  }

  addPositionBlock () {
    const positionInputs = this.state.positionInputs
    const pos = Object.keys(positionInputs).length + 1
    positionInputs[pos] = this.createHostelSelect(
      pos,
      '',
      []
    )
    this.setState({ positionInputs: positionInputs })
  }

  handleSubmit () {
    const scoreData = {
      eventId: this.state.eventId,
      scoreData: JSON.stringify({ positions: this.state.positions, points: this.state.points }),
      APIToken: sessionStorage.getItem('APIToken') || 0
    }
    axios.post(process.env.REACT_APP_API_BASE_URL + 'api/admin/scoreboard', qs.stringify(scoreData), {
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
    return <InnerPage>
      <Title>Add Score</Title>
      <Form>
        <Form.Row>
          <Col xs={12}>
            <h3>Select Event</h3>
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
        {Object.keys(this.state.positionInputs).map((position) => {
          return this.state.positionInputs[position]
        })}
        <Form.Row ref={this.submitRef} className='d-none flex-column align-items-center'>
          <Button className='m-2' variant='secondary' onClick={this.addPositionBlock.bind(this)}>Add Position</Button>
          <Button className='m-2' variant='success' onClick={this.handleSubmit.bind(this)}>Save Score</Button>
        </Form.Row>
      </Form>
      {error}
      {success}
           </InnerPage>
  }
}
export default AddScore
