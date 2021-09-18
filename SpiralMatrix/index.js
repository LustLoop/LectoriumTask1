function moveSpirally(matrixWidth, matrixHeight, horizontalStartPoint, verticalStartPoint, initDirection) {
    const matrix = createMatrix(matrixWidth, matrixHeight);
    return startIterating(matrix, matrixWidth, matrixHeight, horizontalStartPoint - 1,
        verticalStartPoint - 1, initDirection);
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

    return(resultArray)

    function moveLeft() {
        for (let i = 1; i <= stepLength; i++) {
            if (stepsLeft !== 0) {
                if (checkIfNotOutOfBorder(curVerticalIndex, curHorizontalIndex, matrixHeight, matrixWidth)) {
                    addStepToTheFinalArray();
                }
                curHorizontalIndex--;
            }
        }
        updateIterationsData();
    }

    function moveUp() {
        for (let i = 1; i <= stepLength; i++) {
            if (stepsLeft !== 0) {
                if (checkIfNotOutOfBorder(curVerticalIndex, curHorizontalIndex, matrixHeight, matrixWidth)) {
                    addStepToTheFinalArray();
                }
                curVerticalIndex--;
            }
        }
        updateIterationsData();
    }

    function moveRight() {
        for (let i = 1; i <= stepLength; i++) {
            if (stepsLeft !== 0) {
                if (checkIfNotOutOfBorder(curVerticalIndex, curHorizontalIndex, matrixHeight, matrixWidth)) {
                    addStepToTheFinalArray();
                }
                curHorizontalIndex++;
            }
        }
        updateIterationsData();
    }

    function moveDown() {
        for (let i = 1; i <= stepLength; i++) {
            if (stepsLeft !== 0) {
                if (checkIfNotOutOfBorder(curVerticalIndex, curHorizontalIndex, matrixHeight, matrixWidth)) {
                    addStepToTheFinalArray();
                }
                curVerticalIndex++;
            }
        }
        updateIterationsData();
    }

    function addStepToTheFinalArray() {
        resultArray.push(matrix[curVerticalIndex][curHorizontalIndex]);
        stepsLeft--;
    }

    function updateIterationsData() {
        iterationsToIncreaseStepLength--;
        if (iterationsToIncreaseStepLength === 0) {
            iterationsToIncreaseStepLength = 2;
            stepLength++;
        }
    }
}

function checkIfNotOutOfBorder(curVerticalIndex, curHorizontalIndex, matrixHeight, matrixWidth) {
    return !(curVerticalIndex < 0 || curVerticalIndex >= matrixHeight ||
        curHorizontalIndex < 0 || curHorizontalIndex >= matrixWidth);

}

console.log(moveSpirally(5, 6, 2, 4, 'left'))