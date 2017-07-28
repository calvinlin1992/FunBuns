import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'


class ProductsContainer extends Component {
  constructor(props) {
    super(props);

    this._renderProductList = this._renderProductList.bind(this)
  }

  _renderProductList() {
    return (
      <div>
        <Col sm={4}>
          <Thumbnail src="http://via.placeholder.com/242x300/FF5733/000000" alt="242x200">
            <h3>Thumbnail label</h3>
          </Thumbnail>
        </Col>
        <Col sm={4}>
          <Thumbnail src="http://via.placeholder.com/242x300/FFFC33/000000" alt="242x200">
            <h3>Thumbnail label</h3>
          </Thumbnail>
        </Col>
        <Col sm={4}>
          <Thumbnail src="http://via.placeholder.com/242x300/58FF33/000000" alt="242x200">
            <h3>Thumbnail label</h3>
          </Thumbnail>
        </Col>
        <Col sm={4}>
          <Thumbnail src="http://via.placeholder.com/242x300/33E9FF/000000" alt="242x200">
            <h3>Thumbnail label</h3>
          </Thumbnail>
        </Col>
      </div>
    )
  }

  render() {
    return (
      <Grid>
        <Row>
          {this._renderProductList()}
        </Row>
      </Grid>
    )
  }
}

export default ProductsContainer