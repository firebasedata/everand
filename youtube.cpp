#include <ai/Game.h>
#include <ai/AI.h>
#include <time.h>
#include <queue>

float gameMap[45][45];
bool visited[1001][1001];

const int dx[4] = { 0, 1, 0, -1 };
const int dy[4] = { -1, 0, 1, 0 };


const int MAP_SIZE = 45;
int visitedNodes[MAP_SIZE][MAP_SIZE];
struct Point {
    int x, y;
};
Point parentNodes[MAP_SIZE][MAP_SIZE];


void AI_Placement() {
    AI* ai = AI::GetInstance();
    if (ai->GetMyTeam() == TEAM_1) {
        Game::PlaceTank(TANK_LIGHT, 7, 1);
        Game::PlaceTank(TANK_LIGHT, 7, 7);
        Game::PlaceTank(TANK_LIGHT, 7, 14);
        Game::PlaceTank(TANK_LIGHT, 7, 20);
    }
    else {
        Game::PlaceTank(TANK_LIGHT, 14, 1);
        Game::PlaceTank(TANK_LIGHT, 14, 7);
        Game::PlaceTank(TANK_LIGHT, 14, 14);
        Game::PlaceTank(TANK_LIGHT, 14, 20);
    }
}


void initBFS() {
    for (int i = 0; i < MAP_SIZE; ++i) {
        for (int j = 0; j < MAP_SIZE; ++j) {
            visitedNodes[i][j] = 0;
            parentNodes[i][j] = { -1, -1 };
        }
    }
}


float roundToHalf(float n) {
    return std::round(n * 2) / 2.0f;
}


int findPathDirection(Point start, int targetType1, int targetType2, int blockMin, int blockMax) {
    // Special case: Check if we can shoot directly at enemy
    if (gameMap[start.x][start.y] == -10) {
        for (int i = 0; i < 4; i++) {
            int distance = 1;
            int nextX, nextY;

            do {
                nextX = start.x + dx[i] * distance;
                nextY = start.y + dy[i] * distance;
                if (gameMap[nextX][nextY] == 6) {
                    return i + 1; // Return direction (1-4)
                }
                ++distance;
            } while (gameMap[nextX][nextY] <= blockMin || gameMap[nextX][nextY] >= blockMax);
        }
    }


    std::queue<Point> q;
    q.push(start);
    initBFS();
    visitedNodes[start.x][start.y] = 1;

    while (!q.empty()) {
        Point current = q.front();
        q.pop();

        for (int i = 0; i < 4; ++i) {
            int newX = current.x + dx[i];
            int newY = current.y + dy[i];

            if (newX > 0 && newY > 0 && newX < MAP_SIZE && newY < MAP_SIZE &&
                visitedNodes[newX][newY] == 0 &&
                (gameMap[newX][newY] <= blockMin || gameMap[newX][newY] >= blockMax)) {

                Point next = { newX, newY };
                q.push(next);
                visitedNodes[newX][newY] = 1;
                parentNodes[newX][newY] = current;


                if (gameMap[newX][newY] == targetType1 || gameMap[newX][newY] == targetType2) {

                    Point prev = { newX, newY };
                    while (parentNodes[prev.x][prev.y].x != start.x ||
                        parentNodes[prev.x][prev.y].y != start.y) {
                        prev = parentNodes[prev.x][prev.y];
                    }


                    for (int dir = 0; dir < 4; ++dir) {
                        if (start.x + dx[dir] == prev.x && start.y + dy[dir] == prev.y) {
                            return dir + 1;
                        }
                    }
                }
            }
        }
    }
    return -1;
}


int getPathDepth(Point start, int targetType1, int targetType2, int blockMin, int blockMax) {
    int depth = 0;

    if (gameMap[start.x][start.y] == -10) {
        for (int i = 0; i < 4; i++) {
            int distance = 1;
            int nextX, nextY;

            do {
                nextX = start.x + dx[i] * distance;
                nextY = start.y + dy[i] * distance;
                if (gameMap[nextX][nextY] == 6) {
                    return i + 1; // Return direction (1-4)
                }
                ++distance;
            } while (gameMap[nextX][nextY] <= blockMin || gameMap[nextX][nextY] >= blockMax);
        }
    }

    std::queue<Point> q;
    q.push(start);
    memset(visited, false, sizeof(visited));
    visited[start.x][start.y] = true;

    while (!q.empty()) {
        int queueSize = q.size();

        for (int k = 0; k < queueSize; k++) {
            Point current = q.front();
            q.pop();

            for (int i = 0; i < 4; ++i) {
                int newX = current.x + dx[i];
                int newY = current.y + dy[i];

                if (newX > 0 && newY > 0 && newX < MAP_SIZE && newY < MAP_SIZE &&
                    !visited[newX][newY] &&
                    (gameMap[newX][newY] <= blockMin || gameMap[newX][newY] >= blockMax)) {

                    Point next = { newX, newY };
                    q.push(next);
                    visited[newX][newY] = true;

                    if (gameMap[newX][newY] == targetType1 || gameMap[newX][newY] == targetType2) {
                        return depth + 1;
                    }
                }
            }
        }
        depth++;
    }
    return 0;
}


