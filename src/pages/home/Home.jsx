import { useContext, useState, useMemo } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

import GameCard from '../../components/gamecard/GameCard'

import './home.css'

export default function Home() {
    const { games } = useContext(GlobalContext)
    const [query, setQuery] = useState('')

    const handleSearch = (value) => {
        setQuery(value)
    }

    const filteredGames = useMemo(() => {
        return games.filter(game => 
            game.title.toLowerCase().includes(query.toLowerCase())
        )
    }, [games, query])

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
                    <div className='checkboxes'>
                        <label htmlFor='category' className='cb-label'>
                            <input
                                type='checkbox'
                                id='category'
                            />
                            RPG
                        </label>
                        <label htmlFor='category' className='cb-label'>
                            <input
                                type='checkbox'
                                id='category'
                            />
                            Action RPG
                        </label>
                        <label htmlFor='category' className='cb-label'>
                            <input
                                type='checkbox'
                                id='category'
                            />
                            Metroidvania
                        </label>
                        <label htmlFor='category' className='cb-label'>
                            <input
                                type='checkbox'
                                id='category'
                            />
                            Management Simulation
                        </label>
                        <label htmlFor='category' className='cb-label'>
                            <input
                                type='checkbox'
                                id='category'
                            />
                            Farming Simulation
                        </label>
                        <label htmlFor='category' className='cb-label'>
                            <input
                                type='checkbox'
                                id='category'
                            />
                            Roguelike
                        </label>
                        <label htmlFor='category' className='cb-label'>
                            <input
                                type='checkbox'
                                id='category'
                            />
                            CRPG
                        </label>
                    </div>
                </section>
                <section>
                    <GameCard games={filteredGames} />
                </section>
            </div>
        </>
    )
}