export const reformatDate = (dateStr) => {
    let dArr = dateStr.split("-");  // ex input: "2010-01-18"
    return dArr[2] + "/" + dArr[1] + "/" + dArr[0].substring(2); //ex output: "18/01/10"
}
// 2023-09-07T15:00


export const weather_interpretation = (code) => {
    let desc = "";
    if (code === 0) {

        desc = "Clear sky"

        /*
            return {
                desc: "Clear sky",
                img: "clearsky.jpg"
            }
        */
        /*
        
        desc ={ description: "asdads", img="sunny.jpg"}*/
    }
    if (code > 0 & code < 4) {
        desc = "Partly cloudy"
    }
    if (code > 44 & code < 56) {
        desc = "Fog"
    }
    if (code > 50 & code < 49) {
        desc = "Drizzle"
    }
    if (code > 55 & code < 58) {
        desc = "Freezing Drizzle"
    }
    if (code > 60 & code < 66) {
        desc = "Rain"
    }
    if (code > 65 & code < 68) {
        desc = "Freezing Rain"
    }
    if (code > 70 & code < 76) {
        desc = "Snow Fall"
    }
    if (code === 77) {
        desc = "Snow grains"
    }
    if (code > 79 & code < 83) {
        desc = "Rain showers"
    }
    if (code === 85 || code === 86) {
        desc = "Snow showers"
    }
    if (code > 94 & code < 100) {
        desc = "Thunderstorm "
    }

    return (desc)
}

const prefix0 = n => n < 10 ? "0" + n : n

export function formatDate(date) {
    date = new Date(date)
    let time = "";
    time += prefix0(date.getHours()) + ':'
    time += prefix0(date.getMinutes()) + ' '
    // time += date.getTimezoneOffset()
    return time
}