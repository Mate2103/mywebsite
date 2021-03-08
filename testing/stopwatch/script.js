window.onload = function () {


var stop1 = false;
var óra = 0; 
var perc = 0;
var másodperc = 0;
var Interval
var buttonStart = document.getElementById("start");
var buttonStop = document.getElementById("stop");
var buttonClear = document.getElementById("clear");
var appendHours = document.getElementById("ora");
var appendMinute = document.getElementById("p");
var appendSecond = document.getElementById("mp");

buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(Timer , 1000);
}
buttonStop.onclick = function() {
    clearInterval(Interval);
}
buttonClear.onclick = function() {
    clearInterval(Interval);
    másodperc = 0;
    óra = 0;
    perc = 0;
    appendHours.innerHTML = "00";
    appendMinute.innerHTML = "00";
    appendSecond.innerHTML = "00";
}
function Timer () {
    másodperc++;
    if (másodperc < 10) appendSecond.innerHTML = "0" + másodperc;
    if (másodperc > 9) appendSecond.innerHTML = másodperc;
    if (másodperc == 60) {
        másodperc = 0;
        appendSecond.innerHTML = "00";
        perc = 1;
    } 
    if (perc < 10) appendMinute.innerHTML = "0" +perc;
    if (perc > 9) appendMinute.innerHTML = perc; 
    if (perc = 60) {
        perc = 0;
        appendMinute.innerHTML = "00";
        óra = 1;
    }

}


}