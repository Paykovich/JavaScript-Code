const  time = {
    hours: 24,
    minutes: 25,
    seconds: 20
};

// const changingSeconds = (second) => {
//     if (second + time.seconds >= 60) {
//         let inMin = Math.floor((time.seconds + second) / 60);
//         time.seconds = (time.seconds + second) % 60;
//         changingMinutes(inMin);
//     } 
//     else {
//         time.seconds += second;
//     }
//   }
// const changingMinutes = (minute) => {
//     if (time.minutes + minute >= 60) {
//         let InHour = Math.floor((time.minutes + minute) / 60);
//         time.minutes = (time.minutes + minute) % 60;
//         changinHours(InHour);
//     } 
//     else {
//         time.minutes += minute;
//     }
//   }
// const changinHours = (hour) => {
//     if (hour + time.hours >= 24) {
//         time.hours = (time.hours + hour) % 24;
//     } 
//     else {
//         time.hours += hour;
//     }
// }

// changingSeconds(105)
// changingMinutes(25)
// changinHours(2)

const timeDisplay = (time) => {
    let timeString = " "
    timeString += String(time.hours).padStart(2, "0") 
    timeString = ":"
    timeString += String(time.minutes).padStart(2, "0") 
    timeString = ":"
    timeString += String(time.seconds).padStart(2, "0") 
    return timeString;
}

console.log(timeDisplay(time))
