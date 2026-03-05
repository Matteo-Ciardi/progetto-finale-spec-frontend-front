import { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

import GameCard from '../../components/gamecard/GameCard'

import './home.css'

export default function Home() {
    const { games } = useContext(GlobalContext)
    const [query, setQuery] = useState('')

    const handleSearch = (value) => {
        setQuery(value)
    }

    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <>
            <div className='home-container'>
                <section className='filters'>
                    <input
                        type='text'
                        placeholder='Cerca..'
                        value={query}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </section>
                <section>
                    <GameCard games={filteredGames} />
                </section>
            </div>
        </>
    )
}