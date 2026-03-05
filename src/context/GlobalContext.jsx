import { createContext } from "react"

export const GlobalContext = createContext()

export default function GlobalProvider() {
    return (
        <GlobalContext.Provider>
            
        </GlobalContext.Provider>
    )
}