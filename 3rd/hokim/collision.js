
function pointsCollision(player, pointList) {
    for (var i = 0; i < pointList.length; i++) {
        if (Math.sqrt(Math.pow(player.x - pointList[i].x, 2) + Math.pow(player.y - pointList[i].y, 2)) < 8)
            pointList.splice(i, 1);;
    }
}
function WallCollision(mapData, x, y) {
    var radius = 16;
    if (x < 30 || x > 37 + 50 * (mapData[0].length - 1) || y < 30 || y > 37 + 50 * (mapData.length - 1))
        return 1;
    else if (mapData[Math.round((y + radius - 37) / 50)][Math.round((x - 37) / 50)]
        || mapData[Math.round((y - radius - 37) / 50)][Math.round((x - 37) / 50)]
        || mapData[Math.round((y - 37) / 50)][Math.round((x + radius - 37) / 50)]
        || mapData[Math.round((y - 37) / 50)][Math.round((x - radius - 37) / 50)]
    )
        return 1;
    else
        return 0;
}


function enemyCollision(player, enemyList) {
    for (var i = 0; i < enemyList.length; i++) {
        if (Math.sqrt(Math.pow(player.x - enemyList[i].x, 2) + Math.pow(player.y - enemyList[i].y, 2)) < 16)
            return true;
    }
    return false;
}

export { pointsCollision, WallCollision, enemyCollision };