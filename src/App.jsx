import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/home/Home'
import Comparator from './pages/comparator/Comparator'
import Favorites from './pages/favorites/Favorites'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='comparatore' element={<Comparator />} />
            <Route path='preferiti' element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
