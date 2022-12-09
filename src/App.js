import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'

const url = "https://rickandmortyapi.com/api/character"

const getCharacterAPI = async (url) => {

  const response = await fetch(url)
  const data = await response.json()

  console.log(data)
}

function App() {

  useEffect(() => {
    getCharacterAPI(url)
  }, [])
  
  return (
    <div className="App">
      <Navbar brand="Rick and Morty App!"/>
    </div>
  );
}

export default App;
