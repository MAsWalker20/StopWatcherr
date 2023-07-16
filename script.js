const stopWatchTag = document.getElementsByClassName("stopwatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtontag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];

let seconds = 0 , minutes = 0 , hours = 0;

const startTime = () => {
    seconds += 1;
    if (seconds === 60) {
        seconds = 0;
        minutes += 1 ;
        
        if (minutes === 60) {
            minutes = 0 ;
            hours += 1;
        }
    }
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds ;
    const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes ;
    const hoursText = hours < 10 ? "0" + hours.toString() : hours ; 
    stopWatchTag.textContent = hoursText + ":" + minutesText + ":" + secondText;
    
};

let intervalId ;
startButtonTag.addEventListener("click", () => {
    intervalId = setInterval(startTime, 1000);
});

pauseButtonTag.addEventListener("click", () => {
    clearInterval(intervalId);
});

continueButtontag.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 1000);
})

restartButtonTag.addEventListener("click", () => {
    clearInterval(intervalId);
    (hours = 0) , (minutes = 0) , (seconds = 0) ;
    intervalId = setInterval(startTime , 1000);
})