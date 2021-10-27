let field = document.querySelector('#interactive-field');
let savedBlock = localStorage.getItem("block");
let savedBlockName = localStorage.getItem("block-name-field");

let block = document.querySelector('#draggable-block');
let deleteBlockButton;
let nameFieldName = 'test';

const deleteButtonHtml = '<div id="delete-block-button" onclick="deleteBlock()">&#10006;</div>';
const nameFormHtml = '<from id="block-name-form" style="display: none"><input type="text" id="block-name-field-input">' +
    '<button onclick="submitName()">Submit</button></from>';
const newBlockHtml = '<div id="draggable-block" style="position: absolute">' + deleteButtonHtml + '<div id="block-name-field" onclick="changeName()">' + nameFieldName +'</div>' + nameFormHtml + '</div>';

window.onload = () => {
    if (savedBlock != null) {
        field.innerHTML = savedBlock;
        field.querySelector('#block-name-field').innerHTML = savedBlockName;
        block = document.querySelector('#draggable-block');
        block.style.left = localStorage.getItem("shiftX");
        block.style.top = localStorage.getItem("shiftY");
        deleteBlockButton = document.querySelector('#delete-block-button');
        setBlockQualities();
    }
}

field.addEventListener('dblclick', function (e) {
    if (savedBlock == null) {
        savedBlock = newBlockHtml;
        field.innerHTML = savedBlock;
        localStorage.setItem("block", newBlockHtml);
        block = document.querySelector('#draggable-block');
        deleteBlockButton = document.querySelector('#delete-block-button');
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

        block.onmouseup = function() {
            const blockWidth = blockCoords.right - blockCoords.left;
            const blockHeight = blockCoords.bottom - blockCoords.top;

            blockCoords = getCoords(block);

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

function deleteBlock() {
    localStorage.clear();
    field.removeChild(block);
    block = null;
    savedBlock = null;
}

function submitName() {
    const nameField = document.getElementById('block-name-field');
    const newName = document.getElementById('block-name-field-input').value;
    document.getElementById('block-name-form').style.display = 'none';
    nameField.style.display = 'block';
    nameField.innerText = newName;
    localStorage.setItem("block-name-field", newName);
}

function changeName() {
    const nameField = document.getElementById('block-name-field');
    const currentName = nameField.innerText;
    nameField.style.display = 'none';
    document.getElementById('block-name-form').style.display = 'block';
    document.getElementById('block-name-field-input').value = currentName;
}