void markLineOfSight(int x, int y, int direction) {
    int dx = 0, dy = 0;
    int directionMultiplier = (direction == 1 || direction == 4) ? -1 : 1;

    if (direction == 1 || direction == 3) {
        dy = directionMultiplier;
    }
    else {
        dx = directionMultiplier;
    }

    int distance = 1;
    int nextX, nextY;

    while (true) {
        nextX = x + dx * distance;
        nextY = y + dy * distance;

        int cellValue = gameMap[nextX][nextY];

        if (cellValue > 1 && cellValue != 5) {
            break;
        }

        if (cellValue == 1 || cellValue == -11 || cellValue == 5) {
            distance++;
            continue;
        }

        gameMap[nextX][nextY] = -10;
        distance++;
    }
}

void markDanger(int x, int y, int value) {
    if (gameMap[x][y] < 1 || (value == 8 ? 8 : 6) < gameMap[x][y]) {
        gameMap[x][y] = value;
    }
}


void markBulletPaths(int coolDown) {
    AI* ai = AI::GetInstance();
    std::vector<Bullet*> enemyBullets = ai->GetEnemyBullets();

    for (Bullet* bullet : enemyBullets) {

        if ((bullet->GetType() == 3 && coolDown == 0) || !bullet->IsAlive()) {
            continue;
        }

        int x = roundToHalf(bullet->GetX()) * 2;
        int y = roundToHalf(bullet->GetY()) * 2;
        int direction = bullet->GetDirection();
        int directionMultiplier = (direction == 1 || direction == 4) ? -1 : 1;

        int oppositeDirection = ((direction + 1) % 4) + 1;
        int dx = (direction == 2 || direction == 4) ? directionMultiplier : 0;
        int dy = (direction == 1 || direction == 3) ? directionMultiplier : 0;

        int dangerZoneSize = 4;
        for (int j = 0; j < 4; j++) {
            Tank* myTank = ai->GetMyTank(j);
            if (roundToHalf(myTank->GetX()) == roundToHalf(bullet->GetX()) ||
                roundToHalf(myTank->GetY()) == roundToHalf(bullet->GetY())) {
                dangerZoneSize = 7;
                break;
            }
        }

        int dangerDistance = -1;
        while (dangerDistance <= dangerZoneSize) {
            int nextX = x + dx * dangerDistance;
            int nextY = y + dy * dangerDistance;

            if (2 <= gameMap[nextX][nextY] && gameMap[nextX][nextY] <= 4) {
                break;
            }

            if (dx == 0) {
                markDanger(x - 2, nextY, -11);
                markDanger(x + 2, nextY, -11);
            }
            else {
                markDanger(nextX, y - 2, -11);
                markDanger(nextX, y + 2, -11);
            }

            for (int offset = -1; offset <= 1; offset++) {
                if (dx == 0) {
                    markDanger(x + offset, nextY, 8);
                }
                else {
                    markDanger(nextX, y + offset, 8);
                }
            }

            dangerDistance++;
        }

        for (int offset = -1; offset <= 1; offset++) {
            int markX = x + dx * (oppositeDirection % 2 != 0) + offset * (dy != 0);
            int markY = y + dy * (oppositeDirection % 2 == 0) + offset * (dx != 0);
            markDanger(markX, markY, 2);
        }
    }
}


void markAdjacent(int x, int y, int value) {
    if (gameMap[x - 1][y] == 0) gameMap[x - 1][y] = value;
    if (gameMap[x][y - 1] == 0) gameMap[x][y - 1] = value;
    if (gameMap[x - 1][y - 1] == 0) gameMap[x - 1][y - 1] = value;
}


