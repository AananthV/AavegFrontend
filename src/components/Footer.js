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
    border: 'none'
  },
  col: {
    marginBottom: '5px'
  },
  delta: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100vw',
    textAlign: 'center',
    padding: '2px',
    margin: '0',
    backgroundColor: '#000000'
  },
  darkCard: {
    backgroundColor: '#292b2c',
    boxShadow: '0px 0px 5px black',
    height: "100%",
    border: 0
  },
  cardHeader: {
    boxShadow: '0px 2px black',
  }
}
class Footer extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }
  render () {
    const hostel = localStorage.getItem('hostel');
    return <Container>
      <Row>
        <Col className="d-none d-lg-flex p-0 pr-lg-2" sm={12} lg={6} style={styles.col}>
          <Card style={styles.darkCard}>
            <Card.Header style={styles.cardHeader} className={hostel + '-bg'} as='h5'>The Team</Card.Header>
            <Card.Body>
              <Card.Text>
									A dynamic and diverse team comprised of over 90 people,
									with varied skill sets and expertise,
									who are constantly ideating, questioning and
									putting their most creative foot forward to give you the best possible experience
									and have this fest etched in your memories.<br />
                PS: You can see <a href="/images/us.jpeg" target="_blank" style={{ textDecoration: 'none', color: '#f7f7f7cc' }}>us</a> everywhere during the fest.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0 pl-lg-2" sm={12} lg={6} style={styles.col}>
          <Card style={styles.darkCard}>
            <Card.Header style={styles.cardHeader} className={hostel + '-bg'} as='h5'>Reach Us</Card.Header>
            <Card.Body>
              <Card.Text>
                <a href='https://www.instagram.com/aaveg.nitt/' style={styles.icon}>
                  <button style={styles.icon} className={hostel + '-bg fa fa-instagram'} />
                </a>
                <a href='https://www.facebook.com/aaveg.nitt' style={styles.icon}>
                  <button style={styles.icon} className={hostel + '-bg fa fa-facebook'} />
                </a>
                <a href='https://www.youtube.com/channel/UC6RY84pojMJ0HP6wHkFeW-A' style={styles.icon}>
                  <button style={styles.icon} className={hostel + '-bg fa fa-youtube'} />
                </a>
                <a href='https://medium.com/aaveg-blog' style={styles.icon}>
                  <button style={styles.icon} className={hostel + '-bg fa fa-medium'} />
                </a>
                <a href='https://be.net/aavegdesign' style={styles.icon}>
                  <button style={styles.icon} className={hostel + '-bg fa fa-behance'} />
                </a>
                <a href='https://linktr.ee/aaveg.nitt' style={styles.icon}>
                  <button style={styles.icon} className={hostel + '-bg fa fa-external-link'} />
                </a>
                <br />
                <ContactModal />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p style={styles.delta}>
					Made with
          <a href='/images/salaam.jpg' target="_blank" onClick={this.playAudio} style={{ textDecoration: 'none' }}> &hearts; </a>
          by
        <a href='https://delta.nitt.edu'> <span style={{ color: 'green', textDecoration: 'none', fontWeight: 700 }}>Delta Force</span></a> & Aaveg Design Team.
      </p>
      <audio className="audio-element">
       <source src="/audio/salaam.mp3"></source>
     </audio>
           </Container>
  }
}
export default Footer
