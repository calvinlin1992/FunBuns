import React, { Component } from 'react'
import { Link, NavLink, Route } from 'react-router-dom'
import { Nav, NavItem, Navbar, Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'

export const AdminNavBar = () =>

  <Navbar inverse collapseOnSelect>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}>
          <Link to="/admin/viewAllUsers">View All Users</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/admin/viewAllOrders">View All Orders</Link>
        </NavItem>
        <NavItem eventKey={3}>
          <Link to="/admin/viewAllProducts">View All Products</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
