import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class CarouselHero extends Component {

  onSelect = (active, direction) => {
    //console.log(`active=${active} && direction=${direction}`)
  }
  render() {

    return (
      <Carousel
        interval={2000}
        onSelect={this.onSelect}
      >
        <Carousel.Item>
          <div className="bg_color_skyblue carousel_container"></div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Special Buns</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel_container bg_color_aqua"></div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Hot Buns</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel_container bg_color_lightpink"></div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Super Buns</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
};
