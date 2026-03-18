import { useState } from "react";
import "./comparator.css";

export default function Comparator({ games, availableGames }) {
  if (!games || games.length === 0) return null;

  const [selectedGames, setSelectedGames] = useState([games[0]]);
  const [showList, setShowList] = useState(false);

  const firstGame = games[0];

  const handleSelectGame = async (selectedId) => {
    if (selectedGames.length >= 4) return;

    try {
      const res = await fetch(`http://localhost:3001/games/${selectedId}`);
      const data = await res.json();

      setSelectedGames((prev) => [...prev, data.game]);
      setShowList(false);
    } catch (err) {
      console.error(err);
    }
  };

  const removeGame = (id) => {
    setSelectedGames((prev) => prev.filter((game) => game.id !== id));
  };

  const priceResult = selectedGames.map((game) =>
    game.price < firstGame.price
      ? "better"
      : game.price > firstGame.price
        ? "worse"
        : "equal",
  );

  const ratingResult = selectedGames.map((game) =>
    game.rating > firstGame.rating
      ? "better"
      : game.rating < firstGame.rating
        ? "worse"
        : "equal",
  );

  return (
    <div className="comparator-container">
      {selectedGames.map((game, i) => (
        <div key={game.id} className="comparator-card">
          <h3>{game.title}</h3>
          {i !== 0 && ( 
            <button
              className="remove-game-btn"
              onClick={() => removeGame(game.id)}
            >
              ×
            </button>
          )}
          <img src={game.image} alt={game.title} />

          <p>{game.category}</p>

          <p
            style={{
              color:
                priceResult[i] === "better"
                  ? "green"
                  : priceResult[i] === "worse"
                    ? "red"
                    : "white",
            }}
          >
            Prezzo: €{game.price}
          </p>

          <p
            style={{
              color:
                ratingResult[i] === "better"
                  ? "green"
                  : ratingResult[i] === "worse"
                    ? "red"
                    : "white",
            }}
          >
            Rating: {game.rating}
          </p>
        </div>
      ))}

      {selectedGames.length < 4 && (
        <div className="comparator-add">
          <button
            className="add-game-btn"
            onClick={() => setShowList(!showList)}
          >
            +
          </button>

          {showList && (
            <div className="game-selection-list">
              {availableGames
                .filter((g) => !selectedGames.some((sg) => sg.id === g.id))
                .map((g) => (
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
        </div>
      )}
    </div>
  );
}
