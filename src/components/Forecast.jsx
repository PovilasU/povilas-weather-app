import { reformatDate, filterTime } from "./utils";

export default ({ info, type }) => {
  let { temperature_2m_max, temperature_2m_min, temperature_2m, time } =
    info[type.toLowerCase()];

  if (type === "Hourly") {
    const currentTime = new Date();
    time = filterTime(time, currentTime);
    temperature_2m = filterTime(temperature_2m, currentTime);
  }

  return (
    <>
      <h2>{type} Forecast</h2>
      <section className="week-forecast-wrapper module">
        {Object.values(time).map((day, i) => (
          <div key={day} className="week-forecast">
            <div>{reformatDate(day)}</div>
            {type === "Daily" ? (
              <>
                <div>{Object.values(temperature_2m_max)[i]}&#176;C</div>
                <div>{Object.values(temperature_2m_min)[i]}&#176;C</div>
              </>
            ) : (
              <>
                <div>{Object.values(temperature_2m)[i]}&#176;C</div>
              </>
            )}
          </div>
        ))}
      </section>
    </>
  );
};
