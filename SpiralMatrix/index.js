function moveSpirally(matrixWidth, matrixHeight, horizontalStartPoint, verticalStartPoint, initDirection) {
    const matrix = createMatrix(matrixWidth, matrixHeight);
    startIterating(matrix, matrixWidth, matrixHeight, horizontalStartPoint - 1, verticalStartPoint - 1, 'left');
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

function startIterating(matrix, matrixWidth, matrixHeight, curHorizontalIndex, curVerticalIndex, initialDirection) {
    let resultArray = [];

    let stepsLeft = matrixWidth * matrixHeight;
    let stepLength = 1;
    let iterationsToIncreaseStepLength = 2;
    let indexesOutOfBorderHorizontally = 0;
    let indexesOutOfBorderVertically = 0;

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

    while (stepsLeft !== 0) {
        moveRight();
        moveDown();
        moveLeft();
        moveUp();
    }

    console.log(resultArray)

    function moveLeft() {
        for (let i = 1; i <= stepLength; i++) {
            if (stepsLeft !== 0) {
                if (checkIfNotOutOfBorder(curVerticalIndex, curHorizontalIndex, matrixHeight, matrixWidth)) {
                    resultArray.push(matrix[curVerticalIndex][curHorizontalIndex]);
                    stepsLeft--;
                }
                curHorizontalIndex--;
            }
        }
        iterationsToIncreaseStepLength--;
        if (iterationsToIncreaseStepLength === 0) {
            iterationsToIncreaseStepLength = 2;
            stepLength++;
        }
    }

    function moveUp() {
        for (let i = 1; i <= stepLength; i++) {
            if (stepsLeft !== 0) {
                if (checkIfNotOutOfBorder(curVerticalIndex, curHorizontalIndex, matrixHeight, matrixWidth)) {
                    console.log(curVerticalIndex + " " + curHorizontalIndex);
                    resultArray.push(matrix[curVerticalIndex][curHorizontalIndex]);
                    stepsLeft--;
                }
                curVerticalIndex--;
            }
        }
        iterationsToIncreaseStepLength--;
        if (iterationsToIncreaseStepLength === 0) {
            iterationsToIncreaseStepLength = 2;
            stepLength++;
        }
    }

    function moveRight() {
        for (let i = 1; i <= stepLength; i++) {
            if (stepsLeft !== 0) {
                if (checkIfNotOutOfBorder(curVerticalIndex, curHorizontalIndex, matrixHeight, matrixWidth)) {
                    resultArray.push(matrix[curVerticalIndex][curHorizontalIndex]);
                    stepsLeft--;
                }
                curHorizontalIndex++;
            }
        }
        iterationsToIncreaseStepLength--;
        if (iterationsToIncreaseStepLength === 0) {
            iterationsToIncreaseStepLength = 2;
            stepLength++;
        }
    }

    function moveDown() {
        for (let i = 1; i <= stepLength; i++) {
            if (stepsLeft !== 0) {
                if (checkIfNotOutOfBorder(curVerticalIndex, curHorizontalIndex, matrixHeight, matrixWidth)) {
                    resultArray.push(matrix[curVerticalIndex][curHorizontalIndex]);
                    stepsLeft--;
                }
                curVerticalIndex++;
            }
        }
        iterationsToIncreaseStepLength--;
        if (iterationsToIncreaseStepLength === 0) {
            iterationsToIncreaseStepLength = 2;
            stepLength++;
        }
    }
}

function checkIfNotOutOfBorder(curVerticalIndex, curHorizontalIndex, matrixHeight, matrixWidth) {
    if (curVerticalIndex < 0 || curVerticalIndex >= matrixHeight ||
        curHorizontalIndex < 0 || curHorizontalIndex >= matrixWidth) {
        return false;
    }
    return true;
}

moveSpirally(5, 6, 2, 4, 'left')