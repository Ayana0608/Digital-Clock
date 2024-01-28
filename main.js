const time = document.querySelector(".time");

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeClock = "";

    if (hours < 12) {
        timeClock = "PM";
    } else {
        timeClock = "AM";
    }

    if (hours > 24) {
        hours -= 24;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + ":" + timeClock;
}, 1000);
