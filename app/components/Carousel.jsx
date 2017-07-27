import React, { Component } from 'react'
import { React_Bootstrap_Carousel } from 'react-bootstrap-carousel'
//import '../node_modules/react-bootstrap-carousel/dist/react-bootstrap-carousel.css'

export default class Carousel extends Component {

  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`) // why is a log in master? -- KHSB
  }
  render() {
    return (
      <div style={{ height: 300, margin: 20 }}>
        <React_Bootstrap_Carousel
          animation={true}
          onSelect={this.onSelect}
          className="carousel-fade"
        >
          <div style={{ height: 300, width: '100%', backgroundColor: 'skyblue' }}>
            123
            </div>
          <div style={{ height: 300, width: '100%', backgroundColor: 'aqua' }}>
            456
            </div>
          <div style={{ height: 300, width: '100%', backgroundColor: 'lightpink' }}>
            789
            </div>
        </React_Bootstrap_Carousel>
      </div>
    )
  }
}; // no semicolons -- KHSB

// connect this component and mapStateToProps to get products. use products to have pictures -- KHSB
