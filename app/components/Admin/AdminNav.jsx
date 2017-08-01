import React, { Component } from 'react'
import { Link, NavLink, Route } from 'react-router-dom'
import { Nav, NavItem, Navbar, Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'

export const AdminNavBar = () =>

  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand><Link to="/">FunBuns</Link></Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}>
          <Link to="/viewAllUsers">View All Users</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/viewAllOrders">View All Orders</Link>
        </NavItem>
        <NavItem eventKey={3}>
          <Link to="/viewAllProducts">View All Products</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
