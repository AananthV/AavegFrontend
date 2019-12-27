import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

class LoginForm extends Component {
	render(){
		return <div>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Roll Number</Form.Label>
                    <Form.Control type="number" placeholder="Roll Number" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Webmail Password</Form.Label>
                    <Form.Control type="password" placeholder="Webmail Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
		</div>

	}
}
export default LoginForm;
