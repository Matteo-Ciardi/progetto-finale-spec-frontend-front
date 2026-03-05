import { createContext, useState, useEffect } from "react"

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
    const [games, setGames] = useState([]);

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
                { games }
            }>
            {children}
        </GlobalContext.Provider>
    )
}