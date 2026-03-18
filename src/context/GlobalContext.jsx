import { createContext, useState, useEffect } from "react"

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
    const [games, setGames] = useState([]);
    const [favorites, setFavorites] = useState(() => {
        const stored = localStorage.getItem('favorites');
        return stored ? JSON.parse(stored) : [];
    });

    const addFavorite = (game) => {
        setFavorites(prev => [...prev, game]);
    }

    const removeFavorite = (id) => {
        setFavorites(prev => prev.filter(g => g.id !== id))
    }

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const res = await fetch('http://localhost:3001/games');
                const data = await res.json();
                setGames(data)
            } catch (error) {
                console.error('Errore nella fetch:', error)
            }
        };

        fetchGames();
    }, [])

    return (
        <GlobalContext.Provider
            value={
                {
                    games,
                    favorites,
                    addFavorite,
                    removeFavorite
                }
            }>
            {children}
        </GlobalContext.Provider>
    )
}