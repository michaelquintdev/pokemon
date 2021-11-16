import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch(error => {
        setError(error.response.data)
        setLoading(false)
      })
  }, [])

  if(error.length > 0){
    return <h1>{error}</h1>
  }

  return (
    <div> 
      <h1>Northwestern Mutual Coding Challenge - Michael Quint</h1>
      {loading ? <p>loading....</p>
        : <div>
          <Form />
          {data.results.map((pokemon, idx) => {
            return <Card pokemon={pokemon} key = {idx}/>
          })}
        </div>
      }
      
    </div>
  );
}

export default App;
