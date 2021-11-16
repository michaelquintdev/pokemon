import React from 'react'

function Expanded({poke}) {
    return (
        <div>
            <div>
                <h4>Abilities</h4>
                {poke.abilities.map((ability, idx) => {
                    return <p key={idx}>{ability.ability.name}, </p>
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
    )
}

export default Expanded
