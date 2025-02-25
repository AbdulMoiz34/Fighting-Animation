const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
let player1Position = 0;
function movePlayer1(type) {
    if (type === "forward") {
        player1Position += 10;
        player1.style.left = player1Position + "px";
    } else if (type == "backward") {
        player1Position -= 10;
        player1.style.left = player1Position + "px";
    }
}

let player2Position = 10;
function movePlayer2(type) {
    if (type === "forward") {
        player2Position += 10;
        player2.style.right = player2Position + "px";
    } else if (type == "backward") {
        player2Position -= 10;
        player2.style.right = player2Position + "px";
    }
}

window.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key == "d" && player1Position < 900) {
        movePlayer1("forward");
    } else if (e.key == "a" && player1Position > 10) {
        movePlayer1("backward");
    } else if (e.key == "j") {
        player1.src = "https://www.fightersgeneration.com/characters/alex-shirtrip.gif";
        this.setTimeout(() => player1.src = "https://www.fightersgeneration.com/characters/alex-ts-stance.gif", 2200);
    } else if (e.key.toLowerCase() == "arrowleft" && player2Position < 900) {
        movePlayer2("forward");

    } else if (e.key.toLowerCase() == "arrowright" && player2Position > 10) {
        movePlayer2("backward");

    }
})