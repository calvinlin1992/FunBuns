import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Thumbnail, Button } from "react-bootstrap";
import { loadProducts } from "../reducers/products";
import { addProductToCart } from "../reducers/cart";
import Product from "./Product";

class ProductsContainer extends Component {
  constructor(props) {
    super(props)

    this._renderProductList = this._renderProductList.bind(this);
  }

  _renderProductList() {
    let products = this.props.products;
    const addToCart = this.props.addToCart;

    // If the user selected Men's or Women's products
    // then filter the products array accordingly.
    if (this.props.productType) {
      products = products.filter(product => {
        return product.gender === this.props.productType;
      });
    }

    return products.map(product => {
      return (
        <Col sm={4} key={product.id}>
          <Product product={product} addToCart = {addToCart} />
        </Col>
      );
    });
  }

  componentWillMount() {
    // Grab the products information from thunks.
    // This will put products on the this.props object.
    this.props.fetchInitialData();
  }

  render() {
    return (
      <Grid>
        <Row>
          {this._renderProductList()}
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => {
    dispatch(loadProducts());
  },
  addToCart: cartProduct => {
    dispatch(addProductToCart(cartProduct));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
