import React, { Component } from 'react'
import { InnerPage, Title } from '../components/InnerPage'
import { Row, Col,Image,Card } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton';
import axios from 'axios'
const config = require('../config.js')

const styles = {
  sponsors:{
      textAlign:"center"
  },
  img:{
      height:"150px",
      margin:"auto",
      marginTop:"10px",
      marginBottom:"10px",
      "&:hover":{
        opacity:0.5
    }
  },
  card:{
      color:"black",
      textAlign:"center",
      margin:"auto",
      marginTop:"20px",
      maxWidth:"90%",
      borderRadius:"10px"
  },
  title:{
      marginTop:"10px"
  }
}

class Team extends Component {
    constructor(props){
        super(props);
        this.state = {
            sponsors:[],
            image:false
        }
    }

    handleImageLoaded(){
        this.setState({image:true})
    }

    componentDidMount(){
        axios.get(
            config.REACT_APP_API_BASE_URL + 'sponsors/'
          ).then(res => {
            if (res.data.length > 0) {
              this.setState({sponsors:res.data})
            }
          })
    }

  render () {
    return (
      <InnerPage>
        <Title>Sponsors</Title>
          <Row>
              {
                  (this.state.sponsors).map(item=>{
                      return (
                        <Col md={6} style={styles.sponsors}>
                            <Card style={styles.card}>
                            <Card.Title style={styles.title}>{item.title}</Card.Title>
                                <a href={item.link}>
                                    <Image src={item.logo} alt={item.name} style={styles.img} onLoad={this.handleImageLoaded.bind(this)}rounded />
                                    {
                                        !this.state.image?<Skeleton circle={true} height={50} width={50} />:null
                                    }
                                    </a> 
                                <Card.Text>{item.name}</Card.Text>
                            </Card>
                        </Col>
                      )
                  })
              }            
          </Row>
      </InnerPage>
    )
  }
}

export default Team
