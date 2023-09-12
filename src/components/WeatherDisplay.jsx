
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

            {/* <center>
                <div className='module '>
                    <h2>Today's Forecast for  {selection.name}, &nbsp;{selection.country}</h2>
                    <table border="1" >
                        <tbody>
                            <tr border="1">
                                <th>Morning</th>
                                <th>Afternoon</th>
                                <th>Evening</th>
                                <th>Overnight</th>
                            </tr >
                            <tr border="1">
                                <td>22 &#176;C</td>
                                <td>32 &#176;C</td>
                                <td>31 &#176;C</td>
                                <td>15 &#176;C</td>
                            </tr>
                        </tbody>
                    </table>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </center> */}


            <table id="weather-display" className="module">
                <caption><h2>Daily Forecast</h2></caption>
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



            <Forecast info={info} type="Daily" />
            <Forecast info={info} type="Hourly" />


        </>
    )
}

