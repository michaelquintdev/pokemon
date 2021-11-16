import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './components/Card';
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

  if(loading){
    return (<div> <h1>Northwestern Mutual Coding Challenge - Michael Quint</h1>
        <h2>Loading pokemon...</h2> </div>
    )
  }

  if(error.length > 0){
    return <h1>{error}</h1>
  }

  return (
    <div> 
      <h1>NorthWestern Mutual Coding Challenge - Michael Quint</h1>
      <input />
      {data.results.map((pokemon, idx) => {
        return <Card pokemon={pokemon} key = {idx}/>
      })}
    </div>
  );
}

export default App;
