import './css/App.css'
import NavBar from './components/NavBar'
import Favourite from './pages/Favourites'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext.jsx'

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favourites' element={<Favourite />}></Route>
        </Routes>
      </main>
      
    </MovieProvider>
  )
}

export default App
