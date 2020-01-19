import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem, OverlayTrigger, Tooltip } from 'react-bootstrap'

const styles = {
  card: {
    color: 'black',
    maxWidth: '300px',
    margin: 'auto',
    marginTop: '10px',
    marginBottom: '10px',
    textAlign: 'center'
  },
  toolTip: {
    fontSize: '20px'
  }
}

class HostelCard extends Component {
  render () {
    const imageUrl = process.env.REACT_APP_FRONT_BASE_URL + 'images/hostels/' + this.props.img + '.jpg'
    return (
      <Card style={styles.card}>
        <OverlayTrigger
          key='top'
          placement='top'
          overlay={
            <Tooltip id='tooltip-top' style={styles.toolTip}>
              {this.props.hostels}
            </Tooltip>
          }
        >
          <Card.Img variant='top' src={imageUrl} />
        </OverlayTrigger>

        <ListGroup className='list-group-flush'>
          <ListGroupItem>Overall: {this.props.overall}</ListGroupItem>
          <ListGroupItem>Spectrum: {this.props.spectrum}</ListGroupItem>
          <ListGroupItem>Sports: {this.props.sports}</ListGroupItem>
          <ListGroupItem>Culturals: {this.props.culturals}</ListGroupItem>
        </ListGroup>
      </Card>
    )
  }
}

export default HostelCard
