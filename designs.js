
const pixelCanvas = document.querySelector("#pixelCanvas");
pixelCanvas.addEventListener("click", drawPixel);


// When size is submitted by the user, call makeGrid()
document.querySelector("#sizePicker").addEventListener("submit", makeGrid);


function makeGrid(event) {
    event.preventDefault();
    const inputHeight = document.querySelector("#inputHeight").value; // Select Height size input
    const inputWidth = document.querySelector("#inputWidth").value; // Select width size input

    while (pixelCanvas.firstChild) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }

    for(let row = 1; row <= inputHeight; row++){
        const tr = document.createElement('tr');
        pixelCanvas.appendChild(tr);
        for(let column = 1; column <= inputWidth; column++ ){
            let td = document.createElement('td');
            tr.appendChild(td);
        }
    }  
}

function drawPixel(event){
    const colour = document.querySelector("#colorPicker").value; // Select color input
    event.target.style.backgroundColor = colour;
}
