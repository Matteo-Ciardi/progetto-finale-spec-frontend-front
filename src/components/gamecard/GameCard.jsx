import { Link } from 'react-router-dom'
import { MdFavoriteBorder } from 'react-icons/md'

import './gamecard.css'

export default function GameCard({ games }) {
    return (
        <>
            {games.map(game => (
                <Link to={`/dettagli/${game.id}`} key={game.id}>
                    <div className='game-card'>
                        <div className="text-container">
                            <h3 className='game-title'>{game.title}</h3>
                            <span className='game-category'>{game.category}</span>
                        </div>
                        <div className='icon-container'>
                            <MdFavoriteBorder className='fav-icon' />
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}