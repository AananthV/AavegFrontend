import React, { Component } from 'react'
import { Image, Card } from 'react-bootstrap'

const styles = {
  img: {
    margin: 'auto',
    width: '70%',
    opacity:0.9,
    marginTop:"20%",
    borderRadius:"50%",
  }

}

class ProfileImage extends Component {
  constructor (props) {
    super(props)
    this.state = { hovered: false }
  }

  render () {
    return (
      <Card
        style={{
          color: 'black',
          textAlign: 'center',
          marginTop: '10px',
          backgroundImage: `${!this.state.hovered ? `url(images/grass.jpeg)` : `url(images/blood.jpeg)`}`, // background image change
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transition: '1s',
          border:'none',
          borderRadius:"20px"
        }}
        onMouseOut={() => this.setState({ hovered: false })}
        onMouseOver={() => this.setState({ hovered: true })}
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
              transition: 'visibility 0s, opacity 1s linear',
              fontSize: '30px',
              color:"white"
            }}
          >{this.props.name}
          </Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default ProfileImage
