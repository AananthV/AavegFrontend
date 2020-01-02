import React, { Component } from 'react'
import { Form, Button,Col,Row, Alert } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import DateTime from '../components/DateTime'
import { InnerPage, Title } from '../components/InnerPage'
const qs = require('querystring')

const styles = {
    col:{
        marginTop:"20px",
        textAlign:"center"
    },
    button:{
        width:"100%",
        padding:"8px",
        fontSize:"30px",
        marginTop:"20px"
    },
    alert:{
        marginTop:"20px"
    }
}

class CreateEvent extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            startTime:new Date().toISOString(),
            name:"",
            cup:"",
            cluster:"",
            venue:"",
            rules:"",
            description:"",
            points:[],
            error:false,
            success:false,
            errors:[]
        }
    }
    handleStartTime(e,s){
        let startTime = new Date(s)
        this.setState({startTime:s})
    }
    handleChange (e) {
        if(e.target.id==="name"){
            this.setState({name:e.target.value})
        }
        else if(e.target.id==="cup"){
            this.setState({cup:e.target.value})
        }
        else if(e.target.id==="cluster"){
            this.setState({cluster:e.target.value})
        }
        else if(e.target.id==="venue"){
            this.setState({venue:e.target.value})
        }
        else if(e.target.id==="rules"){
            this.setState({rules:e.target.value})
        }
        else if(e.target.id==="description"){
            this.setState({description:e.target.value})
        }
    }

    async handleSubmit (e) {
        e.preventDefault()
        const event = {
            name:this.state.name,
            cup:this.state.cup,
            cluster:this.state.cluster,
            venue:this.state.venue,
            rules:this.state.rules,
            description:this.state.description,
            startTime:this.state.startTime,
            points:this.state.points,
            APIToken:sessionStorage.getItem('APIToken') || 0

        }
        axios.post('http://localhost:4000/api/admin/events/create', qs.stringify(event), {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
        }).then(res => {
            if (res.data.message === 'error'){
                this.setState({errors:res.data.error})
                this.setState({success:false})
                this.setState({error:false})
            }
            else{
                this.setState({success:true})
                this.setState({errors:[]})
                this.setState({error:false})
            }
        }).catch( err => {
            this.setState({error:true})
            this.setState({errors:[]})
            this.setState({success:false})

        }
        )
    }

    render () {
        let error = this.state.error ? <Alert variant="danger" style={styles.alert}>Failed to create new event</Alert> : null
        let success = this.state.success ? <Alert variant="success" style={styles.alert}>Successfully created new event</Alert> : null
        return(
            <InnerPage>
                <Title>Create Event</Title>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Group controlId="name">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control placeholder="Event Name" onChange={this.handleChange.bind(this)}/>
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col} controlId="cup">
                        <Form.Label>Cup</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange.bind(this)}>
                            <option>Please select</option>
                            <option>Culturals</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="cluster">
                        <Form.Label>Cluster</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange.bind(this)}>
                            <option>Please select</option>
                            <option>Arts</option>
                        </Form.Control>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="venue">
                        <Form.Label>Venue</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange.bind(this)}>
                            <option>Please select</option>
                            <option>Orion</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="rules">
                        <Form.Label>Rules</Form.Label>
                        <Form.Control placeholder="Link to the rules doc" onChange={this.handleChange.bind(this)} />
                    </Form.Group>
                    </Form.Row>
                    <Form.Group >
                        <Form.Label>Event Description</Form.Label>
                        <TextField
                            id="description"
                            placeholder="Placeholder"
                            multiline
                            onChange={this.handleChange.bind(this)}
                        />
                    </Form.Group>
                        <Row>
                            <Col lg={8} md={12} sm={12} style={styles.col}>
                                <DateTime value={this.state.startTime} onChangeProp={this.handleStartTime.bind(this)}/>
                            </Col>
                            <Col lg={4} md={12}>
                                <Button variant="info" type="submit" style={styles.button}>
                                    Create
                                </Button>
                            </Col>
                        </Row>
                </Form>
                {error}{success}
                {
                    this.state.errors.map((error) =>{
                        return <Alert variant="danger" style={styles.alert}>{error}</Alert>
                    })
                }
            </InnerPage>
        )
    }
}
export default CreateEvent
