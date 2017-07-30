import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: this.props.productQuantity
    }

    this._increment = this._increment.bind(this)
    this._decrement = this._decrement.bind(this)
    this._feed = this._feed.bind(this)
  }

  _increment(e) {
    e.preventDefault()

    this.setState(prevState => ({
      count: Number(prevState.count) + 1
    }), function () {
      this.props.updateQuantity(this.state.count)
    })

  }

  _decrement(e) {
    e.preventDefault()

    if (this.state.count <= 1) {
      return this.state.count
    }
    else {
      this.setState(prevState => ({
        count: Number(prevState.count) - 1
      }), function () {
        this.props.updateQuantity(this.state.count)
      });
    }
  }

  _feed(e) {
    this.setState({
      count: this.refs.feedQty.value
    }, function () {
      this.props.updateQuantity(this.state.count)
    })
  }


  render() {
    return (
      <div className="stepper-input">
        <a href="" className="decrement" onClick={this._decrement}>–</a>
         <input ref="feedQty" type="number" className="quantity" value={this.state.count} onChange={this._feed} /> 
        <a href="" className="increment" onClick={this._increment}>+</a>
      </div>
    )
  }
}

// Makes sure the input value is numeric
Counter.propTypes = {
  value: PropTypes.number
}

export default Counter