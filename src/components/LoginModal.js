import React, { Component } from 'react';
import { Modal,Button } from 'react-bootstrap';
import LoginForm from './LoginForm'

const styles = {
    button: {
        paddingLeft: 0,
        paddingRight: 0
    },
    modal: {
        margin:'auto',
        marginTop:'15%'
    }
};

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
        return <span>
                <Button variant="dark" onClick={this.handleShow.bind(this)} style={styles.button}>
                    Login
                </Button>
                <Modal centered show={this.state.show} onHide={this.handleClose.bind(this)}>
                  <Modal.Body><LoginForm/></Modal.Body>
                </Modal>
              </span>
	}
}
export default Login;
