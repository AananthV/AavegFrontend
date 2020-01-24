import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import FourOhFour from '../pages/404'
import axios from 'axios'
const config = require('../config.js')
const qs = require('querystring')

const PRoute = ({ component: Component, authenticated,...rest })=>{
    return <Route render={(props) => (authenticated ? <Component {...props} /> :<FourOhFour/>)} {...rest} />;
}

class ProtectedRoute extends Component{
    constructor(props){
        super(props)
        this.state={
            isAdmin:false
        }
    }
    componentDidMount(){
        var user = {
        APIToken:localStorage.getItem("APIToken")
      }
      axios.post(config.REACT_APP_API_BASE_URL + 'admin/isAdmin', qs.stringify(user), {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        this.setState({isAdmin:res.data.isAdmin})
      })
    }
    render(){
        return (
            <PRoute authenticated={this.state.isAdmin} {...this.props}/> 
        )
    }    
}

export default ProtectedRoute;