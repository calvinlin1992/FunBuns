import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Carousel from './Carousel'
import ProductsContainer from './ProductsContainer'


class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <Carousel />
            </Col>
          </Row>
          <Row>
            <Col>
              {/* spacer div */}
               <div style={{margin: "50px"}}></div> 
            </Col>
          </Row>
        </Grid>
        <ProductsContainer displayType={'all'} />
      </div>
    )
  }
}

export default Home