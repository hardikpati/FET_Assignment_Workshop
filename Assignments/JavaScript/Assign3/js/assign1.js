var date = new Date();
// var time = date.toLocaleString('en-US', { hour: 'numeric', hour12: true});

document.getElementById("date").innerHTML = date;

// var hour = date.getHours() % 12 || 12;
var hour = date.getHours();
// document.getElementById("hour").innerHTML = hour;

if (hour < 12) {
    document.getElementById("msg").innerHTML = "Good Morning!!!";
}

else if (hour >= 12 && hour <= 17) {
    document.getElementById("msg").innerHTML = "Good Afternoon!!!";
}

else {
    document.getElementById("msg").innerHTML = "Good Evening!!!";
}