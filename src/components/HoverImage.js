import React, { Component } from 'react'

import '../css/HoverImage.css'

class HoverImage extends Component {
  render () {
    return (
      <div className={'hover-image ' + localStorage.getItem('hostel') + '-bg'} onClick={this.props.onClick}>
        <a href={this.props.link}>
          <div className='hover-image-overlay' />
          <img className='hover-image-image' src={this.props.src} alt={this.props.title} />
          <div className='hover-image-details fadeIn-top'>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
          </div>
        </a>
      </div>
    )
  }
}

export default HoverImage
