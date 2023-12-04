export const reformatDate = (dateStr) => {
    let dArr = dateStr.split("-");  // ex input: "2010-01-18"
    return dArr[2] + "/" + dArr[1] + "/" + dArr[0].substring(2); //ex output: "18/01/10"
}

export const weather_interpretation = (code) => {
    let desc = "";
    if (code === 0) {
        desc = "Clear sky";
    } else if (code > 0 && code < 4) {
        desc = "Partly cloudy";
    } else if (code > 44 && code < 56) {
        desc = "Fog";
    } else if (code > 50 && code < 49) {
        desc = "Drizzle";
    } else if (code > 55 && code < 58) {
        desc = "Freezing Drizzle";
    } else if (code > 60 && code < 66) {
        desc = "Rain";
    } else if (code > 65 && code < 68) {
        desc = "Freezing Rain";
    } else if (code > 70 && code < 76) {
        desc = "Snow Fall";
    } else if (code === 77) {
        desc = "Snow grains";
    } else if (code > 79 && code < 83) {
        desc = "Rain showers";
    } else if (code === 85 || code === 86) {
        desc = "Snow showers";
    } else if (code > 94 && code < 100) {
        desc = "Thunderstorm";
    }
    return desc;
};

const prefix0 = n => n < 10 ? "0" + n : n;

export function formatDate(date) {
    date = new Date(date);
    let time = "";
    time += prefix0(date.getHours()) + ':';
    time += prefix0(date.getMinutes()) + ' ';
    return time;
}

export const filterTime = (time, currentTime) => {
    return time
        .filter((_, idx) => idx % 5 !== 0 && new Date(time[idx]) > currentTime)
        .slice(0, 5);
};