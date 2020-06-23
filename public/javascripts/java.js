function realtimeOclock(){
    var rtClock =new Date();

    var hours = rtClock.getHours();
    var minute = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();


    var apPm = (hours<12) ? "AM" : "PM"
    hours =  (hours>12)? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minute = ("0" + minute).slice(-2);
    seconds = ("0"+ seconds).slice(-2);

    document.getElementById('clock').innerHTML = hours + " : " +minute + " : " + seconds + " "+apPm;
    var t = setTimeout(realtimeOclock,500) ;
}
