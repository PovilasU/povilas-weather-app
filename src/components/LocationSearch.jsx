import { useState } from 'react'
import Formfield from './FormField';
export default function LocationSearch(props) {
    const API_ROOT = 'https://geocoding-api.open-meteo.com/v1/search?format=json&count=10';
    let [errorMsg, setErrorMsg] = useState(null)

    async function handleSearch(e) {
        e.preventDefault()
        setErrorMsg(null)
        let form = e.currentTarget
        let location = form.location.value
        let res = await fetch(API_ROOT + `&name=${location}`)
        let locations = await res.json()
        if (locations.results) {
            props.updateLocations(locations.results)
        } else {
            setErrorMsg('No results found')
            props.updateLocations([])
        }
    }



    return (
        <form onSubmit={handleSearch}>
            <h2>Enter a location</h2>
            <Formfield title="Location" name="location" />
            <div>
                <div>
                    {errorMsg}
                </div>
                <button>
                    Search
                </button>
            </div>
        </form>
    )
}

