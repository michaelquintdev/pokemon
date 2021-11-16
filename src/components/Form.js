import React, {useState} from 'react'
import axios from 'axios'

function Form() {
    const [input, setInput] = useState('')
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState('')

    const onChange = (e) => {
        const text = e.target.value.trim().toLowerCase()
        setInput(text)
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
            {pokemon.name && 
                <div>
                    <h2>{pokemon.name}</h2>
                    {pokemon.types.map((type,idx) => {
                        return <p key={idx}>{type.type.name}</p>
                    })}
                    <p>Base XP: {pokemon.base_experience}</p>
                    <div>
                        <h4>Abilities</h4>
                        {pokemon.abilities.map((ability, idx) => {
                            return <p key={idx}>{ability.ability.name}, </p>
                        })}
                    </div>
                    <div>
                        <h4>Stats</h4>
                        {pokemon.stats.map((stat, idx) => {
                            return (
                                <p key={idx}>{stat.stat.name}: base - {stat.base_stat} effort - {stat.effort}</p>
                            )
                        })}
                    </div>
                </div>}
            {errors.length > 0 && <p>{errors}</p>}
        </div>
    )
}

export default Form
