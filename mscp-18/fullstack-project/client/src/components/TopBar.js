import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function topBar() {
  return (

    <Navbar expand="lg" variant="light" bg="secondary" pill>
      <Container>
        <Navbar.Brand href="#">Ben's Things To Do</Navbar.Brand>
      </Container>
    </Navbar>

  )

}
