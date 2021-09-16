function moveSpirally(matrixWidth, matrixHeight, horizontalStartPoint, verticalStartPoint, initDirection) {
    createMatrix(matrixWidth, matrixHeight)
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

moveSpirally(5, 6, 2, 4, 'left')