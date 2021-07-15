let hourElement = document.querySelector(".hour");
let minuteElement = document.querySelector(".minute");
let secondElement = document.querySelector(".second");
let ampmElement = document.querySelector(".am-pm");

function buildTime() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    
    hourElement.innerText = hour;
    minuteElement.innerText = minute;
    secondElement.innerText = second;
    ampmElement.innerText = hour > 12 ? "pm" : "am";
}

setInterval(() => {
    buildTime();
}, 1);