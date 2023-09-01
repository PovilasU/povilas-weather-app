export default function LocationResults({ locations, updateSelection }) {
    console.log("locatios")
    console.log(locations)
    function handler(location) {
        updateSelection(location);
    }
    return (
        <div>
            {locations.map(location => (
                <div key={location.id}>
                    <div>
                        <div>{location.country} </div>
                        <div>{location.admin1} </div>
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

