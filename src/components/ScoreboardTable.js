import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import _ from 'lodash'

class ScoreboardTable extends Component {
  render () {
    return (
      <Table striped bordered hover variant='dark' responsive>
        <thead>
          <tr style={{position:"relative"}}>
            <th>{this.props.title}</th>
            <th>{this.props.hostels[0]}</th>
            <th>{this.props.hostels[1]}</th>
            <th>{this.props.hostels[2]}</th>
            <th>{this.props.hostels[3]}</th>
            <th>{this.props.hostels[4]}</th>
          </tr>
        </thead>
        <tbody>
          {this.props.eventData.map((event, i) => {
            return (<tr key={_.get(event, 'event_name')}>
              <td>{_.get(event, 'event_name')}</td>
              <td>{_.get(event, 'Agate') || 0}</td>
              <td>{_.get(event, 'Azurite') || 0}</td>
              <td>{_.get(event, 'Bloodstone') || 0}</td>
              <td>{_.get(event, 'Cobalt') || 0}</td>
              <td>{_.get(event, 'Opal') || 0}</td>
                    </tr>)
          })}
        </tbody>
      </Table>
    )
  }
}

export default ScoreboardTable
