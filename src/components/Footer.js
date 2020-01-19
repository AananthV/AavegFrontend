import React, { Component } from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import ContactModal from './ContactModal'

const styles = {
  icon: {
    fontSize: '30px',
    padding: '7px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    textDecoration: 'none',
    marginBottom: '10px',
    border: 'none',
    color: (localStorage.getItem('hostel') === 'opal' || localStorage.getItem('hostel') === 'cobalt') ? 'black' : '#f2e7e6'
  },
  col: {
    marginBottom: '5px'
  },
  delta: {
    textAlign: 'center',
    padding: '2px',
    backgroundColor: 'black'
  },
  darkCard: {
    backgroundColor: '#292b2c'
  }
}
class Footer extends Component {
  render () {
    return <Container>
      <Row>
        <Col sm={12} lg={6} style={styles.col}>
          <Card style={styles.darkCard}>
            <Card.Header as='h5'>The Team</Card.Header>
            <Card.Body>
              <Card.Text>
									A dynamic and diverse team comprised of over 90 people,
									with varied skill sets and expertise,
									who are constantly ideating, questioning and
									putting their most creative foot forward to give you the best possible experience
									and have this fest etched in your memories.<br />
									PS: You can see us everywhere during the fest.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6} style={styles.col}>
          <Card style={styles.darkCard}>
            <Card.Header as='h5'>Reach Us</Card.Header>
            <Card.Body>
              <Card.Text>
                <a href='https://www.instagram.com/aaveg.nitt/' style={styles.icon}>
                  <button style={styles.icon} className={localStorage.getItem('hostel') + '-bg fa fa-instagram'} />
                </a>
                <a href='https://www.facebook.com/aaveg.nitt' style={styles.icon}>
                  <button style={styles.icon} className={localStorage.getItem('hostel') + '-bg fa fa-facebook'} />
                </a>
                <a href='https://www.youtube.com/channel/UC6RY84pojMJ0HP6wHkFeW-A' style={styles.icon}>
                  <button style={styles.icon} className={localStorage.getItem('hostel') + '-bg fa fa-youtube'} />
                </a>
                <a href='https://medium.com/aaveg-blog' style={styles.icon}>
                  <button style={styles.icon} className={localStorage.getItem('hostel') + '-bg fa fa-medium'} />
                </a>
                <a href='https://be.net/aavegdesign' style={styles.icon}>
                  <button style={styles.icon} className={localStorage.getItem('hostel') + '-bg fa fa-behance'} />
                </a>
                <a href='https://linktr.ee/aaveg.nitt' style={styles.icon}>
                  <button style={styles.icon} className={localStorage.getItem('hostel') + '-bg fa fa-external-link'} />
                </a>
                <br />
                <ContactModal />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p style={styles.delta}>
					&copy; Aaveg 2020. Made with &hearts; by
        <a href='https://delta.nitt.edu'> <span style={{ color: 'green', textDecoration: 'none' }}>Delta Force</span></a> & Aaveg Design Team.
      </p>
           </Container>
  }
}
export default Footer
