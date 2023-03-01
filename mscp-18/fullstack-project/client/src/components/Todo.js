import React from 'react'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons'
 

export default function Todo({data, setNewToDo, newToDo}) {

    const handleDelete = (id) => {
        let newToDo = data.filter(todo => todo.id !== id)

        fetch(`http://localhost:3001/task/${id}`, {
            method: 'DELETE',
            // headers: { "Content-Type": "application/json" },
            // body: JSON.stringify(todo)
        }).then(() => {
            console.log('Deleted')
        })
        setNewToDo('')
    
      }

    const handleClick = (e) => {
        console.log(`${e.target.id}`)

    }
  return (
    data.map((todo, index) =>(
        <>
        <div className="todoBg">
            <div className={todo.completed ? 'done' : ''}>
                    <span
                        className='todoNumber'
                        id={todo.id}
                        onClick={handleClick}>
                            {index + 1}  
                     </span>
                    <span
                        className='todoText'
                        id={todo.id}
                        onClick={handleClick}>
                           : {todo.name} || {todo.description}
                    </span>
            </div>
            <div className='iconsWrap'>
                <span title="Completed / Not Completed">
                    <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span title="Edit">
                    <FontAwesomeIcon icon={faEdit} />
                </span>
                <span title="Delete" onClick={() =>handleDelete(todo.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </span>
                
            </div>
        </div>
        
        
        
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
