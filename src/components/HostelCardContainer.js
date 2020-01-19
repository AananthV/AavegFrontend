import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import HostelCard from './HostelCard'

const styles = {
  rowCenterAlign: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}

class HostelCardContainer extends Component {
  render () {
    return (
      <Row style={styles.rowCenterAlign} className='hostel'>
        <Col xs={6} sm={4} lg={2}>
          <HostelCard
            img='agate'
            overall={this.props.overallData[0]}
            spectrum={this.props.spectrumData[0]}
            sports={this.props.sportsData[0]}
            culturals={this.props.culturalsData[0]}
            hostels={this.props.hostels[0]}
          />
        </Col>
        <Col xs={6} sm={4} lg={2}>
          <HostelCard
            img='azurite'
            overall={this.props.overallData[1]}
            spectrum={this.props.spectrumData[1]}
            sports={this.props.sportsData[1]}
            culturals={this.props.culturalsData[1]}
            hostels={this.props.hostels[1]}
          />
        </Col>
        <Col xs={6} sm={4} lg={2}>
          <HostelCard
            img='bloodstone'
            overall={this.props.overallData[2]}
            spectrum={this.props.spectrumData[2]}
            sports={this.props.sportsData[2]}
            culturals={this.props.culturalsData[2]}
            hostels={this.props.hostels[2]}
          />
        </Col>
        <Col xs={6} sm={4} lg={2}>
          <HostelCard
            img='cobalt'
            overall={this.props.overallData[3]}
            spectrum={this.props.spectrumData[3]}
            sports={this.props.sportsData[3]}
            culturals={this.props.culturalsData[3]}
            hostels={this.props.hostels[3]}
          />
        </Col>
        <Col xs={6} sm={4} lg={2}>
          <HostelCard
            img='opal'
            overall={this.props.overallData[4]}
            spectrum={this.props.spectrumData[4]}
            sports={this.props.sportsData[4]}
            culturals={this.props.culturalsData[4]}
            hostels={this.props.hostels[4]}
          />
        </Col>
      </Row>

    )
  }
}

export default HostelCardContainer
