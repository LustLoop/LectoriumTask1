let field = document.querySelector('#interactive-field');
let savedBlock = localStorage.getItem("block");
const newBlock = '<div id="draggable-block" style="position: absolute"><p id="block-name" >Default name</p></div>';
let block = document.querySelector('#draggable-block');
let nameField = document.querySelector('#block-name');

window.onload = (e) => {
    if (savedBlock != null) {
        field.innerHTML = savedBlock;
        block = document.querySelector('#draggable-block');
        block.style.left = localStorage.getItem("shiftX");
        block.style.top = localStorage.getItem("shiftY");
        nameField = document.querySelector('#block-name');
        setBlockQualities();
    }
}

field.addEventListener('dblclick', function (e) {
    if (savedBlock == null) {
        savedBlock = newBlock;
        field.innerHTML = savedBlock;
        localStorage.setItem("block", newBlock);
        block = document.querySelector('#draggable-block');
        block.style.left = e.pageX + 'px';
        block.style.top = e.pageY + 'px';
        localStorage.setItem("shiftX", block.style.left);
        localStorage.setItem("shiftY", block.style.top);
        setBlockQualities();
    }
});

function setBlockQualities() {

    block.onmousedown = function(e) {
        const fieldCoords = field.getBoundingClientRect()
        let blockCoords = getCoords(block);
        let shiftX = e.pageX - blockCoords.left;
        let shiftY = e.pageY - blockCoords.top;

        block.style.position = 'absolute';
        moveAt(e);

        block.style.zIndex = 1000;

        document.onmousemove = function(e) {
            moveAt(e);
        }

        block.onmouseup = function(e) {
            const blockWidth = blockCoords.right - blockCoords.left;
            const blockHeight = blockCoords.bottom - blockCoords.top;

            blockCoords = getCoords(block);

            console.log(blockCoords)
            console.log(fieldCoords)
            console.log(blockHeight)

            if (blockCoords.left < fieldCoords.left) {
                block.style.left = fieldCoords.left + 'px';
            }

            if (blockCoords.right > fieldCoords.right) {
                block.style.left = fieldCoords.right - blockWidth + 'px';
            }

            if (blockCoords.top < fieldCoords.top) {
                block.style.top = fieldCoords.top + 'px';
            }

            if (blockCoords.bottom > fieldCoords.bottom) {
                block.style.top = fieldCoords.bottom - blockHeight + 'px';
            }

            localStorage.setItem("shiftX", block.style.left);
            localStorage.setItem("shiftY", block.style.top);

            document.onmousemove = null;
            block.onmouseup = null;
        }

        function moveAt(e) {
            block.style.left = e.pageX - shiftX + 'px';
            block.style.top = e.pageY - shiftY + 'px';
            
        }
    }
}

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
        bottom: box.bottom,
        right: box.right
    };
}
