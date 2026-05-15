const splash = document.getElementById("smiszne");
let random = Math.floor(Math.random() * 15);
if (random == 1) {
    splash.innerHTML = "Dzisiaj jest Twoj szczesliwy dzien!";
} else if (random == 2) {
    splash.innerHTML = "Nie zapomnij o urodzinach mamy!";
} else if (random == 3) {
    splash.innerHTML = "Pogoda jest dzisiaj super!";
} else if (random == 4) {
    splash.innerHTML = "Zjedz cos dobrego!";
} else if (random == 5) {
    splash.innerHTML = "Nie zapomnij o piciu wody!";
} else if (random == 6) {
    splash.innerHTML = "Dzisiaj jest idealny dzien na spacer!";
} else if (random == 7) {
    splash.innerHTML = "Zrob cos kreatywnego dzisiaj!";
} else if (random == 8) {
    splash.innerHTML = "Nie zapomnij o swoich marzeniach!";
} else if (random == 9) {
    splash.innerHTML = "Dzisiaj jest dzien na relaks!";
} else if (random == 10) {
    splash.innerHTML = "Zrob cos dobrego dla innych dzisiaj!";
} else if (random == 11) {
    splash.innerHTML = "Nie zapomnij o swoich przyjaciołach!";
} else if (random == 12) {
    splash.innerHTML = "Dzisiaj jest dzien na nauke czegos nowego!";
} else if (random == 13) {
    splash.innerHTML = "Zrob cos zabawnego dzisiaj!";
} else if (random == 14) {
    splash.innerHTML = "Nie zapomnij o swoich pasjach!";
} else {
    splash.innerHTML = "Dzisiaj jest dzien na bycie szczesliwym!";
}
splash.style.transform = "translate(-50%, -50%) rotateZ(340deg)";