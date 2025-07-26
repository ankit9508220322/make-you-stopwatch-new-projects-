let hr = document.getElementById("hour");
let mi = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){
let date = new Date();

let hh = date.getHours();
let mm = date.getMinutes();
let se = date.getSeconds();

let hROTATION = 30*hh+mm/2;
let mROTATION = 6*mm;
let sROTATION = 6*se;

hr.style.transform = `rotate(${hROTATION}deg)`;
mi.style.transform = `rotate(${mROTATION}deg)`;
sec.style.transform = `rotate(${sROTATION}deg)`;

}
setInterval(displayTime,1000);
