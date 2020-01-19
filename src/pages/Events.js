import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import { Row, Col, ListGroup, Spinner } from 'react-bootstrap'
import { InnerPage, Title } from '../components/InnerPage'
import HoverImage from '../components/HoverImage'

const styles = {
  colPadding: {
    padding: '15px'
  },
  rowCenterAlign: {
    display: 'flex',
    justifyContent: 'center'
  },
  columnCenterAlign: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '15px'
  },
  textCenter: {
    textAlign: 'center'
  }
}

class ClusterImage extends Component {
  render () {
    const imageUrl = process.env.REACT_APP_FRONT_BASE_URL + 'images/clusters/' + this.props.cluster + '.png'
    const title = this.props.title !== undefined ? this.props.title : this.props.cluster
    return (
      <Col xl={3} md={4} xs={6} style={styles.colPadding}>
        <HoverImage src={imageUrl} title={title} onClick={this.props.onClick} />
      </Col>
    )
  }
}

class ClusterList extends Component {
  render () {
    return (
      <Row style={styles.rowCenterAlign}>
        <ClusterImage cluster='Arts' onClick={this.props.showCluster.bind(this.props.parent, 'Arts')} />
        <ClusterImage cluster='Culturals' onClick={this.props.showCluster.bind(this.props.parent, 'Culturals')} />
        <ClusterImage cluster='Gaming' onClick={this.props.showCluster.bind(this.props.parent, 'Gaming')} />
        <ClusterImage cluster='Lits' onClick={this.props.showCluster.bind(this.props.parent, 'Lits')} />
        <ClusterImage cluster='Media' onClick={this.props.showCluster.bind(this.props.parent, 'Media')} />
        <ClusterImage cluster='Misc' onClick={this.props.showCluster.bind(this.props.parent, 'Misc')} />
        <ClusterImage cluster='Sports' onClick={this.props.showCluster.bind(this.props.parent, 'Sports')} />
      </Row>
    )
  }
}

class ClusterEvents extends Component {
  render () {
    return (
      <Fade>
        <Row style={styles.rowCenterAlign}>
          <ClusterImage cluster={this.props.cluster} title='Back' onClick={this.props.backFunction} />
          <Col xs={12} md style={styles.columnCenterAlign}>
            <ListGroup>
              {this.props.events.map((value, index) => {
                const event_link = process.env.REACT_APP_FRONT_BASE_URL + 'events/' + value._id
                return (
                  <ListGroup.Item action variant='dark' style={styles.textCenter} key={value._id} href={event_link}>
                    {value.name}
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
      </Fade>
    )
  }
}

class Events extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      cluster: undefined,
      events: []
    }
  }

  componentDidMount () {
    const cluster = this.props.match.params.cluster
    if (cluster !== undefined) {
      this.showCluster(cluster)
    }
  }

  getEventsInCluster () {
    axios.get(
      process.env.REACT_APP_API_BASE_URL + 'api/events/cluster/' + this.state.cluster
    ).then(res => {
      const events = []
      for (const event of res.data) {
        events.push(event.details[0])
      }
      this.setState({ events: events })
      console.log('lol3', res.data)
    })
  }

  showCluster (cluster) {
    this.setState({ cluster: cluster }, this.getEventsInCluster)
    window.scrollTo(0, 0)
  }

  goBack () {
    this.setState({ cluster: undefined, events: undefined })
  }

  getPageContent () {
    const isCluster = this.state.cluster !== undefined
    const isEventsLoaded = this.state.events !== undefined

    if (isCluster) {
      if (isEventsLoaded) {
        return (<ClusterEvents cluster={this.state.cluster} events={this.state.events} backFunction={this.goBack.bind(this)} />)
      } else {
        console.log('lol')
        return (
          <Row style={styles.rowCenterAlign}>
            <Spinner animation='border' role='status' />
          </Row>
        )
      }
    } else {
      return (<ClusterList showCluster={this.showCluster} parent={this} />)
    }
  }

  render () {
    return (
      <InnerPage>
        <Title>Events</Title>
        {this.getPageContent()}
      </InnerPage>
    )
  }
}

export default Events
