import { createContext } from "react"

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
    const [games, setGames] = useState([]);

    useEffetc(() => {
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