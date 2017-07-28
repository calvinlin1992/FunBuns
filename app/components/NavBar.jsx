import React, { Component } from 'react'
import { Link, NavLink, Route } from 'react-router-dom'
import { Nav, NavItem, Navbar, Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'

class NavigationBar extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand><Link to="/home">FunBuns</Link></Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>
              <Link to="/men">Mens</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/women">Womens</Link>
              </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={3}>
              <Link to="/cart">
                <Glyphicon glyph="shopping-cart" className="gi-1_5x" />
              </Link>
            </NavItem>
            <NavItem eventKey={4}>
              <Link to="/account">Account</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

// const mapStateToProps = ({auth}) => {user: auth }
const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps)(NavigationBar)
