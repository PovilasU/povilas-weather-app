import { useState } from "react";
import Formfield from "./FormField";

const API_ROOT =
  "https://geocoding-api.open-meteo.com/v1/search?format=json&count=10";

export default function LocationSearch(props) {
  const [errorMsg, setErrorMsg] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    setErrorMsg(null);
    const form = e.currentTarget;
    const location = form.location.value;
    const res = await fetch(`${API_ROOT}&name=${location}`);
    const locations = await res.json();
    if (locations.results) {
      props.updateLocations(locations.results);
    } else {
      setErrorMsg("No results found");
      props.updateLocations([]);
    }
  }

  return (
    <form id="location-search" className="module" onSubmit={handleSearch}>
      <h2>Enter a location</h2>
      <Formfield title="Location" name="location" placeholder="Location" />
      <div className="jcsb">
        <div className="error">{errorMsg}</div>
        <button>Search</button>
      </div>
    </form>
  );
}
