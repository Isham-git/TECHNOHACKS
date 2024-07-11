let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;
// var timer
// var laps =document.querySelector('.laps')
document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
}); 

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}

// function getTimer(){
// return (h<10 ? "0" + h : h) + " : "+ (m<10 ? "0" + m : m) + " 0 "(s<10 ? "0" + s : s) + " : " +(ms<10 ? "0" + ms :ms) 
// }
// function lap()
// {
//     if(timer){
//         var li=document.createElement("li")
//         li.innerHTML = getTimer()
//         laps.appendChild(li)
//     }
// }