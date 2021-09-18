function moveSpirally(matrixWidth, matrixHeight, horizontalStartPoint, verticalStartPoint, initDirection, spiralType) {
    const matrix = createMatrix(matrixWidth, matrixHeight);
    return getResultOfIterations(matrix, matrixWidth, matrixHeight, horizontalStartPoint - 1,
        verticalStartPoint - 1, initDirection, spiralType);
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

function getResultOfIterations(matrix, matrixWidth, matrixHeight, curHorizontalIndex,
                               curVerticalIndex, initialDirection, spiralType) {
    let resultArray = [];

    let stepsLeft = matrixWidth * matrixHeight;
    let stepLength = 1;
    let iterationsToIncreaseStepLength = 2;

    if (spiralType === 'clockwise') {
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
    } else if (spiralType === "counterclockwise") {
        switch (initialDirection) {
            case 'left':
                moveLeft();
            case 'down':
                moveDown();
            case 'right':
                moveRight();
            case 'up':
                moveUp();
        }

        while (stepsLeft !== 0) {
            moveLeft();
            moveDown();
            moveRight();
            moveUp();
        }
    }

    function moveLeft() {
        for (let i = 1; i <= stepLength; i++) {
            let stepWasMade = makeAStepIfPossible();
            stepWasMade ? curHorizontalIndex-- : null;
        }
        updateIterationsData();
    }

    function moveUp() {
        for (let i = 1; i <= stepLength; i++) {
            let stepWasMade = makeAStepIfPossible();
            stepWasMade ? curVerticalIndex-- : null;
        }
        updateIterationsData();
    }

    function moveRight() {
        for (let i = 1; i <= stepLength; i++) {
            let stepWasMade = makeAStepIfPossible();
            stepWasMade ? curHorizontalIndex++ : null;
        }
        updateIterationsData();
    }

    function moveDown() {
        for (let i = 1; i <= stepLength; i++) {
            let stepWasMade = makeAStepIfPossible();
            stepWasMade ? curVerticalIndex++ : null;
        }
        updateIterationsData();
    }

    function makeAStepIfPossible() {
        if (stepsLeft !== 0) {
            if (checkIfNotOutOfBorder(curVerticalIndex, curHorizontalIndex, matrixHeight, matrixWidth)) {
                addElementToTheFinalArray();
            }
            return true;
        }
        return false;
    }

    function addElementToTheFinalArray() {
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

    return (resultArray);
}

function checkIfNotOutOfBorder(curVerticalIndex, curHorizontalIndex, matrixHeight, matrixWidth) {
    return !(curVerticalIndex < 0 || curVerticalIndex >= matrixHeight ||
        curHorizontalIndex < 0 || curHorizontalIndex >= matrixWidth);

}

console.log(moveSpirally(5, 6, 2, 4, 'left', 'clockwise'));