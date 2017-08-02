import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCartFromSession, removeProductFromCart } from "../reducers/cart";
import Popup from 'react-popup';

class CartContainer extends Component {
  constructor(props) {
    super(props);

    // Method Bindings
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
  }

  handleQuantityChange(e) {

  }

  handleDelete(id) {
    console.log("handleDelete ", id);
    this.props.removeProdFromCart(id);
  }

  handleCheckOut() {
    
  console.log("checkOut")

  }

  componentWillMount() {
    this.props.getCartFromSession();
  }


  render() {
    let products = this.props.cart;
    const totalPrice = 0;

    return (
      <div className="container">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Product</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "8%" }}>Quantity</th>
              <th style={{ width: "22%" }} className="text-center">
                Subtotal
              </th>
              <th style={{ width: "10%" }} />
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map(product => {
                return (
                  <tr key={Math.random()}>
                    <td data-th="Product">
                      <div className="row">
                        <div className="col-sm-2 hidden-xs">
                          <img
                            src={product.image_url}
                            alt="..."
                            className="img-responsive"
                          />
                        </div>
                        <div className="col-sm-10">
                          <div key={product.product_id}>
                            <h4 className="nomargin">
                              {product.name}
                            </h4>
                          </div>
                          <p>Buns! Buns are fun!</p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">
                      {product.price}
                    </td>
                    <td data-th="Quantity">
                      <input
                        type="number"
                        className="form-control text-center"
                        value={product.quantity}
                        onChange={this.handleQuantityChange}
                      />
                    </td>
                    <td data-th="Subtotal" className="text-center">
                      {product.quantity * product.price}
                    </td>
                    <td className="actions" data-th="">
                      <button
                        onClick={this.handleDelete.bind(
                          this,
                          product.product_id
                        )}
                        className="btn btn-danger btn-sm"
                      >
                        <i className="fa fa-trash-o" />
                      </button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <a href="/" className="btn btn-warning">
                  <i className="fa fa-angle-left" /> Continue Shopping
                </a>
              </td>
              <td colSpan="2" className="hidden-xs" />
              <td className="hidden-xs text-center">
                <strong>
                  {products.reduce(function (sum, product) {
                    return sum + product.quantity * product.price
                  }, 0)}
                </strong>
              </td>
              <td>
                      <button
                        onClick={this.handleCheckOut}
                        className="btn btn-success btn-block"
                      > Checkout
                        <i className="fa fa-trash-o" />
                      </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => ({
  getCartFromSession: () => {
    dispatch(loadCartFromSession());
  },
  removeProdFromCart: id => {
    dispatch(removeProductFromCart(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
