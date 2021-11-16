import axios from 'axios'
import React, {useEffect, useState} from 'react'

function Card(props) {
    const [poke, setPoke] = useState([])
    const [loading, setLoading] = useState(true)

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

    return (
        <div>
            {loading 
                ? <h3>Getting Pokemon</h3> 
                : <div>
                    <h2>{poke.name}</h2>
                    {poke.types.map((type,idx) => {
                        return <p>{type.type.name}</p>
                    })}
                    <div>
                        <div>
                            <h4>Abilities</h4>
                            {poke.abilities.map((ability, idx) => {
                                return <p>{ability.ability.name}, </p>
                            })}
                        </div>
                        <div>
                            <h4>Stats</h4>
                            {poke.stats.map((stat, idx) => {
                                return (
                                    <p key={idx}>{stat.stat.name}: base - {stat.base_stat} effort - {stat.effort}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Card
