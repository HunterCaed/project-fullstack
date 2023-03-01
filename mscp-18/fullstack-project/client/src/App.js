import { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Todo from './components/Todo';
import TopBar from './components/TopBar';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function App() {

  const [data, setData] = useState([])

  useEffect (() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3001/task')
      const data = await res.json()
      setData(data)
     
    }
    getData()

  }, [])

  return (
    <>
    <TopBar />
    <Todo data={data}/>
    <Button variant="outline-secondary">Add Task</Button>
    


    

    </>
    
  );
}

export default App;
