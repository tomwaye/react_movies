import './App.css'
import NavBar from './components/NavBar'
import Favourite from './pages/Favourites'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favourites' element={<Favourite />}></Route>
        </Routes>
      </main>
      
    </>
  )
}

export default App
