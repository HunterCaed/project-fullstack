import React from 'react'
import Button from 'react-bootstrap/Button'

export default function Input({newToDo, setNewToDo, addToDo, handleSubmitA, data, setData}) {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = newToDo
        const todo = {name: body, description: "", completed: false}

        const result = await fetch('http://localhost:3001/task', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo)
        }).then(() => {
            console.log('New To Do Added')
            
        })
        const res = await fetch('http://localhost:3001/task')
        const data = await res.json()
        setData(data)
       
        console.log(data)
    }
  return (
    <div className="row">
        <div className='col'>
            <input className='form-control form-control-sm' value={newToDo} onChange= { (e) => setNewToDo(e.target.value)}/>
        </div>
        
        <div className='col-auto'>
            <Button variant="outline-success" onClick={handleSubmit}>Add</Button>{' '}
        </div>
    </div>

  )
}
