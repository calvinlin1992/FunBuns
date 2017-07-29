import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'
import { loadProducts } from '../reducers/products'

class ProductsContainer extends Component {
  constructor(props) {
    super(props);

    this._renderProductList = this._renderProductList.bind(this)
  }

  _renderProductList() {
    let products = this.props.products
    if (this.props.productType) {
      products = products.filter(product => {
        return product.gender === this.props.productType
      })
    }

    return (
      <div>
        {
          products.map(product => {
            return (
              <Col sm={4} key={product.id}>
                <Thumbnail src={product.image_url} alt={product.name}>
                  <div className="product_card_content">
                    <h3>{product.name}</h3>
                    <p>Size: {product.length}</p>
                    <p>Price: ${product.price}</p>
                    <p>Gender: {product.genderDisplayName}</p>
                  </div>
                </Thumbnail>
              </Col>
            )
          })
        }
      </div>
    )
  }

  componentWillMount() {
    this.props.fetchInitialData();
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

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => {
    dispatch(loadProducts())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)