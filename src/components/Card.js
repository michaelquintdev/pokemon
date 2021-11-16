import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Expanded from './Expanded'

function Card(props) {
    const [poke, setPoke] = useState([])
    const [loading, setLoading] = useState(true)
    const [collapse, setCollapse] = useState(true)

    useEffect(() => {
        axios.get(props.pokemon.url)
            .then(res => {
                setPoke(res.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [])

    const collapseDiv = (e) => {
        setCollapse(!collapse)
    }

    return (
        <div>
            {loading 
                ? <h3>Getting Pokemon: {props.pokemon.name}</h3> 
                : <div>
                    <h2>{poke.name}</h2>
                    {poke.types.map((type,idx) => {
                        return <p>{type.type.name}</p>
                    })}
                    {collapse ? <button onClick={collapseDiv}>+</button> 
                    : <div><Expanded poke={poke}/> 
                    <button onClick={collapseDiv}>-</button></div>}
                </div>
            }
        </div>
    )
}

export default Card
