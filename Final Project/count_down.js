"use strict"

// Use of JavaScript alerts for validation purposes. 3.2.6 C
var date = document.lastModified;
document.getElementById('mod').innerHTML = "The last modified time is " + date;

var newYearDay = new Date("December 31 2023, 12:00:00").getTime();

var x = setInterval(function()
{
    var currentDay = new Date().getTime();
    var distance = newYearDay - currentDay;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = "NewYear's Eve! " + days + "d" + hours + "h" + minutes + "m" + seconds + "s";

    if (distance < 0)
    {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Expired";
    }
    
}, 1000);






