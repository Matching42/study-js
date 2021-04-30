var key = {
    right: false,
    left: false,
    up: false,
    down: false,
}

function keyChecker(dx, dy, player) {
    if (key.right) {
        dx = 0.5;
        dy = 0;
        player.dir = 0;
    }
    else if (key.left) {
        dx = -0.5;
        dy = 0;

        player.dir = 2;
    }
    else if (key.up) {
        dx = 0;
        dy = -0.5;
        player.dir = 3;
    }
    else if (key.down) {
        dx = 0;
        dy = 0.5;
        player.dir = 1;
    }
    else {
        dx = 0;
        dy = 0;
    }
    return { dx, dy }
}

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        key.right = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        key.left = true;
    }
    if (e.key == "Up" || e.key == "ArrowUp") {
        key.up = true;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        key.down = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        key.right = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        key.left = false;
    }
    if (e.key == "Up" || e.key == "ArrowUp") {
        key.up = false;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        key.down = false;
    }
}

export { key, keyChecker, keyDownHandler, keyUpHandler }