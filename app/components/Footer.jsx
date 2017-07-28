import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Nav, NavItem, Navbar } from 'react-bootstrap'

export default function Footer() {
  return (
    <Navbar inverse collapseOnSelect>
      <Nav>
        <NavItem eventKey={1}><Link to="/about">About</Link></NavItem>
        <NavItem eventKey={2}><Link to="/contact">Contact Us</Link></NavItem>
      </Nav>
    </Navbar>
  )
}
