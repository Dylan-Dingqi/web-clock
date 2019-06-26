
function tick() {
    
    var time = new Date();
    // var time = new Date("December 2, 1995 03:01:00");

    var hour = time.toLocaleString("en-GB", { hour: "2-digit" });
    var min = time.toLocaleString("en-GB", { minute: "numeric" });
    var sec = time.toLocaleString("en-GB", { second: "numeric" });


    var date = time.toLocaleDateString("en-us", {day: "numeric"});
    var day = time.toLocaleDateString("en-us", {weekday: "long"});
    var month = time.toLocaleString("en-us", { month: "long" });
    var year = time.getFullYear();


    if      (date == 1)  { date = "1st"; }
    else if (date == 2)  { date = "2nd"; }
    else if (date == 3)  { date = "3rd"; }
    else if (date == 21) { date = "21st"; }
    else if (date == 22) { date = "22nd"; }
    else if (date == 23) { date = "23rd"; }
    else if (date == 31) { date = "31st"; }
    else            { date = date + "th"; }

    // if (hour < 10) { hour = "0" + hour;}
    if (min < 10) { min = "0" + min;}
    if (sec < 10) { sec = "0" + sec;}

    document.querySelector(".day").innerHTML = day;
    document.querySelector(".date").innerHTML = date;
    document.querySelector(".year").innerHTML = year;
    document.querySelector(".month").innerHTML = month;

    document.querySelector(".hour").innerHTML = hour;
    document.querySelector(".min").innerHTML = min;
    document.querySelector(".sec").innerHTML = sec;
}
// tick();
setInterval(tick, 100);