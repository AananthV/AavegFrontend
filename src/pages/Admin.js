import React, { Component } from 'react'
import { InnerPage, Title, Text } from '../components/InnerPage'
import { Nav } from 'react-bootstrap'

const styles = {
    nav: {
        fontFamily: "Comfortaa-Regular",
        textTransform: "Uppercase",
        color: "white",
        padding:0
      },
    a:{
        color:"White",
        padding:0,
        "&:hover": {
            color: "black"
          },
    }
}

class Admin extends Component {
  render () {
    return (
      <InnerPage>
        <Title>Admin</Title>
        <Text>
        <Nav variant='dark' className="flex-column" style={styles.nav} >
            <Nav.Link  href='events'>Create/Edit Events</Nav.Link>
            <Nav.Link  href='scoreboard'>Add/Edit Scores</Nav.Link>
        </Nav>
        </Text>
      </InnerPage>
    )
  }
}

export default Admin
