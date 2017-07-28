import React, { Component } from 'react'
import Carousel from './Carousel'
import ProductsContainer from './ProductsContainer'

import {Grid, Row, Col} from 'react-bootstrap'

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <div>Above Carousel</div>
            <Carousel />
            <div>Below Carousel</div>
          </Col>
          <Row>
            <ProductsContainer displayType={'all'} />
          </Row>
        </Row>
      </Grid>
    )
  }
}

export default Home