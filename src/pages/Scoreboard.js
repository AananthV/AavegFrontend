import React, { Component } from 'react'
import Chart from "chart.js";
import {Tabs, Tab} from 'react-bootstrap';
import axios from 'axios';
import HostelCardContainer from '../components/HostelCardContainer'
import ScoreboardTable from '../components/ScoreboardTable'
import { InnerPage, Title } from '../components/InnerPage'
const config = require('../config.js')

const styles = {
	canvas:{
		maxWidth:"100%",
		backgroundColor:'#2c2c54',
		margin:"auto",
		marginTop:"20px",
		marginBottom:"30px"
	},
	tabs:{
		color:"#fff !important"
	}
}


class Scoreboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			hostels:["Agate", "Azurite", "Bloodstone", "Cobalt", "Opal"],
			hostelIds:["agate", "azurite", "bloodstone", "cobalt", "opal"],
			culturalsData:[],
			spectrumData:[],
			sportsData:[],
			overallData:[],
			culturalsEvent:[],
			spectrumEvent:[],
			sportEvent:[]
		}
		this.chart = undefined;
	}
	chartRef = React.createRef();

	async componentDidMount() {
		var res = await axios.get(config.REACT_APP_API_BASE_URL+'scoreboard',{
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
		this.handleSelect(0)
	}
	drawChart(barChartData){
		const myChartRef = this.chartRef.current.getContext("2d");

		if (this.chart !== undefined) this.chart.destroy();

		this.chart = new Chart(myChartRef, {
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
			<InnerPage >
				<Title>Scoreboard</Title>
				<HostelCardContainer
					overallData = {this.state.overallData}
					spectrumData = {this.state.spectrumData}
					sportsData = {this.state.sportsData}
					culturalsData = {this.state.culturalsData}
					hostels = {this.state.hostels}
					hostelIds = {this.state.hostelIds}
				/>
				<div style={styles.canvas}>
					<Tabs style={styles.tabs} defaultActiveKey="0" id="uncontrolled-tab-example" onSelect={this.handleSelect.bind(this)}>
						<Tab eventKey="0" title="Overall"/>
						<Tab eventKey="1" title="Culturals"/>
						<Tab eventKey="2" title="Spectrum"/>
						<Tab eventKey="3" title="Sports"/>
					</Tabs>
					<canvas
						id="myChart"
						ref={this.chartRef}
					/>
				</div>
				<ScoreboardTable
					title="Culturals"
					hostels={this.state.hostels}
					eventData={this.state.culturalsEvent}
				/>
				<ScoreboardTable
					title="Spectrum"
					hostels={this.state.hostels}
					eventData={this.state.spectrumEvent}
				/>
				<ScoreboardTable
					title="Sports"
					hostels={this.state.hostels}
					eventData={this.state.sportEvent}
				/>

			</InnerPage>
		)
	}
}

export default Scoreboard
