import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { RxReset } from 'react-icons/rx'

import GameCard from '../../components/gamecard/GameCard'
import useFilters from '../../hooks/useFilters'

import './favorites.css'

export default function Favorites() {
    const { favorites } = useContext(GlobalContext)
    const {
        query,
        setQuery,
        categoryFilter,
        setCategoryFilter,
        sort,
        setSort,
        filteredGames
    } = useFilters(favorites)
    
    return (
        <>
                    <div className='home-container'>
                        <section className='filters'>
                            <input
                                className='searchbar'
                                type='text'
                                placeholder='Cerca..'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <div className='cat-buttons'>
                                <div className="cat-header">
                                    <span className='cat-title'>Categorie</span>
                                    <button
                                        onClick={() => setCategoryFilter('all')}
                                        className='reset-button'>
                                        <RxReset />
                                    </button>
                                </div>
                                <button
                                    onClick={() => setCategoryFilter('RPG')}
                                    className='cat-button'>
                                    RPG
                                </button>
                                <button
                                    onClick={() => setCategoryFilter('Action RPG')}
                                    className='cat-button'>
                                    Action RPG
                                </button>
                                <button
                                    onClick={() => setCategoryFilter('Metroidvania')}
                                    className='cat-button'>
                                    Metroidvania
                                </button>
                                <button
                                    onClick={() => setCategoryFilter('Management Simulation')}
                                    className='cat-button'>
                                    Management Simulation
                                </button>
                                <button
                                    onClick={() => setCategoryFilter('Farming Simulation')}
                                    className='cat-button'>
                                    Farming Simulation
                                </button>
                                <button
                                    onClick={() => setCategoryFilter('Roguelike')}
                                    className='cat-button'>
                                    Roguelike
                                </button>
                                <button
                                    onClick={() => setCategoryFilter('CRPG')}
                                    className='cat-button'>
                                    CRPG
                                </button>
                            </div>
                        </section>
                        <section>
                            <label className='orderby-label'>
                                Ordina per
                                <select
                                    onChange={(e) => setSort(e.target.value)}
                                    className='order-by'
                                    defaultValue={'titleAsc'}
                                >
                                    <option
                                        value='categoryAsc'
                                    >
                                        Categoria A-Z
                                    </option>
                                    <option
                                        value='categoryDesc'
                                    >
                                        Categoria Z-A
                                    </option>
                                    <option
                                        value='titleAsc'
                                    >
                                        Titolo A-Z
                                    </option>
                                    <option
                                        value='titleDesc'
                                    >
                                        Titolo Z-A
                                    </option>
                                </select>
                            </label>
                            <div className='game-card-container'>
                                <GameCard games={filteredGames} />
                            </div>
                        </section>
                    </div>
                </>
    )
}