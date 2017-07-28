import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Nav, NavItem, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'

class NavigationBar extends Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
<<<<<<< HEAD
          <Navbar.Brand><Link to="/">FunBuns</Link></Navbar.Brand>
=======
          <Navbar.Brand><Link to="/home">FunBuns</Link></Navbar.Brand>
>>>>>>> master
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}><Link to="/men">Mens</Link></NavItem>
          <NavItem eventKey={2}><Link to="/women">Womens</Link></NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={3}><Link to="/cart">Cart</Link></NavItem>
          <NavItem eventKey={4}><Link to="/account">Account</Link></NavItem>
        </Nav>
      </Navbar>
    )
  }
}

// const mapStateToProps = ({ auth }) => { user: auth }
const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps)(NavigationBar)
