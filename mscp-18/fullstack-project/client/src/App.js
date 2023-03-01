import { useEffect } from 'react'
import './App.css';

function App() {

  useEffect (() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3001/test')
      const data = await res.json()
      console.log(data)
    }

    getData()

  }, [])

  return (
    <h1>Working on the App.js page read the console to see if working.</h1>
    
  );
}

export default App;