void markCloseCombat(int mapX, int mapY) {
    for (int xOffset = mapX - 4; xOffset <= mapX + 4; xOffset++) {
        for (int yOffset = mapY - 4; yOffset <= mapY + 4; yOffset++) {
            if (gameMap[xOffset][yOffset] == 0) {
                if ((xOffset == mapX - 2 || xOffset == mapX + 2) && (yOffset <= mapY - 2 || yOffset >= mapY + 2) ||
                    (yOffset == mapY - 2 || yOffset == mapY + 2) && (xOffset <= mapX - 2 || xOffset >= mapX + 2)) {
                    gameMap[xOffset][yOffset] = -9;
                }
            }
        }
    }
}


void updateTank(Tank* tank, int activeTankId, int tankValue) {
    if (!tank) return;
    float x = tank->GetX();
    float y = tank->GetY();
    int mapX = (int)(x * 2);
    int mapY = (int)(y * 2);

    for (int xOffset = mapX - 1; xOffset <= mapX + 1; xOffset++) {
        for (int yOffset = mapY - 1; yOffset <= mapY + 1; yOffset++) {
            if (gameMap[xOffset][yOffset] == 0) {
                if (tank->GetID() != activeTankId) {
                    gameMap[xOffset][yOffset] = (tank->GetHP() > 0) ? tankValue : 1;
                }
            }
        }
    }

    if (tankValue == 6 && tank->GetHP() > 0) {
        markCloseCombat(mapX, mapY);
    }
}


void markEnemyVision(Tank* enemyTank, int coolDown) {
    if (!enemyTank || enemyTank->GetHP() <= 0) return;
    int mapX = (int)(enemyTank->GetX() * 2);
    int mapY = (int)(enemyTank->GetY() * 2);

    if (coolDown < 1) {
        markLineOfSight(mapX, mapY - 1, 1);
        markLineOfSight(mapX, mapY + 1, 3);
        markLineOfSight(mapX + 1, mapY, 2);
        markLineOfSight(mapX - 1, mapY, 4);
    }

    bool hasVision = false;
    if ((gameMap[mapX - 1][mapY] <= 0 || gameMap[mapX - 1][mapY] == 6) && gameMap[mapX - 2][mapY] <= 0) {
        markLineOfSight(mapX - 1, mapY - 1, 1);
        markLineOfSight(mapX - 1, mapY + 1, 3);
        hasVision = true;
    }
    if ((gameMap[mapX + 1][mapY] <= 0 || gameMap[mapX + 1][mapY] == 6) && gameMap[mapX + 2][mapY] <= 0) {
        markLineOfSight(mapX + 1, mapY - 1, 1);
        markLineOfSight(mapX + 1, mapY + 1, 3);
        hasVision = true;
    }
    if (!hasVision) {
        markLineOfSight(mapX, mapY - 1, 1);
        markLineOfSight(mapX, mapY + 1, 3);
    }

    hasVision = false;
    if ((gameMap[mapX][mapY - 1] <= 0 || gameMap[mapX][mapY - 1] == 6) && gameMap[mapX][mapY - 2] <= 0) {
        markLineOfSight(mapX + 1, mapY - 1, 2);
        markLineOfSight(mapX - 1, mapY - 1, 4);
        hasVision = true;
    }
    if ((gameMap[mapX][mapY + 1] <= 0 || gameMap[mapX][mapY + 1] == 6) && gameMap[mapX][mapY + 2] <= 0) {
        markLineOfSight(mapX + 1, mapY + 1, 2);
        markLineOfSight(mapX - 1, mapY + 1, 4);
        hasVision = true;
    }
    if (!hasVision) {
        markLineOfSight(mapX + 1, mapY, 2);
        markLineOfSight(mapX - 1, mapY, 4);
    }
}


void markStrikeZones(Strike* strike) {
    int strikeX = (int)(strike->GetX() * 2);
    int strikeY = (int)(strike->GetY() * 2);

    for (int xOffset = strikeX - 6; xOffset <= strikeX + 6; xOffset++) {
        for (int yOffset = strikeY - 6; yOffset <= strikeY + 6; yOffset++) {
            if (gameMap[xOffset][yOffset] <= 0 || 7 <= gameMap[xOffset][yOffset]) {
                gameMap[xOffset][yOffset] = 8;
            }
        }
    }

    for (int xOffset = strikeX - 7; xOffset <= strikeX + 7; xOffset++) {
        for (int yOffset = strikeY - 7; yOffset <= strikeY + 7; yOffset++) {
            if (xOffset == strikeX - 7 || xOffset == strikeX + 7 ||
                yOffset == strikeY - 7 || yOffset == strikeY + 7) {
                if (gameMap[xOffset][yOffset] <= 0 || 9 <= gameMap[xOffset][yOffset]) {
                    gameMap[xOffset][yOffset] = -11;
                }
            }
        }
    }
}


