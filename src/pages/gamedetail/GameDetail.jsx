import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'

import Comparator from '../../components/comparator/Comparator';

import './gamedetail.css'

export default function GameDetail() {
    const { id } = useParams();
    const { games } = useContext(GlobalContext)
    const [game, setGame] = useState(null)
    const [compareList, setCompareList] = useState([]);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const res = await fetch(`http://localhost:3001/games/${id}`);
                const data = await res.json();
                console.log(data)
                setGame(data.game)
            } catch (error) {
                console.error('Errore nella fetch:', error)
            }
        };

        fetchGame();
    }, [id])

    if (!game) return <p>Gioco non trovato </p>

    const addToCompare = (game) => {
        if (!compareList.some(g => g.id === game.id)) {
            setCompareList([...compareList, game]);
        }
    }

    return (
        <>
            <div className="gamedetail-container">
                <div className="gamedetail-left">
                    <img src={game.image} alt={game.title} />
                    <div className="description">{game.description}</div>
                </div>

                <div className="gamedetail-right">
                    <h2>Informazioni</h2>
                    <p><b>Categoria:</b> {game.category}</p>
                    <p><b>Prezzo:</b> €{game.price}</p>
                    <p><b>Rating:</b> {game.rating}</p>
                    <p><b>Anno di uscita:</b> {game.releaseYear}</p>
                    <p><b>Developer:</b> {game.developer}</p>
                    <p><b>Publisher:</b> {game.publisher}</p>
                    {game.translated && <p><b>Tradotto:</b> Sì</p>}

                    <button
                        onClick={() => addToCompare(game)}
                    >
                        COMPARA
                    </button>
                </div>
            </div>
            <Comparator
                games={compareList}
                availableGames={games}
            />
        </>
    )
}