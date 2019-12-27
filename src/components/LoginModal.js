import React, { Component } from 'react'; 
import { Modal,Button } from 'react-bootstrap';  
import LoginForm from './LoginForm'

class Login extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
	}
	render(){
        return <div>
            <Button variant="dark" onClick={this.handleShow.bind(this)}>
                Login
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body><LoginForm/></Modal.Body>
        </Modal>
        </div>		
	}
}  
export default Login;  