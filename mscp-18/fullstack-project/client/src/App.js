import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button'
import Todo from './components/Todo';
// import TopBar from './components/TopBar';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import Input from './components/Input';
// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-regular-svg-icons';




function App() {

  const [data, setData] = useState([])
  //Temp state
  const [newToDo, setNewToDo] = useState('')
  const [updateToDo, setUpdateToDo] = useState('')

  //add Todo
  const addToDo = () => {
    
    // if(newTask) {
    //   let newEntry = { name: newToDo, description: '', completed: false}
    // }
    // setData([...data, newEntry])
    // setNewToDo('')

  }

  //Delete Todo
  const deleteToDo = (id) => {
    let newToDo = data.filter(todo => todo.id !== id)

  }

  //Mark Todo complete
  const markToDoDone = (id) => {

  }

  //Edit ToDo
  const editToDo = (e) => {

  }

  //cancel update ToDo
  const cancelUpdateToDo = (id) => {

  }

  //Change Todo for update
  const changeToDo = (e) => {
    
  }

  //Update todo
  const updateToDoTask = () => {

  }
  const handleSubmitA = async (newToDo) => {
  //  e.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": 'applicaiton/json'
      },
      body: JSON.stringify({
        "name": `${newToDo}`,
        "description": "",
        "completed": false
      })
    }
    const response = await fetch('http://localhost:3001/task', options)
    const data = await response.json()

  }

  useEffect (() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3001/task')
      const data = await res.json()
      setData(data)
     
    }
    getData()

  }, [])

  return (
    <div className="App-header">

    <br /><br/>
    <h2>To Do List</h2>
    <Input setNewToDo={setNewToDo} newToDo={newToDo} addToDo={addToDo} handleSubmitA={handleSubmitA} data={data} setData={setData}/>
    <Todo data={data} setNewToDo={setNewToDo} newToDo={newToDo} setData={setData} />
    {data && data.length ? '' : 'No Todo in Database...'}
    <br /><br />

    </div>
    
    
    
  );
}

export default App;

/* <div className="App">
      <header className="App-header">
          <h1>My To Do List</h1>
          <Input />
          <Todo data={data}/>
          <Button variant="outline-success">Add Task</Button>
                
    


      </header>
    </div> */
