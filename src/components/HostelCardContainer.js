import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import HostelCard from './HostelCard'

const styles = {
  rowCenterAlign: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}

class HostelCardContainer extends Component {
  render () {
    const agate = {
      id: 0,
      name: "agate"
    }
    const azurite = {
      id: 1,
      name: "azurite"
    }          
    const bloodstone =  {
      id: 2,
      name: "bloodstone"
    }
  const cobalt = {
    id: 3,
    name: "cobalt"
  }
  const opal = {
    id: 4,
    name: "opal"
  }
  var hostel = localStorage.getItem("hostel")
  var arr = [agate,azurite,bloodstone,cobalt,opal]
  switch (hostel){
    case "agate":
        arr = [cobalt,opal,agate,azurite,bloodstone]
        break;
    case "azurite":
        arr = [opal,agate,azurite,bloodstone,cobalt]
        break; 
    case "cobalt":
        arr = [azurite,bloodstone,cobalt,opal,agate]
        break;
    case "opal":
        arr = [bloodstone,cobalt,opal,agate,azurite]
        break;
  }
    return (
      <Row style={styles.rowCenterAlign} className='hostel'>
        {arr.map((item,index)=>{
          return (
            <Col xs={localStorage.getItem("hostel")==arr[index].name?8:6}
             sm={localStorage.getItem("hostel")==arr[index].name?12:6}
             lg={localStorage.getItem("hostel")==arr[index].name?3:2}>
              <HostelCard
                img= {arr[index].name}
                overall={this.props.overallData[arr[index].id]}
                spectrum={this.props.spectrumData[arr[index].id]}
                sports={this.props.sportsData[arr[index].id]}
                culturals={this.props.culturalsData[arr[index].id]}
                hostels={this.props.hostels[arr[index].id]}
              />
            </Col>
          )
        })}        
      </Row>

    )
  }
}

export default HostelCardContainer
