import React, { Component } from 'react';  
import { Nav, Navbar } from 'react-bootstrap';  
import Login from './LoginModal'


class NavBar extends Component {  
	render(){
		return <div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href={process.env.REACT_APP_FRONT_BASE_URL}>
				<img
					alt=""
					src="/images/aaveg_glyph_white.png"
					width="30"
					height="30"
					className="d-inline-block align-top"
				/>{' '}
				Aaveg
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href= {process.env.REACT_APP_FRONT_BASE_URL+"about"} >About</Nav.Link>
						<Nav.Link href={process.env.REACT_APP_FRONT_BASE_URL+"events"} >Events</Nav.Link>
						<Nav.Link href={process.env.REACT_APP_FRONT_BASE_URL+"scoreboard"} >Scoreboard</Nav.Link>
						<Nav.Link href="https://medium.com/aaveg-blog" >Blog</Nav.Link>
						<Nav.Link href={process.env.REACT_APP_FRONT_BASE_URL+"sponsors"} >Sponsors</Nav.Link>
					</Nav>
					<Nav>
					<Nav.Link href={process.env.REACT_APP_FRONT_BASE_URL+"team"} >Team</Nav.Link>
					</Nav>
					<Nav> <Login/> </Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
		
	}
}  
export default NavBar;  