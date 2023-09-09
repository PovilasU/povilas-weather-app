
import { reformatDate, weather_interpretation, formatDate } from './utils'


// reformating minutes
// https://pixabay.com/
//svelte
//vue


export default function WeatherDisplay({ info, selection }) {

    const {
        daily,
        hourly,
        current_weather
    } = info

    const {
        temperature_2m_max,
        temperature_2m_min,
        time
    } = daily

    const currentTime = formatDate(current_weather.time)
    const day_min_temp = temperature_2m_min[Object.keys(temperature_2m_min)[0]]
    const day_max_temp = temperature_2m_max[Object.keys(temperature_2m_max)[0]]







    return (
        <>
            <div className='current-weather'>
                <h2 className="">Today</h2>
                <h3 className="center">

                    {selection.name},
                    {/* {selection.admin1},  */}
                    &nbsp;{selection.country} As of {currentTime}
                </h3>
                <div>
                    {/* <h4>Today</h4> */}
                    <div>
                        <span>temperature {current_weather.temperature} &#176;C</span>
                    </div>
                    <span>{weather_interpretation(current_weather.weathercode)}</span> <br></br>
                    <span>day, {day_max_temp}&#176;C Night {day_min_temp}&#176;C</span>
                </div>

            </div>

            {/* <table id="weather-display" className="module">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Min</th>
                        <th>Max</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(time).map((day, i) => (
                        <tr key={day}>
                            <td>{reformatDate(day)}</td>
                            <td>{Object.values(temperature_2m_min)[i]}&#176;C</td>
                            <td>{Object.values(temperature_2m_max)[i]}&#176;C</td>
                        </tr>
                    ))}

                </tbody>
            </table> */}
        </>
    )
}

