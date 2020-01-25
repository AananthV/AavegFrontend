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
    let lg_order = 1, sm_order = 1;
    for (let i in this.props.hostels) {
      if (lg_order === 3) lg_order++;
      if (sm_order === 2) sm_order++;
      if (this.props.hostelIds[i] === currentHostel) {
        hostelCards.unshift(<Col xs={12} sm={{order: 2, span: 4}} lg={{order: 3, span: 3}}>
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
        hostelCards.push(<Col xs={6} sm={{order: sm_order, span: 4}} lg={{order: lg_order, span: 2}}>
          <HostelCard
            img={this.props.hostelIds[i]}
            overall={this.props.overallData[i]}
            spectrum={this.props.spectrumData[i]}
            sports={this.props.sportsData[i]}
            culturals={this.props.culturalsData[i]}
            hostels={this.props.hostels[i]}
          />
        </Col>)
        lg_order++;
        sm_order++;
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
