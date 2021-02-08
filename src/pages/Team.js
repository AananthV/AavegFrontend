import React, { Component } from 'react'
import { InnerPage, Title } from '../components/InnerPage'
import oc_data from '../team/oc'
import content_data from '../team/content'
import design_data from '../team/design'
import webOps_data from '../team/webops'
import { Row, Col, Container } from 'react-bootstrap'
import ProfileImage from './../components/Image'
const config = require('../config.js')

const styles = {
  cont: {
    marginTop: '20px'
  }
}

class Team extends Component {
  render () {
    return (
      <InnerPage>
        <Title>Team</Title>
        <Container style={styles.cont}>
          <Title>OC</Title>
          <Row>
            {oc_data.map(item => {
              return (
                <Col md={4}>
                  <ProfileImage
                    name={item.name}
                    src={config.REACT_APP_FRONT_BASE_URL + 'images/team/' + item.img + '.jpg'}
                  /> {/* replace 1 with item.id */}
                </Col>
              )
            })}
          </Row>
        </Container>
        <Container style={styles.cont}>
          <Title>Content</Title>
          <Row>
            {content_data.map(item => {
              return (
                <Col md={4}>
                  <ProfileImage
                    name={item.name}
                    src={config.REACT_APP_FRONT_BASE_URL + 'images/team/' + item.img + '.jpg'}
                  /> {/* replace 1 with item.id */}
                </Col>
              )
            })}
          </Row>
        </Container>
        <Container style={styles.cont}>
          <Title>Design</Title>
          <Row>
            {design_data.map(item => {
              return (
                <Col md={4}>
                  <ProfileImage
                    name={item.name}
                    src={config.REACT_APP_FRONT_BASE_URL + 'images/team/' + item.img + '.jpg'}
                  />
                </Col>
              )
            })}
          </Row>
        </Container>
        <Container style={styles.cont}>
          <Title>Web Ops</Title>
          <Row>
            {webOps_data.map(item => {
              return (
                <Col md={4}>
                  <ProfileImage
                    name={item.name}
                    src={config.REACT_APP_FRONT_BASE_URL + 'images/team/' + item.img + '.jpg'}
                  /> {/* replace 1 with item.id */}
                </Col>
              )
            })}
          </Row>
        </Container>
      </InnerPage>
    )
  }
}

export default Team
