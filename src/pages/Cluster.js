import React, { Component } from 'react'
import axios from 'axios';
import { Row, Col } from 'react-bootstrap'
import { InnerPage, Title } from '../components/InnerPage'

class Cluster extends Component {
  constructor(props,context){
      super(props,context);
      this.cluster = this.props.match.params.cluster
  }

  componentDidMount() {
    this.getEventsInCluster()
  }

  async getEventsInCluster() {
    axios.get(
      process.env.REACT_APP_API_BASE_URL + 'api/events/cluster/' + this.cluster
    ).then(res => {
        console.log(res.data)
    })
  }

  render() {
    return (
      <InnerPage>
        <Title>{ this.cluster }</Title>
      </InnerPage>
    )
  }
}

export default Cluster;
