import React, { Component } from 'react'; 
import {Container, Button} from 'react-bootstrap';  
import { Col, Row, Card} from 'react-bootstrap';  
import 'font-awesome/css/font-awesome.min.css';
import ContactModal from './ContactModal'

const  styles = {
    container:{
        color:"black",
        position:"fixed",
        left:0,
        bottom:0,
        right:0,
    },
    icon:{
        fontSize:"30px",
        padding:"7px",
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        textDecoration:"none",
        margin:"5px"
    },
    col:{
        marginBottom:"5px"
    },
    delta:{
        textAlign:"center",
        padding:"2px"
    }
}
class Footer extends Component {  
	render(){
        return <Container style={styles.container}>
                <Row>
                <Col sm={12} lg={6} style={styles.col}>
                    <Card>
                        <Card.Header as="h5">The Team</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                A dynamic and diverse team comprised of over 90 people,
                                with varied skill sets and expertise,
                                who are constantly ideating, questioning and 
                                putting their most creative foot forward to give you the best possible experience 
                                and have this fest etched in your memories.<br/>
                                PS: You can see us everywhere during the fest.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>                   
                    <Col sm={12} lg={6}>
                    <Card>
                        <Card.Header as="h5">Reach Us</Card.Header>
                        <Card.Body>
                            <Card.Text> 
                            <Button style={styles.icon} href="https://www.instagram.com/aaveg.nitt/" className="fa fa-instagram"></Button>
                            <Button style={styles.icon} href="https://www.facebook.com/aaveg.nitt" className="fa fa-facebook"></Button>
                            <Button style={styles.icon} href="https://aaveg.net/youtube" className="fa fa-youtube"></Button>
                            <Button style={styles.icon} href="https://medium.com/aaveg-blog" className="fa fa-medium"></Button>
                            <Button style={styles.icon} href="https://be.net/aavegdesign" className="fa fa-behance"></Button>
                            <Button style={styles.icon} href="https://linktr.ee/aaveg.nitt" className="fa fa-external-link" ></Button>  
                            <br/>
                            <ContactModal />      
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                        <p class="copyright " style={styles.delta}>
                        &copy; Aaveg 2020. Made with &hearts; by 
                        <a href="https://delta.nitt.edu"> Delta Force</a> & Aaveg Design Team.
                        </p>
                </Container>       
	}
}  
export default Footer;  