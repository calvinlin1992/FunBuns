import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

export default function NavBar() {
  return (
    <div>
      <Nav bsStyle="pills" activeKey={1} onSelect={console.log('hi')}>
        <NavItem eventKey={1} href="/">Home</NavItem>
        <NavItem eventKey={2} href="/men">Mens</NavItem>
        <NavItem eventKey={3} href="/women">Womens</NavItem>
      </Nav>
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
