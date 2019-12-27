import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';   

class LoginForm extends Component {  
	render(){
		return <div>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Username" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
		</div>
		
	}
}  
export default LoginForm;  