import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Nav, NavItem, Navbar } from 'react-bootstrap'

export default function Footer() {
  return (
    <Navbar fluid inverse collapseOnSelect>
      <Nav>
        <NavItem eventKey={5}><Link to="/about">About</Link></NavItem>
        <NavItem eventKey={6}><Link to="/contact">Contact Us</Link></NavItem>
      </Nav>
    </Navbar>
  )
}
