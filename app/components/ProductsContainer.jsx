import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'
var Rating = require('react-rating');


class ProductsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }

    this._renderProductList = this._renderProductList.bind(this)
  }

  _renderProductList() {
    return (
      <div>
        {
          this.state.products.map(product => {
            return (
              <Col sm={4} key={product.id}>
                <Thumbnail src={product.image} alt={product.name}>
                  <div className="product_card_content">
                    <h3>{product.name}</h3>
                    <p>Size: {product.length}</p>
                    <p>Price: ${product.price}</p>
                    <p>Gender: {product.genderDisplayName}</p>
                   <Rating
  start={11}
  stop={1}
  step={-2}
/>
			<div className="stepper-input">
				<a href="#" className="decrement" >–</a>
				<input ref="feedQty" type="number" className="quantity"  />
				<a href="#" className="increment" >+</a>
			</div>
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
    let product1 = {
      id: 1,
      name: 'princess leia',
      gender: 'M',
      genderDisplayName: 'Male',
      length: 'long',
      color: 'bear brown',
      image: 'http://via.placeholder.com/300x300/FF5733/000000',
      price: 12.50
    }

    let product2 = {
      id: 2,
      name: 'samurai classic',
      gender: 'F',
      genderDisplayName: 'Female',
      length: 'short',
      color: 'dirty blonde',
      image: 'http://via.placeholder.com/300x300/FFFC33/000000',
      price: 22.50
    }

    let product3 = {
      id: 3,
      name: 'minimane',
      gender: 'F',
      genderDisplayName: 'Female',
      length: 'long',
      color: 'dirty blonde',
      image: 'http://via.placeholder.com/300x300/58FF33/000000',
      price: 8.45
    }

    let product4 = {
      id: 4,
      name: 'dread bun',
      gender: 'M',
      genderDisplayName: 'Male',
      length: 'short',
      color: 'jet black',
      image: 'http://via.placeholder.com/300x300/33E9FF/000000',
      price: 15.30
    }

    let product5 = {
      id: 5,
      name: 'classic',
      gender: 'M',
      genderDisplayName: 'Male',
      length: 'short',
      color: 'jet black',
      image: 'http://via.placeholder.com/300x300/3633FF/000000',
      price: 5.99
    }

    let products = [product1, product2, product3, product4, product5]
    if (this.props.productType) {
      products = products.filter(product => {
        return product.gender === this.props.productType
      })
    }

    this.setState({ products })
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