import React, {useState} from 'react'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons'
 

export default function Todo({data, setNewToDo, newToDo, setData}) {

    

    const handleDelete = async (id) => {
        let newToDo = data.filter(todo => todo.id !== id)
        
        
        const result = await fetch(`http://localhost:3001/task/${id}`, {
            method: 'DELETE',
            // headers: { "Content-Type": "application/json" },
            // body: JSON.stringify(todo)
        }).then(() => {
            
            console.log('Deleted')
        })
            
    
      }

    const handleCompleted = async (id, comp) => {

        // e.preventDefault()
        let completed = comp
        const body = newToDo
        const todo = !body.completed
        let fix = true
            
     

        const result = await fetch(`http://localhost:3001/task/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "completed": `${fix}` //!body.completed
            })
        }).then(() => {
            console.log('Updated completed')
        })
        const newUpdates = await result.json()
        console.log(newUpdates)
        setData(data =>[...data, newUpdates])
        
    }

    const handleChange = async (changes, id) => {
        
        let body = changes

        const result = await fetch(`http://localhost:3001/task/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "name": `${body}` //!body.completed
            })
        }).then(() => {
            console.log('Updated completed')
        })


    }
    

    const handleClick = (e) => {
        console.log(`${e.target.id}`)

    }
  return (
    
    
    data.sort((a,b) => a.id > b.id ? 1 : -1).map((todo, index) =>(
        <>
        <div className="todoBg">
            <div className={todo.completed ? 'done' : ''}>
                    <span
                        className='todoNumber'
                        id={todo.id}
                        onClick={handleClick}>
                            {index + 1}  
                     </span>
                    <input
                        className='todoText'
                        value={todo.name}
                        id={todo.id}
                        onClick={handleClick}
                        onChange={e => handleChange({ name: e.target.value}, todo.id)}>
                           
                    </input>
            </div>
            <div className='iconsWrap'>
                <span title="Completed / Not Completed" onClick={(e) => handleCompleted(todo.id, todo.completed)}>
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
