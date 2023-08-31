
import LocationSearch from './components/LocationSearch'
import LocationResults from './components/LocationResults'
import WeatherDisplay from './components/WeatherDisplay'
import About from './components/About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Weather App</h1>
          <nav>
            <Link to='/'>App</Link>
            <Link to='/about'>About</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={(<>
              <LocationSearch />
              <LocationResults />
              <WeatherDisplay />
            </>)}></Route>
            <Route path='/about' element={<About />} />
          </Routes>

        </main>

      </div>
    </BrowserRouter>
  )
}

export default App
