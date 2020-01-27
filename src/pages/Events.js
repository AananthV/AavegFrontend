import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import { Row, Col, ListGroup, Spinner } from 'react-bootstrap'
import { InnerPage, Title } from '../components/InnerPage'
import HoverImage from '../components/HoverImage'
const config = require('../config.js')

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
    const imageUrl = config.REACT_APP_FRONT_BASE_URL + 'images/clusters/' + this.props.cluster + '.png'
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
        {this.props.clusters.map(cluster => {
          return <ClusterImage cluster={cluster} onClick={this.props.showCluster.bind(this.props.parent, cluster)} />
        })}
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
                const event_link = config.REACT_APP_FRONT_BASE_URL + 'events/' + value._id
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
      cluster_list: [],
      events: []
    }
  }

  componentDidMount () {
    const cluster = this.props.match.params.cluster
    if (cluster !== undefined) {
      this.showCluster(cluster)
    }
    axios.get(config.REACT_APP_API_BASE_URL + 'clusters', {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      let cluster_list = [];
      for (let cluster of res.data) {
        cluster_list.push(cluster.name)
      }
      this.setState({ cluster_list: cluster_list })
    })
  }

  getEventsInCluster () {
    axios.get(
      config.REACT_APP_API_BASE_URL + 'events/cluster/' + this.state.cluster
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
        return (<ClusterEvents clusters={this.state.cluster_list} cluster={this.state.cluster} events={this.state.events} backFunction={this.goBack.bind(this)} />)
      } else {
        console.log('lol')
        return (
          <Row style={styles.rowCenterAlign}>
            <Spinner animation='border' role='status' />
          </Row>
        )
      }
    } else {
      return (<ClusterList clusters={this.state.cluster_list} showCluster={this.showCluster} parent={this} />)
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
