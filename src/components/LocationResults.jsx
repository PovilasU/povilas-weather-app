export default function LocationResults({ locations, updateSelection }) {
    console.log("locatios")
    console.log(locations)
    function handler(location) {
        updateSelection(location);
    }
    return (
        <div id="location-results" className="module">
            {locations.map(location => (
                <div className="location" key={location.id}>
                    <div className="region">
                        <div>{location.country} </div>
                        <div className="subregion">{location.admin1} </div>
                    </div>
                    <div>
                        <button onClick={() => { handler(location) }}>
                            Select
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

