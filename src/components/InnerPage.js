import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import '../css/inner_page.css'

class InnerPage extends Component {
  render () {
    return (
      <div>
        <Container id='inner-container'>
          {this.props.children}
        </Container>
        <Footer />
      </div>
    )
  }
}

class Title extends Component {
  render () {
    return (
      <div id='inner-title' className='red-bg'>
        {this.props.children}
      </div>
    )
  }
}

class Text extends Component {
  render () {
    return (
      <div id='inner-text'>
        {this.props.children}
      </div>
    )
  }
}

export { InnerPage, Title, Text }
