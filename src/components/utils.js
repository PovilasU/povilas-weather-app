export const reformatDate = (dateStr) => {
    let dArr = dateStr.split("-");  // ex input: "2010-01-18"
    return dArr[2] + "/" + dArr[1] + "/" + dArr[0].substring(2); //ex output: "18/01/10"
}
// 2023-09-07T15:00