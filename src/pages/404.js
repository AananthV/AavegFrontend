import React, { Component } from 'react'
import { InnerPage, Title, Text } from '../components/InnerPage'

class About extends Component {
  render () {
    console.log(this.props.location)
    return (
      <InnerPage>
        <Title>404</Title>
        <Text>
          We couldn't find that page
        </Text>
      </InnerPage>
    )
  }
}

export default About
