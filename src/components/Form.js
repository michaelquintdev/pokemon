import React, {useState} from 'react'
import axios from 'axios'
import Card from './Card'

function Form() {
    const [input, setInput] = useState('')
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState('')

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setErrors('')
        setPokemon([])
        axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
            .then(res => {
                setPokemon(res.data)
                setLoading(false)
            }).catch(error => {
                setErrors(error.response.data)
                setLoading(false)
            })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Type a pokemon: 
                    <input 
                        onChange={onChange}
                    />
                </label>
                <button>Submit</button>
            </form>
            {loading && <p>loading pokemon...</p>}
            {pokemon.name && <h2>{pokemon.name}</h2>}
            {errors.length > 0 && <p>{errors}</p>}
        </div>
    )
}

export default Form
