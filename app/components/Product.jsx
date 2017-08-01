import React, { Component } from "react";
import { Thumbnail, Button } from "react-bootstrap";
import Counter from "./Counter";
import Rating from "react-rating";

class Product extends Component {
  constructor(props) {
    super(props);

    // Constants
    this.BTN_LABEL_ADD = "ADD TO CART";
    this.BTN_LABEL_ADDED = "✔ ADDED";

    // Local state initialization
    this.state = {
      selectedProduct: {},
      buttonLabel: this.BTN_LABEL_ADD,
      isButtonDisabled: false,
      quantity: 1
    };

    // Local method bindings
    let product = props.product;
    this._updateQuantity = this._updateQuantity.bind(this);
    this._addToCart = this._addToCart.bind(
      this,
      product.id,
      product.image_url,
      product.name,
      product.price
    );
  }

  // LOCAL METHODS
  _updateQuantity(quantity) {
    this.setState({
      quantity
    });
  }

  _addToCart(product_id, image_url, name, price) {
    let quantity = this.state.quantity;


    this.props.addToCart({
      product_id,
      image_url,
      name,
      price,
      quantity
    });

    this.setState({
      selectedProduct: {
        product_id,
        image_url,
        name,
        price,
        quantity
      }
    });

    this.setState(
      {
        buttonLabel: this.BTN_LABEL_ADDED,
        isButtonDisabled: true
      },
      function() {
        setTimeout(() => {
          // Wait 3 seconds then change the button label back.
          this.setState({
            buttonLabel: this.BTN_LABEL_ADD,
            isButtonDisabled: false
          });
        }, 3000);
      }
    );
  }

  // REACT METHODS
  render() {
    let product = this.props.product;

    return (
      <Thumbnail src={product.image_url} alt={product.name}>
        <div className="product_card_content">
          <h3>
            {product.name}
          </h3>
          <p>
            Size: {product.length}
          </p>
          <p>
            Price: ${product.price}
          </p>
          <p>
            Gender: {product.gender_display_name}
          </p>
          <Counter
            productQuantity={this.state.quantity}
            updateQuantity={this._updateQuantity}
          />
          <div className="product_action">
            <Button
              bsStyle="success"
              bsSize="large"
              disabled={this.state.isButtonDisabled}
              block
              onClick={this._addToCart}
            >
              {this.state.buttonLabel}
            </Button>
          </div>

          <Rating initialRate={parseInt(product.avg_review)} readonly />
        </div>
      </Thumbnail>
    );
  }
}

export default Product;
