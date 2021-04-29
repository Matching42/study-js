
import { mapData, pointList, points_init, drawBackGround, drawPlayer, drawEnemy, drawText } from './draw.js';
import { keyChecker, keyDownHandler, keyUpHandler } from './key_checker.js';
import { pointsCollision, WallCollision, enemyCollision } from './collision.js';


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var d = { dx: 0, dy: 0 };

var interval;
var state = 1;
//1: pageOn 2: gameStart 3:gaveOver 4: gamewin
var total = 0;

var player = { x: 37, y: 37, dir: 0 }
var enemy = [{ x: 387, y: 37, dx: 0.5 },
            { x: 187, y: 137, dx: 0.5 },
            { x: 37, y: 287, dx: 0.5 },
            { x: 237, y: 237, dx: 0.5 }]

drawText(ctx, "Press any key to start", 205, 180, 25)
ctx.fillStyle = 'black';
ctx.font = "15pt verdana";
ctx.fillText(`use arrow key to move`, 205, 230);
document.addEventListener("keydown", firstKeyDownHandler, false);

function init() {
    if (state == 1) {
        drawBackGround(ctx, points_init);
        drawPlayer(ctx, player);
        interval = setInterval(draw, 10);
        state = 2
    }
    if (state == 3 || state == 4)
        document.location.reload();
    total = pointList.length;
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
}

function outit() {
    drawText(ctx, "click to restart", 205, 230, 25)
    document.removeEventListener("keydown", keyDownHandler, false);
    document.removeEventListener("keyup", keyUpHandler, false);
    document.addEventListener("click", () => { document.location.reload(); }, false);
}

function draw() {

    if (enemyCollision(player, enemy)) {
        drawText(ctx, "GAME OVER", 205, 180)
        state = 3;
        clearInterval(interval);
        outit()
        return;
    }
    else if (pointList.length == 0) {
        drawText(ctx, "YOU WIN!!", 205, 180)
        state = 4;
        clearInterval(interval);
        outit()
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackGround(ctx, null);
    d = keyChecker(d.dx, d.dy, player);
    if (WallCollision(mapData, player.x + d.dx, player.y + d.dy)) {
        d.dx = 0;
        d.dy = 0
    }
    else {
        player.x += d.dx;
        player.y += d.dy;
    }
    drawPlayer(ctx, player)
    for (var i = 0; i < enemy.length; i++) {
        if (WallCollision(mapData, enemy[i].x + enemy[i].dx, enemy[i].y))
            enemy[i].dx *= -1;
        enemy[i].x += enemy[i].dx
        drawEnemy(ctx, enemy[i].x, enemy[i].y);
    }

    pointsCollision(player, pointList);


    ctx.fillStyle = 'black';
    ctx.font = "20pt verdana";
    ctx.fillText(`${pointList.length}/${total}`, 205, 400);
}

function firstKeyDownHandler(e) {
    document.removeEventListener("keydown", firstKeyDownHandler, false);
    init();
}