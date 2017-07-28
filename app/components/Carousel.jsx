import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { React_Bootstrap_Carousel } from 'react-bootstrap-carousel'
<<<<<<< HEAD
// import '../../node_modules/react-bootstrap-carousel/dist/react-bootstrap-carousel.css'
=======
>>>>>>> master

export default class Carousel extends Component {

  onSelect = (active, direction) => {
    //console.log(`active=${active} && direction=${direction}`)
  }
  render() {
    return (
      <div style={{ height: 300 }}>
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
};
