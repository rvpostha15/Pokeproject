const player = document.querySelector("#player");

let playerSize = 20;
let currentDirection = "";

document.addEventListener("keydown", (e) => {
    if (e.key.charAt(0) !== "A") {
        return;
    }
    else {
        e.preventDefault();
        currentDirection = e.key;

        movePlayer(e.key);
    }
})

function movePlayer(direction) {
    let xPos = player.style.left;
    let yPos = player.style.bottom;

    let xInt = parseInt(xPos.replace("px", ""));
    let yInt = parseInt(yPos.replace("px", ""))
    switch(direction) {
        case("ArrowLeft"): {
            if (xInt > 0) {
                player.style.left = `${xInt - playerSize}px`;
            }
            break;
        }
        case("ArrowRight"): {
            if (xInt < 580) {
                player.style.left = `${xInt + playerSize}px`;
            }
            break;
        }
        case("ArrowUp"): {
            if (yInt < 580) {
                player.style.bottom = `${yInt + playerSize}px`;
            }
            break;
        }
        case("ArrowDown"): {
            if (yInt > 0) {
                player.style.bottom = `${yInt - playerSize}px`;
            }
            break;
        }
    }
}