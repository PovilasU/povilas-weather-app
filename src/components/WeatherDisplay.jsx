
import { reformatDate, weather_interpretation, formatDate } from './utils'
import Forecast from './Forecast.jsx'


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


    // CEST
    // GMT+2:00




    return (
        <>
            <div className='current-weather module'>
                <h2 className="">Today</h2>
                <h3 className="center">

                    {selection.name},
                    {/* {selection.admin1},  */}
                    &nbsp;{selection.country} As of {currentTime}  BST
                </h3>
                <div>
                    {/* <h4>Today</h4> */}
                    <div>
                        <span className='heade-1'> {current_weather.temperature} &#176;C</span>
                    </div>
                    <span>{weather_interpretation(current_weather.weathercode)}</span> <br></br>
                    <span>day, {day_max_temp}&#176;C Night {day_min_temp}&#176;C</span>
                </div>

            </div>

            <Forecast info={info} type="Daily" />
            <Forecast info={info} type="Hourly" />


        </>
    )
}

