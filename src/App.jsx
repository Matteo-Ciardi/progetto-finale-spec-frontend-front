import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/home/Home'
import Favorites from './pages/favorites/Favorites'

import './App.css'
import GlobalProvider from './context/GlobalContext'
import GameDetail from './pages/gamedetail/GameDetail'

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path='preferiti' element={<Favorites />} />
              <Route path='dettagli/:id' element={<GameDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
