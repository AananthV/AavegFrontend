import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
const qs = require('querystring')

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            rollno:0,
            password:""
        }
    }
    handleChange(e){
        if(e.target.type === "number"){
            this.setState({rollno:e.target.value})
        }
        else if(e.target.type === "password"){
            this.setState({password:e.target.value})
        }
    }

    async handleSubmit(e){
        e.preventDefault();
        const user = {
            rollnumber: this.state.rollno,
            password: this.state.password
          };
          axios.post(process.env.REACT_APP_API_BASE_URL+'api/studentLogin', qs.stringify(user),{
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }})
            .then(res => {
                console.log(res.data)
                sessionStorage.setItem('user_id', res.data.user_id);
                sessionStorage.setItem('APIToken', res.data.APIToken);
            })
    }

	render(){
		return <div>
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Roll Number</Form.Label>
                    <Form.Control type="number" placeholder="Roll Number" onChange={this.handleChange.bind(this)} />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Webmail Password</Form.Label>
                    <Form.Control type="password" placeholder="Webmail Password" onChange={this.handleChange.bind(this)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
		</div>

	}
}
export default LoginForm;
