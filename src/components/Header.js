import React, { Component } from 'react';

const header = (
    <header id="header" class="alt">
    <span class="logo"><a href = {process.env.REACT_APP_FRONT_BASE_URL} ><img src="images/aaveg_glyph_white.png" alt="" height="150px" width="150px" /></a></span>
  </header>
);

class Header extends Component {
	render() {
		return (
            header
    	);
	}
}

export default Header;