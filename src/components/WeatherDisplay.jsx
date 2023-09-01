export default function WeatherDisplay({ info, selection }) {
    return (
        <>
            <h3>{selection.name}, {selection.admin1}, {selection.country}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Min</th>
                        <th>Max</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(info.time).map((day, i) => (
                        <tr key={day}>
                            <td>{day}</td>
                            <td>{Object.values(info.temperature_2m_min)[i]}&#176;C</td>
                            <td>{Object.values(info.temperature_2m_max)[i]}&#176;C</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

