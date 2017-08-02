import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink, Route } from 'react-router-dom'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

import { loadOrders } from '../../reducers/orders'

class Orders extends Component {
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
              <Row key={order.id}>
                <Col md={4}>
                  <Link to={`admin/viewAllOrders/${order.id}`}>
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
    orders: state.orders.orders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => {
    dispatch(loadOrders())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
