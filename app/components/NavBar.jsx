import React, { Component } from 'react'
import { Nav, NavItem, Navbar, NavbarHeader } from 'react-bootstrap'
import { Link, Route } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/men">Mens</Link>
      <Link to="/women">Womens</Link>
    </div>
  )
}

// function handleSelect(selectedKey) {
//   alert('selected ' + selectedKey);
// }
// const navInstance = (
//   <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
//     <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
//     <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
//     <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
//   </Nav>
// );
// ReactDOM.render(navInstance, mountNode);
