import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default function Todo({data}) {

    const handleClick = (e) => {
        console.log(`${e.target.id}`)

    }
  return (
    data.map((todo, index) =>(
        <>
        <h1 
            className='todoBody'
            id={todo.id}
            onClick={handleClick}>
                {todo.name}
        </h1>
        
        
        </>

    ))
  )
}

//<Card>
//<Card.Body>{todo.name}{todo.description}</Card.Body>
//</Card>

/* <Card>
            <Card.Body>{todo.name}{todo.description}</Card.Body>
            <Button variant="primary">Edit</Button>
            <Button variant="primary">Delete</Button>
        </Card> */
