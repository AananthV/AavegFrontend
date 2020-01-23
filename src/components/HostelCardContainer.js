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
    let hostelCards = [];
    const currentHostel = localStorage.getItem('hostel')
    for (let i in this.props.hostels) {
      console.log(this.props.hostelIds[i], currentHostel);
      if (this.props.hostelIds[i] === currentHostel) {
        console.log(this.props.hostelIds[i]);
        hostelCards.unshift(<Col xs={6} sm={4} lg={3}>
          <HostelCard
            img={this.props.hostelIds[i]}
            overall={this.props.overallData[i]}
            spectrum={this.props.spectrumData[i]}
            sports={this.props.sportsData[i]}
            culturals={this.props.culturalsData[i]}
            hostels={this.props.hostels[i]}
          />
        </Col>)
      } else {
        hostelCards.push(<Col xs={6} sm={4} lg={2}>
          <HostelCard
            img={this.props.hostelIds[i]}
            overall={this.props.overallData[i]}
            spectrum={this.props.spectrumData[i]}
            sports={this.props.sportsData[i]}
            culturals={this.props.culturalsData[i]}
            hostels={this.props.hostels[i]}
          />
        </Col>)
      }
    }
    return (
      <Row style={styles.rowCenterAlign} className='hostel'>
        {hostelCards.map(hc => hc)}
      </Row>
    )
  }
}

export default HostelCardContainer
