import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext'

import './gamecard.css'

export default function GameCard() {
    const { games } = useContext(GlobalContext);
    return (
        <>
            {games.map(game => (
                <div className='game-card' key={game.id}>
                    <h3 className='game-title'>{game.title}</h3>
                    <span className='game-category'>{game.category}</span>
                </div>
            ))}
        </>
    )
}