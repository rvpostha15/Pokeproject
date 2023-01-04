const player = document.querySelector("#player");

let playerSize = 20;
let currentDirection = "";
let xPos = player.clientLeft;
let yPos = player.clientTop;

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

    // let xInt = parseInt(xPos.replace("px", ""));
    // let yInt = parseInt(yPos.replace("px", ""));
    switch(direction) {
        case("ArrowLeft"): {
            if (xPos > 0) {
                xPos -= playerSize;
                player.style.left = `${xPos}px`;
            }
            break;
        }
        case("ArrowRight"): {
            if (xPos < 580) {
                xPos += playerSize;
                player.style.left = `${xPos}px`;
            }
            break;
        }
        case("ArrowUp"): {
            if (yPos < 0) {
                yPos += playerSize;
                player.style.bottom = `${yPos}px`;
            }
            break;
        }
        case("ArrowDown"): {
            if (yPos > -580) {
                yPos -= playerSize;
                player.style.bottom = `${yPos}px`;
            }
            break;
        }
    }
}