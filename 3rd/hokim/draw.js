
let mapData = [[0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 0, 1, 1, 0, 1],
                [0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 1, 0, 1, 1, 0],
                [0, 1, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0],
                [1, 1, 0, 0, 1, 1, 0, 1]]

let pointList = []

function makePoint(ctx, x, y) {
    pointList.push({ x: x, y: y });
    ctx.fillRect(x, y, 4, 4);
}

function points_init(ctx, x, y) {
    makePoint(ctx, 33 + x * 50, y * 50 + 35)
    if (x + 1 < mapData[y].length && !mapData[y][x + 1])
        makePoint(ctx, 49 + x * 50, y * 50 + 35)
    if (x > 0 && !mapData[y][x - 1])
        makePoint(ctx, 17 + x * 50, y * 50 + 35);
    if (y > 0 && !mapData[y - 1][x])
        makePoint(ctx, 33 + x * 50, y * 50 + 19);
    if (y + 1 < mapData.length && !mapData[y + 1][x])
        makePoint(ctx, 33 + x * 50, y * 50 + 51);
}

function drawPointsList(ctx, pointList) {
    for (var i = 0; i < pointList.length; i++) {
        ctx.fillRect(pointList[i].x, pointList[i].y, 4, 4);
    }
}

function drawBackGround(ctx, drawPoints) {

    for (var y = 0; y < mapData.length; y++) {
        for (var x = 0; x < mapData[y].length; x++) {
            if (!mapData[y][x]) {
                ctx.strokeRect(10 + 50 * x, 10 + 50 * y, 50, 50);
                if (drawPoints != null)
                    drawPoints(ctx, x, y);
            }
            else {
                ctx.fillRect(10 + 50 * x, 10 + 50 * y, 50, 50);
            }
        }
    }
    if(drawPoints == null)
        drawPointsList(ctx,pointList)
}

function drawPlayer(ctx, player) {

    var dir = (player.dir % 4) * Math.PI / 2
    ctx.beginPath();
    ctx.arc(player.x, player.y, 13, Math.PI / 7 + dir, -Math.PI / 7 + dir, false);
    ctx.lineTo(player.x, player.y);
    ctx.fill();
}

function drawEnemy(ctx, x, y) {
    x-=15
    y +=15
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 14);
    ctx.bezierCurveTo(x, y - 22, x + 6, y - 28, x + 14, y - 28);
    ctx.bezierCurveTo(x + 22, y - 28, x + 28, y - 22, x + 28, y - 14);
    ctx.lineTo(x + 28, y);
    ctx.lineTo(x + 23.333, y - 5.333);
    ctx.lineTo(x + 18.666, y);
    ctx.lineTo(x + 14, y - 5.333);
    ctx.lineTo(x + 9.333, y);
    ctx.lineTo(x + 4.666, y - 5.333);
    ctx.lineTo(x, y);
    ctx.fill();
    drawEye(ctx, x + 8, y - 20)
    drawEye(ctx, x + 20, y - 20)
}

function drawEye(ctx, x, y) {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - 3, y, x - 4, y + 3, x - 4, y + 5);
    ctx.bezierCurveTo(x - 4, y + 7, x - 3, y + 10, x, y + 10);
    ctx.bezierCurveTo(x + 3, y + 10, x + 4, y + 7, x + 4, y + 5);
    ctx.bezierCurveTo(x + 4, y + 3, x + 3, y, x, y);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x - 2, y + 6, 2, 0, Math.PI * 2, true);
    ctx.fill();
}

function drawText(ctx, str , x , y , fontSize = 40)
{
    ctx.textAlign="center"
    ctx.textBaseline="middle"
    ctx.font = `${fontSize}pt verdana`;
    ctx.lineWidth = 10;
    ctx.strokeText(str, x, y);

    ctx.fillStyle = 'white';
    ctx.fillText(str, x, y);
    ctx.lineWidth = 1;

}
export { mapData, pointList, points_init, drawBackGround, drawPlayer, drawEnemy, drawText } ;