import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import {CardDiv, CardTitle, CardTitleP, CardAbilitiesDiv, CardAbilitiesP, CardStatsP, CardH2, CardH4, Button, Loading, Error} from '../utils/styled'

const FormDiv = styled.div`
    display: flex;
    justify-content: center;
`
const NewForm = styled.form`
    size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Label = styled.label`
    display: flex;
    align-items: center;
`
const Input = styled.input`
    padding: 2%;
`
const Section = styled.section`
    display: flex;
    justify-content: center;
`

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
                setErrors('')
            }).catch(error => {
                setErrors(error.response.data)
                setLoading(false)
            })
    }

    return (
        <>
            <FormDiv>
                <NewForm onSubmit={onSubmit}>
                    <Label>Type a pokemon: 
                        <Input 
                            onChange={onChange}
                        />
                    </Label>
                    <Button>Submit</Button>
                </NewForm>
            </FormDiv>
            {pokemon.name && 
                <CardDiv>
                    <CardTitle>
                        <CardH2>{pokemon.name}</CardH2>
                        {pokemon.types.map((type,idx) => {
                            return <CardTitleP key={idx}>{type.type.name}</CardTitleP>
                        })}
                    </CardTitle>
                    <CardAbilitiesDiv>
                        <CardH4>Abilities</CardH4>
                        {pokemon.abilities.map((ability, idx) => {
                            return <CardAbilitiesP key={idx}>{ability.ability.name}</CardAbilitiesP>
                        })}
                    </CardAbilitiesDiv>
                    <div>
                        <CardH4>Stats</CardH4>
                        {pokemon.stats.map((stat, idx) => {
                            return (
                                <CardStatsP key={idx}>{stat.stat.name}: base - {stat.base_stat} effort - {stat.effort}</CardStatsP>
                            )
                        })}
                    </div>
                </CardDiv>}
                <Section>
                    {loading && <Loading>loading pokemon...</Loading>}
                    {errors.length > 0 && <Error>{errors}</Error>}
                </Section>
        </>
    )
}

export default Form
