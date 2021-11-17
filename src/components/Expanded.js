import React from 'react'
import {CardAbilitiesDiv, CardAbilitiesP, CardStatsP, CardH4} from '../utils/styled'

function Expanded({poke}) {
    return (
        <div>
            <CardAbilitiesDiv>
                <CardH4>Abilities -</CardH4>
                {poke.abilities.map((ability, idx) => {
                    return <CardAbilitiesP key={idx}>{ability.ability.name}</CardAbilitiesP>
                })}
            </CardAbilitiesDiv>
            <div>
                <CardH4>Stats</CardH4>
                {poke.stats.map((stat, idx) => {
                    return (
                        <CardStatsP key={idx}>{stat.stat.name}: base - {stat.base_stat} effort - {stat.effort}</CardStatsP>
                    )
                })}
            </div>
        </div>
    )
}

export default Expanded
