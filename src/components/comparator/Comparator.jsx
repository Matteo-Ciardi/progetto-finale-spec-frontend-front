import { useState } from 'react';

import './comparator.css'

export default function Comparator({ games, availableGames }) {
    if (games.length === 0) return null;

    const [showList, setShowList] = useState(false);
    const [rightGame, setRightGame] = useState(null);

    const handleSelectGame = async (selectedId) => {
        try {
            const res = await fetch(`http://localhost:3001/games/${selectedId}`);
            const data = await res.json();
            setRightGame(data.game);
            setShowList(false);
        } catch (err) {
            console.error(err);
        }
    }

    const compareValues = (leftValue, rightValue, type) => {
        if (type === 'higherBetter')
            return leftValue > rightValue ? 'left' : leftValue < rightValue ? 'right' : 'equal';

        if (type === 'lowerBetter')
            return leftValue < rightValue ? 'left' : leftValue > rightValue ? 'right' : 'equal';

        return 'equal';
    }

    const priceResult = rightGame
        ? compareValues(games[0].price, rightGame.price, 'lowerBetter')
        : null;

    const ratingResult = rightGame
        ? compareValues(games[0].rating, rightGame.rating, 'higherBetter')
        : null;

    return (
        <div className="comparator-container">

            <div className="comparator-left">
                <h3>{games[0].title}</h3>
                <img src={games[0].image} alt={games[0].title} />

                <p>{games[0].category}</p>

                <p
                    style={{
                        color:
                            priceResult === 'left'
                                ? 'green'
                                : priceResult === 'right'
                                    ? 'red'
                                    : 'black'
                    }}
                >
                    Prezzo: €{games[0].price}
                </p>

                <p
                    style={{
                        color:
                            ratingResult === 'left'
                                ? 'green'
                                : ratingResult === 'right'
                                    ? 'red'
                                    : 'black'
                    }}
                >
                    Rating: {games[0].rating}
                </p>
            </div>

            <div className="comparator-right">
                {rightGame ? (
                    <>
                        <h3>{rightGame.title}</h3>
                        <img src={rightGame.image} alt={rightGame.title} />

                        <p>{rightGame.category}</p>

                        <p
                            style={{
                                color:
                                    priceResult === 'right'
                                        ? 'green'
                                        : priceResult === 'left'
                                            ? 'red'
                                            : 'black'
                            }}
                        >
                            Prezzo: €{rightGame.price}
                        </p>

                        <p
                            style={{
                                color:
                                    ratingResult === 'right'
                                        ? 'green'
                                        : ratingResult === 'left'
                                            ? 'red'
                                            : 'black'
                            }}
                        >
                            Rating: {rightGame.rating}
                        </p>    
                    </>
                ) : (
                    <>
                        <button
                            className="add-game-btn"
                            onClick={() => setShowList(!showList)}
                        >
                            +
                        </button>

                        {showList && (
                            <div className="game-selection-list">
                                {availableGames
                                    .filter(g => g.id !== games[0].id)
                                    .map(g => (
                                        <div
                                            key={g.id}
                                            className="game-option"
                                            onClick={() => handleSelectGame(g.id)}
                                        >
                                            {g.title}
                                        </div>
                                    ))}
                            </div>
                        )}
                    </>
                )}
            </div>


        </div>
    )
}