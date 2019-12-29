import React, { Component } from 'react'
import Chart from "chart.js";
import {Tabs, Tab} from 'react-bootstrap';
import { Container, Col, Row,Table } from 'react-bootstrap'
import axios from 'axios';
import HostelCard from '../components/HostelCard'
import _ from 'lodash'

const styles = {
	canvas:{
		maxWidth:"800px",
		backgroundColor:'#2c2c54',
		margin:"auto"
	}
}


class Scoreboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			hostels:["Agate", "Azurite", "Bloodstone", "Cobalt", "Opal"],
			culturalsData:[],
			spectrumData:[],
			sportsData:[],
			overallData:[],
			culturalsEvent:[],
			spectrumEvent:[],
			sportEvent:[]
		}
	}
	chartRef = React.createRef();

	async componentDidMount() {
		var res = await axios.get(process.env.REACT_APP_API_BASE_URL+'api/scoreboard',{
			headers: {
				'Content-type': 'application/x-www-form-urlencoded'
			}
		})
		this.setState(
			{overallData: 
				[
					res.data.total.Agate || 0,
					res.data.total.Azurite || 0,
					res.data.total.Bloodstone || 0,
					res.data.total.Cobalt || 0,
					res.data.total.Opal || 0
					]
		})
		this.setState(
			{culturalsData: 
				[
					res.data.standings.culturals.Agate || 0,
					res.data.standings.culturals.Azurite || 0,
					res.data.standings.culturals.Bloodstone || 0,
					res.data.standings.culturals.Cobalt || 0,
					res.data.standings.culturals.Opal || 0
					]
		})
		this.setState(
			{spectrumData: 
				[
					res.data.standings.spectrum.Agate || 0,
					res.data.standings.spectrum.Azurite || 0,
					res.data.standings.spectrum.Bloodstone || 0,
					res.data.standings.spectrum.Cobalt || 0,
					res.data.standings.spectrum.Opal || 0
					]
		})
		this.setState(
			{sportsData: 
				[
					res.data.standings.sports.Agate || 0,
					res.data.standings.sports.Azurite || 0,
					res.data.standings.sports.Bloodstone || 0,
					res.data.standings.sports.Cobalt || 0,
					res.data.standings.sports.Opal || 0
					]
		})
		this.setState({culturalsEvent:res.data.events_score.culturals})
		this.setState({spectrumEvent:res.data.events_score.spectrum})
		this.setState({sportEvent:res.data.events_score.sports})
		console.log(res.data.events_score.sports)
		console.log(this.state.sportEvent)
		this.handleSelect(0)
	}
	drawChart(barChartData){
		const myChartRef = this.chartRef.current.getContext("2d");
		
		new Chart(myChartRef, {
			type: "bar",
			data: barChartData,
			options: {
				title: {
				display: true,
				text: 'Points Statistics',
				fontColor: '#fff'
				},
				tooltips: {
				mode: 'index',
				intersect: false
				},
				responsive: true,
				scales: {
				xAxes: [{
					stacked:true,
					gridLines: {
					display: false
					},
					ticks: {
					fontColor: '#fff'
					}
				}],
				yAxes: [{
					stacked:true,
					gridLines: {
					display: true,
					color:'#27359A'
					},
					ticks: {
					fontColor: '#fff',
					beginAtZero: true
					}
				}]
				},
				legend: {
				labels: {
					fontColor: 'rgb(255,255,255)'
				}
				},
				animation: {
				duration: 1000,
				easing: 'easeInQuad'
				}
			}
		});
	}
	handleSelect(e){
		var tab = parseInt(e)
		var barChartData = {
			labels: this.state.hostels,
			datasets: [{
				label: 'Culturals',
				backgroundColor: '#09bc8a',
				data: this.state.culturalsData
			}, {
				label: 'Sports',
				backgroundColor: '#f49d6e',
				data: this.state.sportsData
			}, {
				label: 'Spectrum',
				backgroundColor: '#75dddd',
				data: this.state.spectrumData
			}]
			
			}
		var barChartDataCulturals = {
			labels: this.state.hostels,
			datasets: [{
				label: 'Culturals',
				backgroundColor: '#09bc8a',
				data: this.state.culturalsData
			}]
			
		}
			var barChartDataSpectrum = {
			labels: this.state.hostels,
			datasets: [{
				label: 'Spectrum',
				backgroundColor: '#75dddd',
				data: this.state.spectrumData
			}]
			
		}
			var barChartDataSports = {
			labels: this.state.hostels,
			datasets: [{
				label: 'Sports',
				backgroundColor: '#f49d6e',
				data: this.state.sportsData
			}]
			
		}
		if (tab === 0){
			this.drawChart(barChartData)
		}
		if (tab === 1){
			this.drawChart(barChartDataCulturals)
		}
		if (tab === 2){
			this.drawChart(barChartDataSpectrum)
		}
		if (tab === 3){
			this.drawChart(barChartDataSports)
		}
		
		
	}
	render() {
		return (
			<Container style={styles.container} >
			<Row>
				<Col lg={1}></Col>
				<Col sm={12} lg={2} >
				<HostelCard 
				img = "agate" 
				overall={this.state.overallData[0]} 
				spectrum={this.state.spectrumData[0]}
				sports={this.state.sportsData[0]}
				culturals={this.state.culturalsData[0]}
				/>
				</Col>
				<Col sm={12} lg={2} >
				<HostelCard 
				img = "azurite" 
				overall={this.state.overallData[1]} 
				spectrum={this.state.spectrumData[1]}
				sports={this.state.sportsData[1]}
				culturals={this.state.culturalsData[1]}
				/>
				</Col>
				<Col sm={12} lg={2} >
				<HostelCard 
				img = "bloodstone" 
				overall={this.state.overallData[2]} 
				spectrum={this.state.spectrumData[2]}
				sports={this.state.sportsData[2]}
				culturals={this.state.culturalsData[2]}
				/></Col>
				<Col sm={12} lg={2} >
				<HostelCard 
				img = "cobalt" 
				overall={this.state.overallData[3]} 
				spectrum={this.state.spectrumData[3]}
				sports={this.state.sportsData[3]}
				culturals={this.state.culturalsData[3]}
				/>
				</Col>
				<Col sm={12} lg={2} >
				<HostelCard 
				img = "opal" 
				overall={this.state.overallData[4]} 
				spectrum={this.state.spectrumData[4]}
				sports={this.state.sportsData[4]}
				culturals={this.state.culturalsData[4]}
				/>
				</Col>
				<Col lg={1}></Col>
				</Row>
				<div style={styles.canvas}>
				<Tabs defaultActiveKey="Overall" id="uncontrolled-tab-example" onSelect={this.handleSelect.bind(this)}>
				<Tab eventKey="0" title="Overall">
					</Tab>
					<Tab eventKey="1" title="Culturals">
					</Tab>
					<Tab eventKey="2" title="Spectrum">
					</Tab>
					<Tab eventKey="3" title="Sports">
					</Tab>
				</Tabs>
				<canvas
					id="myChart"
					ref={this.chartRef}
				/>
			</div>
			<Table striped bordered hover variant="dark" responsive>
			<thead>
				<tr>
				<th>Culturals</th>
				<th>{this.state.hostels[0]}</th>
				<th>{this.state.hostels[1]}</th>
				<th>{this.state.hostels[2]}</th>
				<th>{this.state.hostels[3]}</th>
				<th>{this.state.hostels[4]}</th>
				</tr>
			</thead>
			<tbody>
			{this.state.culturalsEvent.map((event, i) => {     
				return(<tr>
					<td>{_.get(event,'event_name')}</td>
					<td>{_.get(event,'Agate') || 0}</td>
					<td>{_.get(event,'Azurite') || 0}</td>
					<td>{_.get(event,'Bloodstone') || 0}</td>
					<td>{_.get(event,'Cobalt') || 0}</td>
					<td>{_.get(event,'Opal') || 0}</td>
					</tr>)
			})}
			</tbody>
			</Table>
			<Table striped bordered hover variant="dark" responsive>
			<thead>
				<tr>
				<th>Spectrum</th>
				<th>{this.state.hostels[0]}</th>
				<th>{this.state.hostels[1]}</th>
				<th>{this.state.hostels[2]}</th>
				<th>{this.state.hostels[3]}</th>
				<th>{this.state.hostels[4]}</th>
				</tr>
			</thead>
			<tbody>
			{this.state.spectrumEvent.map((event, i) => {     
				return(<tr>
					<td>{_.get(event,'event_name')}</td>
					<td>{_.get(event,'Agate') || 0}</td>
					<td>{_.get(event,'Azurite') || 0}</td>
					<td>{_.get(event,'Bloodstone') || 0}</td>
					<td>{_.get(event,'Cobalt') || 0}</td>
					<td>{_.get(event,'Opal') || 0}</td>
					</tr>)
			})}
			</tbody>
			</Table>
			<Table striped bordered hover variant="dark" responsive>
			<thead>
				<tr>
				<th>Sports</th>
				<th>{this.state.hostels[0]}</th>
				<th>{this.state.hostels[1]}</th>
				<th>{this.state.hostels[2]}</th>
				<th>{this.state.hostels[3]}</th>
				<th>{this.state.hostels[4]}</th>
				</tr>
			</thead>
			<tbody>
			{this.state.sportEvent.map((event, i) => {     
				return(<tr>
					<td>{_.get(event,'event_name')}</td>
					<td>{_.get(event,'Agate') || 0}</td>
					<td>{_.get(event,'Azurite') || 0}</td>
					<td>{_.get(event,'Bloodstone') || 0}</td>
					<td>{_.get(event,'Cobalt') || 0}</td>
					<td>{_.get(event,'Opal') || 0}</td>
					</tr>)
			})}
			</tbody>
			</Table>
			</Container>
		)
	}
}

export default Scoreboard