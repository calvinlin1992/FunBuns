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
        <img width={300} height={300} src="/images/c1.jpg"/>
        <Carousel.Caption>
            <h3>The Barry Bun</h3>
            <p>ON SALE!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img width={300} height={300} src="/images/c2.jpg"/>
          <Carousel.Caption>
            <h3>The Honest Bun</h3>
            <p>50% OFF!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img width={300} height={300} src="/images/c3.png"/>
          <Carousel.Caption>
            <h3>SECRET BUN</h3>
            <p>?</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
};
