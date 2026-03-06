import { useContext, useState, useMemo } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { RxReset } from 'react-icons/rx'

import GameCard from '../../components/gamecard/GameCard'

import './home.css'

export default function Home() {
    const { games } = useContext(GlobalContext)
    const [query, setQuery] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('all');

    const handleSearch = (value) => {
        setQuery(value)
    }

    const handleCategory = (category) => {
        setCategoryFilter(category)
    }

    const filteredGames = useMemo(() => {
        return games.filter(game => {
            const matchTitle = game.title
                .toLowerCase()
                .includes(query.toLowerCase())

            const matchCategory =
                categoryFilter === 'all' || game.category === categoryFilter

            return matchTitle && matchCategory
        })
    }, [games, query, categoryFilter])

    return (
        <>
            <div className='home-container'>
                <section className='filters'>
                    <input
                        className='searchbar'
                        type='text'
                        placeholder='Cerca..'
                        value={query}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <div className='cat-buttons'>
                        <div className="cat-header">
                            <span className='cat-title'>Categorie</span>
                            <button
                                onClick={() => handleCategory('all')}
                                className='reset-button'>
                                <RxReset />
                            </button>
                        </div>
                        <button
                            onClick={() => handleCategory('RPG')}
                            className='cat-button'>
                            RPG
                        </button>
                        <button
                            onClick={() => handleCategory('Action RPG')}
                            className='cat-button'>
                            Action RPG
                        </button>
                        <button
                            onClick={() => handleCategory('Metroidvania')}
                            className='cat-button'>
                            Metroidvania
                        </button>
                        <button
                            onClick={() => handleCategory('Management Simulation')}
                            className='cat-button'>
                            Management Simulation
                        </button>
                        <button
                            onClick={() => handleCategory('Farming Simulation')}
                            className='cat-button'>
                            Farming Simulation
                        </button>
                        <button
                            onClick={() => handleCategory('Roguelike')}
                            className='cat-button'>
                            Roguelike
                        </button>
                        <button
                            onClick={() => handleCategory('CRPG')}
                            className='cat-button'>
                            CRPG
                        </button>
                    </div>
                </section>
                <section>
                    <GameCard games={filteredGames} />
                </section>
            </div>
        </>
    )
}