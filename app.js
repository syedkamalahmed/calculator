
var date = new Date("2023-12-31T23:59:59").getTime();

var countdownInterval = setInterval(countdown, 1000);

function countdown() {
    var currentDate = new Date().getTime();
    var differTime = date - currentDate;

    if (differTime <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("reverseStopwatch").innerHTML = "Countdown expired!";
    } else {
        var day = Math.floor(differTime / (1000 * 60 * 60 * 24));
        var hours = Math.floor((differTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((differTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((differTime % (1000 * 60)) / 1000);

        const countdownText = `${day}d ${hours}h ${minutes}min ${seconds}sec`;
        document.getElementById("reverseStopwatch").innerHTML = countdownText;
    }
}