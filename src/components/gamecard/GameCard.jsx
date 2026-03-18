import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { Link } from 'react-router-dom'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import './gamecard.css'

export default function GameCard({ games }) {
    const { favorites, addFavorite, removeFavorite } = useContext(GlobalContext);

    const toggleFavorite = (game) => {
        const isFav = favorites.some(f => f.id === game.id)

        if (isFav) {
            removeFavorite(game.id);
        } else {
            addFavorite(game)
        }
    }

    return (
        <>
            {games.map(game => {
                const isFav = favorites.some(f => f.id === game.id);

                return (
                    < div className='game-card' >
                        <div className="text-container">
                            <h3 className='game-title'>{game.title}</h3>
                            <span className='game-category'>{game.category}</span>
                        </div>
                        <div className="right-container">
                            <div
                                onClick={() => toggleFavorite(game)}
                                className='icon-container'
                            >
                                {isFav ? (
                                    <MdFavorite className='fav-icon fav-active' />
                                ) : (
                                    <MdFavoriteBorder className='fav-icon' />
                                )}
                            </div>
                            <Link className='details-button' to={`/dettagli/${game.id}`} key={game.id}>
                                <span>Dettagli</span>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </>
    )
}