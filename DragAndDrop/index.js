let field = document.querySelector('#interactive-field');
let savedBlock = localStorage.getItem("block");
const newBlock = '<div id="draggable-block"><p id="block-name">Default name</p></div>';
let block = document.querySelector('#draggable-block');
let nameField = document.querySelector('#block-name');

window.onload = (e) => {
    if (savedBlock != null) {
        field.innerHTML = savedBlock;
        block = document.querySelector('#draggable-block');
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
        setBlockQualities();
    }
});

function setBlockQualities() {
    nameField.onclick = function (e) {
        console.log('click')
    }

    block.onmousedown = function(e) {
        let coords = getCoords(block);
        let shiftX = e.pageX - coords.left;
        let shiftY = e.pageY - coords.top;

        console.log(shiftX);

        block.style.position = 'absolute';
        moveAt(e);

        block.style.zIndex = 1000;

        function moveAt(e) {
            block.style.left = e.pageX - shiftX + 'px';
            block.style.top = e.pageY - shiftY + 'px';
        }

        document.onmousemove = function(e) {
            moveAt(e);
        }

        block.onmouseup = function() {
            document.onmousemove = null;
            block.onmouseup = null;
        }
    }
}


function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
