
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

var count = 0;
var url = ["img/noaa-99F4mC79j1I-unsplash.jpg", 
            "img/photo-1560471828-3c91fd5f25d1.jpg",
            "img/claudio-testa--SO3JtE3gZo-unsplash.jpg",
            "img/photo-1548407260-da850faa41e3.jpg",
            ];
var btn = document.querySelector(".set_bg_btn");
var change_btn = document.querySelector(".change_bg_btn");
var input = document.querySelector("input");
var page = document.querySelector(".page");


btn.addEventListener("click", setBackground);
change_btn.addEventListener("click", changeBackground);

function setBackground() {
    if (input.value == ""){
        page.style.backgroundImage = "url(img/noaa-99F4mC79j1I-unsplash.jpg)";
    }
    else {
        page.style.backgroundImage = "url(" +  input.value + ")";
    }
}
function changeBackground() {
    count += 1;
    count = count % url.length;
    page.style.backgroundImage = "url(" +  url[count] + ")";
}