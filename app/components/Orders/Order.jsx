import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

import { editOrder } from '../../reducers/orders'

class Order extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    console.log('------------heyyyyyyyyyyyyyy')
    const orders = this.props.orders

    return (
      <div>
      hello!
      </div>
    )
  }
}

/* -------------- Props Connector ---------------- */
const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => {
    dispatch(editOrder())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)

      // <div>
        
      //   <form className="form-inline">
      //     <div className="form-group">
      //       <label for="exampleInputName2">Name</label>
      //       <input
      //         type="text"
      //         className="form-control"
      //         id="exampleInputName2"
      //         placeholder="Jane Doe"
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label for="exampleInputEmail2">Email</label>
      //       <input
      //         type="email"
      //         className="form-control"
      //         id="exampleInputEmail2"
      //         placeholder="jane.doe@example.com"
      //       />
      //     </div>
      //     <button type="submit" className="btn btn-default">Send invitation</button>
      //   </form>
      // </div>