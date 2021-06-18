
var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("mint");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec
    if(msec === 100){
        msec = 0;
        sec++
        secHeading.innerHTML = sec;
    }
    else if(sec === 60){
            sec=0;
            min++;
            minHeading.innerHTML = min;
    }
}
function start(){
interval = setInterval(timer,10)
document.getElementById("start-btn").disabled = true;

}
function stop(){
clearInterval (interval)
document.getElementById("start-btn").disabled = false;
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
    document.getElementById("start-btn").disabled = false;
    dive.innerHTML = ""
} 
function lap(){
var li = document.createElement("li");
var text = document.createTextNode(min+" : "+sec+" : "+msec);

li.appendChild(text);

var dive = document.getElementById("dive");
dive.appendChild(li)

}
