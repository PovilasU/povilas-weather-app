
import { reformatDate } from './utils'


// reformating minutes
// https://pixabay.com/
//svelte
//vue
const prefix0 = n => n < 10 ? "0" + n : n

function formatDate(date) {
    date = new Date(date)
    let time = "";
    time += prefix0(date.getHours()) + ':'
    time += prefix0(date.getMinutes()) + ' '
    // time += date.getTimezoneOffset()
    return time
}

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

    return (
        <>
            <div className='current-weather'>
                <h3 className="center">
                    {selection.name}, {selection.admin1}, {selection.country} As of {currentTime}
                </h3>
                <div>
                    <h4>Today</h4>
                    <div>temperature 31</div>
                    <div>suny</div>
                    <div>day,32 Night 18</div>
                </div>

            </div>

            <table id="weather-display" className="module">
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
            </table>
        </>
    )
}

