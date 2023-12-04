import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const LocationSearch = lazy(() => import("./components/LocationSearch"));
const LocationResults = lazy(() => import("./components/LocationResults"));
const WeatherDisplay = lazy(() => import("./components/WeatherDisplay"));
const About = lazy(() => import("./components/About"));
import Footer from "./components/Footer";

function App() {
  const API_ROOT = `https://api.open-meteo.com/v1/forecast?format=json&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current_weather=true&`;
  let [locations, updateLocations] = useState([]);
  let [selection, updateSelection] = useState(null);
  let [info, updateInfo] = useState(null);

  const fetchData = useCallback(async () => {
    if (selection) {
      const response = await fetch(
        `${API_ROOT}latitude=${selection.latitude}&longitude=${selection.longitude}&timezone=${selection.timezone}`
      );
      const data = await response.json();
      updateLocations([]);
      updateInfo(data);
    }
  }, [selection, API_ROOT]);

  // Call fetchData when selection changes
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <BrowserRouter>
      <div id="wrapper">
        <header className="module">
          <h1 id="logo">Weather App</h1>
          <nav>
            <Link to="/">App</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LocationSearch
                    locations={locations}
                    updateLocations={updateLocations}
                  />
                  {locations.length > 0 && (
                    <LocationResults
                      locations={locations}
                      selection={selection}
                      updateSelection={updateSelection}
                    />
                  )}
                  {info && <WeatherDisplay info={info} selection={selection} />}
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
