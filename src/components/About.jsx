export default function About() {
    return (

        <div className="module">
            <img className="img-me center" src="/povilas.jpg" alt="image" />
            <h2 className="center about-h2">Description</h2>
            <p className="tac1">
                A web app that fetches geolocation data from one API and uses that to fetch weather data from another.
            </p>
            <h2 >Technologies used</h2>
            <ul>
                <li>ReactJs</li>
                <li>React Router</li>
                <li>Fetch API</li>
                <li>https://api.open-meteo.com</li>
                <li>https://geocoding-api.open-meteo.com/</li>


            </ul>


            <div className="contact-links jcse">
                <a href="https://www.linkedin.com/in/povilas-urbonas-0a6a53a4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/PovilasU/povilas-weather-app" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    )
}

