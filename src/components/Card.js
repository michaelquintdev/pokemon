import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Expanded from './Expanded'
import styled from 'styled-components';
import {CardDiv, CardTitle, CardTitleP, CardH2, Loading, Error} from '../utils/styled'

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

function Card(props) {
    const [poke, setPoke] = useState([])
    const [loading, setLoading] = useState(true)
    const [collapse, setCollapse] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get(props.pokemon.url)
            .then(res => {
                setPoke(res.data)
                setLoading(false)
            })
            .catch(error => {
                setError(error.response.data)
                setLoading(false)
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const collapseDiv = (e) => {
        setCollapse(!collapse)
    }

    return (
        <div>
            {loading 
                ? <Loading>Getting Pokemon: {props.pokemon.name}</Loading> 
                : <CardDiv>
                    <CardTitle>
                        <CardH2>{poke.name}</CardH2>
                        {poke.types.map((type,idx) => {
                            return <CardTitleP key={idx}>{type.type.name}</CardTitleP>
                        })}
                    </CardTitle>
                    {collapse ? <button onClick={collapseDiv}>+</button> 
                    : <ButtonDiv>
                        <Expanded poke={poke}/> 
                        <button onClick={collapseDiv}>-</button>
                    </ButtonDiv>}
                </CardDiv>
            }
            {error.length > 0 && <Error>{error}</Error>}
        </div>
    )
}

export default Card
