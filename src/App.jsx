
import LocationSearch from './components/LocationSearch';
import LocationResults from './components/LocationResults';
import WeatherDisplay from './components/WeatherDisplay';
import About from './components/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const API_ROOT = `https://api.open-meteo.com/v1/forecast?format=json&daily=temperature_2m_max,temperature_2m_min&`
  let [locations, updateLocations] = useState([])
  let [selection, updateSelection] = useState(null)
  let [info, updateInfo] = useState(null)

  async function handleSelectionChange() {
    console.log("33")
    if (selection) {
      let rest = await fetch(API_ROOT + `latitude=${selection.latitude}&longitude=${selection.longitude}&timezone=${selection.timezone}`);
      let data = await rest.json();
      console.log("test")
      console.log(data);
      updateLocations([]);
      updateInfo(data.daily);
    }
  }

  useEffect(() => {
    console.log("11")
    handleSelectionChange();
  }, [selection]);

  useEffect(() => {
    if (locations.length) {
      updateInfo(null);
    }
  }, [locations])

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
              <LocationSearch locatopns={locations} updateLocations={updateLocations} />
              {locations.length > 0 &&
                (<LocationResults
                  locations={locations}
                  selection={selection}
                  updateSelection={updateSelection}
                />
                )}
              {info && <WeatherDisplay info={info} selection={selection} />}


            </>)} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;
