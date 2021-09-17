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

function startIterating(matrix, matrixWidth, matrixHeight, currentHorizontalIndex, currentVerticalIndex, initialDirection) {
    let resultArray = [];
    let stepsLeft = matrixWidth * matrixHeight;
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
        moveLeft();
        moveUp();
        moveRight();
        moveDown();
    }

    console.log(resultArray)

    function moveLeft() {
        if (currentHorizontalIndex !== 0 && stepsLeft !== 0) {
            resultArray.push(matrix[currentVerticalIndex][currentHorizontalIndex])
            currentHorizontalIndex--;
            stepsLeft = stepsLeft - 1;
        }
    }

    function moveUp() {
        if (currentVerticalIndex !== 0 && stepsLeft !== 0) {
            resultArray.push(matrix[currentVerticalIndex][currentHorizontalIndex])
            currentVerticalIndex--;
            stepsLeft--;
        }
    }

    function moveRight() {
        if (currentHorizontalIndex !== matrixWidth - 1 && stepsLeft !== 0) {
            resultArray.push(matrix[currentVerticalIndex][currentHorizontalIndex])
            currentHorizontalIndex++;
            stepsLeft--;
        }
    }

    function moveDown() {
        if (currentHorizontalIndex !== matrixHeight - 1 && stepsLeft !== 0) {
            resultArray.push(matrix[currentVerticalIndex][currentHorizontalIndex])
            currentVerticalIndex++;
            stepsLeft--;
        }
    }
}

moveSpirally(5, 6, 2, 4, 'left')