import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/home/Home'
import Comparator from './pages/comparator/Comparator'
import Favorites from './pages/favorites/Favorites'

import './App.css'
import GlobalProvider from './context/GlobalContext'

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path='comparatore' element={<Comparator />} />
              <Route path='preferiti' element={<Favorites />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
