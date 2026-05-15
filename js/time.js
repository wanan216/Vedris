const timer = document.getElementById("czasomierz");
const cel = new Date("2137-06-01T18:00:00").getTime();


function odliczanie() {
    let d = cel - Date.now();
    if (d <= 0) {
        timer.innerHTML = "Wystartowalismy!";
        clearInterval(interval);
        return;
    }
    let min  = Math.floor(d / 1000 / 60) % 60;
    let godz = Math.floor(d / 1000 / 60 / 60) % 24;
    let dni  = Math.floor(d / 1000 / 60 / 60 / 24);
    timer.innerHTML = `${dni}d:${godz}h:${min}min`;
}

odliczanie();
const interval = setInterval(odliczanie, 1000); // 1000ms zamiast 10000 = płynniejsze