import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink, Route } from 'react-router-dom'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

import { loadOrders } from '../../reducers/orders'
import Order from './Order'

class OrdersContainer extends Component {
  componentDidMount() {
    // Grab the order information from thunks.
    // This will put orders on the this.props object.
    this.props.fetchInitialData()
  }

  render() {
    const orders = this.props.orders

    return (
      <Grid>
        {
          orders.map(order =>
            (
              <Row>
                <Col md={4} key={order.id}>
                  <Link to={`/viewAllOrders/${order.id}`}>
                    Order #{order.tracking_number}
                  </Link>
                </Col>
              </Row>
            )
          )
        }
      </Grid>
    )
  }
}

/* -------------- Props Connector ---------------- */
const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => {
    dispatch(loadOrders())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer)
