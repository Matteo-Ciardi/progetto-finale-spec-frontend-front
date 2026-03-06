import { useContext, useState, useMemo } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { RxReset } from 'react-icons/rx'

import GameCard from '../../components/gamecard/GameCard'

import './home.css'

export default function Home() {
    const { games } = useContext(GlobalContext)
    const [query, setQuery] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sort, setSort] = useState('titleAsc')

    const handleSearch = (value) => {
        setQuery(value)
    }

    const handleCategory = (category) => {
        setCategoryFilter(category)
    }

    const handleSort = (sort) => {
        setSort(sort)
    }

    const filteredGames = useMemo(() => {
        const result = [...games].filter(game => {
            const matchTitle = game.title
                .toLowerCase()
                .includes(query.toLowerCase())

            const matchCategory =
                categoryFilter === 'all' || game.category === categoryFilter

            return matchTitle && matchCategory
        })

        if (sort === 'categoryAsc') {
            result.sort((a, b) => {
               return a.category.localeCompare(b.category)
            })
        }

        if (sort === 'categoryDesc') {
            result.sort((a, b) => {
               return b.category.localeCompare(a.category)
            })
        }

        if (sort === 'titleAsc') {
            result.sort((a, b) => {
               return a.title.localeCompare(b.title)
            })
        }

        if (sort === 'titleDesc') {
            result.sort((a, b) => {
               return b.title.localeCompare(a.title)
            })
        }

        return result

    }, [games, query, categoryFilter, sort])

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
                    <label className='orderby-label'>
                        Ordina per
                        <select
                            onChange={(e) => handleSort(e.target.value)}
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