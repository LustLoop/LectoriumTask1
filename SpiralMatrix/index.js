function moveSpirally(matrixWidth, matrixHeight, horizontalStartPoint, verticalStartPoint, initDirection) {
    const matrix = createMatrix(matrixWidth, matrixHeight)
    startIterating(matrixWidth, matrixHeight, horizontalStartPoint - 1, verticalStartPoint - 1, 'left')
}

function createMatrix(matrixWidth, matrixHeight) {
    let matrix = [];
    let counter = 1;
    for (let i = 0; i < matrixHeight; i++) {
        let line = []
        for (let j = 0; j < matrixWidth; j++) {
            line.push(counter);
            counter++;
        }
        matrix.push(line);
    }
    return matrix;
}

function testqwe(matrix) {
    console.log(matrix[4-1][2-1])
}

function startIterating(matrixWidth, matrixHeight, currentHorizontalIndex, currentVerticalIndex, initialDirection) {
    let stepsLeft = matrixWidth * matrixHeight;
    do {
        switch (initialDirection) {
            case 'right':
                moveRight();
            case 'down':
                moveDown();
            case 'left':
                moveLeft();
            case 'up':
                moveUp();
        }
    } while (stepsLeft !== 0) {
        moveRight(currentHorizontalIndex, currentVerticalIndex);
        moveDown(currentHorizontalIndex, currentVerticalIndex);
        moveLeft(currentHorizontalIndex, currentVerticalIndex);
        moveUp(currentHorizontalIndex, currentVerticalIndex);
    }

    function moveLeft() {
        increaseCounter();
    }

    function moveUp() {
        increaseCounter();
    }

    function moveRight() {
        increaseCounter();
    }

    function moveDown() {
        increaseCounter();
    }

    function increaseCounter() {
        if (stepsLeft === 0) {
            return;
        }
        console.log(stepsLeft)
        stepsLeft--;
    }
}

moveSpirally(5, 6, 2, 4, 'left')