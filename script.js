const timer = document.getElementById("smiszne");
const cel = new Date("2026-06-01T18:00:00").getTime();
timer.innerHTML = "0:00:00";
let d = Date.now();
d = cel-d;
let min = Math.floor(d/1000/60)%60;
let godz = Math.floor(d/1000/60/60)%24;
let dni = Math.floor(d/1000/60/60/24);
timer.innerHTML = `${dni}d:${godz}h:${min}min`;
setInterval(() => {
    d = Date.now();
    d = cel-d;
    min = Math.floor(d/1000/60)%60;
    godz = Math.floor(d/1000/60/60)%24;
    dni = Math.floor(d/1000/60/60/24);
    timer.innerHTML = `${dni}d:${godz}h:${min}min`;
}, 10000);

