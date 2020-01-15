import React, { Component } from 'react'
import {Image,Card} from 'react-bootstrap'

const styles = {
    img:{
        margin:"auto",
        width:"70%"
    },

}

class ProfileImage extends Component {
    constructor(props) {
        super(props);
        this.state = {hovered: false};
      }
  render () {
    return (
        <Card style={{
            color: "black",
            textAlign:"center",
            marginTop:"10px",
            backgroundColor: `${this.state.hovered ? 'red' : 'blue'}`,//background image change
            transition:"1s"
        }}
            onMouseOut={() => this.setState({hovered: false})}
            onMouseOver={() => this.setState({hovered: true})}
            >
            <Image
            src={this.props.src}
            alt={this.props.name}
            style={styles.img}
            
            />
            <Card.Body>
                <Card.Title 
                 style={{
                    visibility: `${this.state.hovered ? 'visible' : 'hidden'}`,
                    opacity: `${this.state.hovered ? '1' : '0'}`,
                    transition: "visibility 0s, opacity 1s linear",
                    fontSize:'30px',
                }}
                >{this.props.name}</Card.Title>
            </Card.Body>
        </Card>
    )
  }
}

export default ProfileImage