void updateGameMap(int coolDown, int activeTankId) {
    memset(gameMap, 0, sizeof(gameMap));
    AI* ai = AI::GetInstance();

    for (float x = 0; x < 22; x += 0.5) {
        for (float y = 0; y < 22; y += 0.5) {
            int mapX = (int)(x * 2);
            int mapY = (int)(y * 2);
            int blockType = ai->GetBlock(x, y);
            gameMap[mapX][mapY] = blockType;

            if (blockType != 0) {
                markAdjacent(mapX, mapY, blockType);
            }
        }
    }

    for (int i = 0; i < 4; ++i) {
        updateTank(ai->GetMyTank(i), activeTankId, 5);
        updateTank(ai->GetEnemyTank(i), -1, 6);
    }


    for (int i = 0; i < 4; ++i) {
        markEnemyVision(ai->GetEnemyTank(i), coolDown);
    }


    initBFS();
    markBulletPaths(coolDown);


    for (Strike* strike : ai->GetIncomingStrike()) {
        if (strike->GetCountDown() > 0) {
            markStrikeZones(strike);
        }
    }


    for (PowerUp* powerUp : ai->GetPowerUpList()) {
        gameMap[(int)powerUp->GetX() * 2][(int)powerUp->GetY() * 2] = -5;
    }
}


void AI_Update() {
    AI* ai = AI::GetInstance();

    for (int i = 0; i < NUMBER_OF_TANK; i++) {
        Tank* tank = ai->GetMyTank(i);

        if (!tank || tank->GetHP() == 0) continue;

        int tankX = (int)(tank->GetX() * 2);
        int tankY = (int)(tank->GetY() * 2);
        updateGameMap(tank->GetCoolDown(), tank->GetID());

        int targetType1, targetType2;
        int blockMin = 0, blockMax = 10;
        bool shouldMove = false, shouldShoot = false;

        if (gameMap[tankX][tankY] == 8 || gameMap[tankX][tankY] == 2) {
            targetType1 = targetType2 = -11;
            blockMax = 8;
            shouldMove = true;
        }
        else if (gameMap[tankX][tankY] == -10 && tank->GetCoolDown() == 0) {
            targetType1 = targetType2 = 6;
            blockMin = 1, blockMax = 4;
            shouldShoot = (tank->GetDirection() == findPathDirection({ tankX, tankY }, targetType1, targetType2, blockMin, blockMax));
        }
        else if (gameMap[tankX][tankY] == -11 && tank->GetCoolDown() == 0) {
            targetType1 = targetType2 = -10;
            shouldMove = true;
        }
        else if (gameMap[tankX][tankY] <= 0 && !ai->GetPowerUpList().empty()) {
            targetType1 = -5, targetType2 = 6;
            shouldMove = true;
        }
        else if (tank->GetCoolDown() > 1 && getPathDepth({ tankX, tankY }, 6, 6, 1, 1) <= 3) {
            targetType1 = targetType2 = -9;
            shouldMove = true;
        }
        else {
            targetType1 = targetType2 = -10;
            shouldMove = true;
        }

        int direction = findPathDirection({ tankX, tankY }, targetType1, targetType2, blockMin, blockMax);

        if (gameMap[tankX][tankY] == -10 && targetType1 == -5) {
            shouldMove = true;
        }

        if (gameMap[tankX][tankY] != -10 && gameMap[tankX][tankY] <= 0 && tank->GetCoolDown() > 0 && targetType1 != -5) {
            shouldMove = false;
        }

        if (targetType1 == -9) {
            shouldMove = true;
        }

        if ((gameMap[tankX][tankY] == -10 || gameMap[tankX][tankY] == 9) && tank->GetDirection() == direction) {
            shouldShoot = true;
        }

        Game::CommandTank(i, direction, shouldMove, shouldShoot);
    }

    if (ai->HasAirstrike() || ai->HasEMP()) {
        for (int i = 0; i < NUMBER_OF_TANK; i++) {
            Tank* enemyTank = ai->GetEnemyTank(i);
            if (enemyTank && enemyTank->GetHP() > 0) {
                if (ai->HasAirstrike()) {
                    ai->UseAirstrike(enemyTank->GetX(), enemyTank->GetY());
                }
                else {
                    ai->UseEMP(enemyTank->GetX(), enemyTank->GetY());
                }
                break;
            }
        }
    }

    Game::GetInstance()->SendCommand();
}
