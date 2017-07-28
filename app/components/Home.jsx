import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import CarouselHero from './Carousel'
import ProductsContainer from './ProductsContainer'


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <CarouselHero />
            </Col>
          </Row>
          <Row>
            <Col>
              {/* spacer div */}
               <div className="spacer"></div> 
            </Col>
          </Row>
        </Grid>
        <ProductsContainer productType={this.props.productsFilter} />
      </div>
    )
  }
}

export default Home