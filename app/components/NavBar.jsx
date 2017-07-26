import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Nav, NavItem, Navbar } from 'react-bootstrap'

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand><Link to="/home">FunBuns</Link></Navbar.Brand>
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
