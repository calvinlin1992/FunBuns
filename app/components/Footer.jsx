import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Nav, NavItem, Navbar } from 'react-bootstrap'

export default function Footer() {
  return (
<<<<<<< HEAD
    <Navbar fluid inverse collapseOnSelect>
      <Nav>
        <NavItem eventKey={5}><Link to="/about">About</Link></NavItem>
        <NavItem eventKey={6}><Link to="/contact">Contact Us</Link></NavItem>
=======
    <Navbar inverse collapseOnSelect>
      <Nav>
        <NavItem eventKey={1}><Link to="/about">About</Link></NavItem>
        <NavItem eventKey={2}><Link to="/contact">Contact Us</Link></NavItem>
>>>>>>> master
      </Nav>
    </Navbar>
  )
}
