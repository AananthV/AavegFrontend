import React, { Component } from 'react'
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap'

const styles = {
    card:{
        color:"black",
        maxWidth:"200px",
        margin:"auto",
        marginTop:"10px",
        marginBottom:"10px",
        textAlign:"center"
    }
}

class HostelCard extends Component {
  render () {
    const imageUrl = process.env.REACT_APP_FRONT_BASE_URL + 'images/hostels/' + this.props.img + '.jpg'
    return (
        <Card  style = {styles.card}>
            <Card.Img variant="top" src={imageUrl}/>
            <Card.Body>
                <Card.Text>
                    {this.props.img.toUpperCase()}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
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