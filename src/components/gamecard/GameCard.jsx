

import './gamecard.css'

export default function GameCard({ games }) {
    return (
        <div className='game-card-container'>
            {games.map(game => (
                <div className='game-card' key={game.id}>
                    <h3 className='game-title'>{game.title}</h3>
                    <span className='game-category'>{game.category}</span>
                </div>
            ))}
        </div>
    )
}