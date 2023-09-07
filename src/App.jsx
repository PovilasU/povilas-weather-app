
import LocationSearch from './components/LocationSearch';
import LocationResults from './components/LocationResults';
import WeatherDisplay from './components/WeatherDisplay';
import About from './components/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

/*

*/

function App() {

  /*
    https://api.music.com/albums?artist=The Beatles&decade=1960s
      artist: "The Beatles",
      decade: "1960s"

      wind , humidity
      images,
      goto:free incon website
      
  */



  const API_ROOT = `https://api.open-meteo.com/v1/forecast?format=json&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current_weather=true&`
  let [locations, updateLocations] = useState([])
  let [selection, updateSelection] = useState(null)
  let [info, updateInfo] = useState(null)

  /*
      {info && (
        <div>{info.now} {info.temperature} </div>
      )}
  */

  async function handleSelectionChange() {

    if (selection) {
      let rest = await fetch(API_ROOT + `latitude=${selection.latitude}&longitude=${selection.longitude}&timezone=${selection.timezone}`);
      let data = await rest.json();
      console.log("test")
      console.log(data);
      updateLocations([]);
      updateInfo(data);
    }
  }

  useEffect(() => {
    handleSelectionChange();
  }, [selection]);

  useEffect(() => {
    if (locations.length) {
      updateInfo(null);
    }
  }, [locations])

  return (
    <BrowserRouter>
      <div id="wrapper">
        <header className="module">
          <h1 id="logo">Weather App</h1>
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
        <footer>
          <p>Author: Povilas Urbonas</p>
          &copy; 2023</footer>
      </div>
    </BrowserRouter>
  )
}

export default App;
