import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';
import styled from 'styled-components';
import {Loading, Error} from './utils/styled'

const H1 = styled.h1`
  font-size: 3rem;
  color: ${pr => pr.theme.primaryColor};
  text-align: center;
`
const Div = styled.div`
  background-color: ${pr => pr.theme.secondaryColor};
`

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
    return <Error>{error}</Error>
  }

  return (
    <Div> 
      <H1>Northwestern Mutual Coding Challenge - Michael Quint</H1>
      {loading ? <Loading>loading....</Loading>
        : <div>
          <Form />
          {data.results.map((pokemon, idx) => {
            return <Card pokemon={pokemon} key = {idx}/>
          })}
        </div>
      }
    </Div>
  );
}

export default App;
