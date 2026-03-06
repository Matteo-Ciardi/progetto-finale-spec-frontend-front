import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

import GameCard from '../../components/gamecard/GameCard'

import './favorites.css'

export default function Favorites() {
    const { favorites } = useContext(GlobalContext)

    return (
        <div className='game-card-container'>
            <GameCard games={favorites} />
        </div>
    )
}