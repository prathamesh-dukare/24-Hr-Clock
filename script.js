let myDate = new Date();
function getTime() {
    let myDate = new Date();
    let timeobj = {
        "h": myDate.getHours(),
        "m": myDate.getMinutes(),
        "s": myDate.getSeconds()
    };

    const keys = Object.keys(timeobj);
    keys.forEach((key, index) => {
        if (timeobj[key] < 10) {
            timeobj[key] = ("0" + String(timeobj[key]))
        }
    });

    let timestr = `${timeobj["h"]}:${timeobj["m"]}:${timeobj["s"]}`
    // console.log(timestr)
    let span = document.querySelector(".span");
    span.innerText = timestr;
    let span2 = document.querySelector(".inner-span");
    let day = myDate.getDay()
    if (day == 0) {
        day = "Sunday";
    } else if (day == 1) {
        day = "Monday";
    } else if (day == 2) {
        day = "Tuesday";
    } else if (day == 3) {
        day = "Wednessday";
    } else if (day == 4) {
        day = "Thursday";
    }
    else if (day == 5) {
        day == "Friday";
    } else if (day == 6) {
        day == "Saturday"
    }


    let daystr = `${day} ${myDate.getDate()}/0${myDate.getMonth() + 1}/${myDate.getFullYear()}`
    span2.innerText = daystr;
}

function status() {
    let hours = myDate.getHours();
    let heroImage = document.querySelector(".hero-sec"); 
    // console.log((hours >= 18 || hours <= 5))
    if (hours >= 6 && hours <= 9) {
        heroImage.innerHTML = "<img src='/img/morning.svg' alt='Hero_Image'></img>"
    } else if (hours >= 10 && hours <= 12) {
        heroImage.innerHTML = "<img src='/img/after_morning.svg' alt='Hero_Image'></img>"
    } else if (hours >= 13 && hours <= 15) {
        heroImage.innerHTML = "<img src='/img/afternoon.svg' alt='Hero_Image'></img>"
    } else if (hours >= 18 || hours <= 5) {
        heroImage.innerHTML = "<img src='/img/night.svg' alt='Hero_Image'></img>"
    }
    // else if (hours >= 21 && hours <= 23) {
    //     heroImage.innerHTML = "<img src='/img/1.jpg' alt='Hero_Image'></img>"
    // }
}

setInterval(() => {
    getTime(), 1000
})

setInterval(() => {
    status(), 1000
})