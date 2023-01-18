import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
const NavBar = () => {
  return (
    <div>
         <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Mern App</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Users">Contacts</Nav.Link>
            <Nav.Link href="/Add">Add</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar