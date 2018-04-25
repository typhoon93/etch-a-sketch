let columnsAndRows;
let board = document.querySelector(".board");
let currentChoice;
newSketchPad();

function newSketchPad(type){
    if (!columnsAndRows){
        columnsAndRows=16;
        GridResize();   
        basicCanvas();
    } else {
        columnsAndRows = cellNumberPrompt();
        GridResize();
        if (currentChoice=="colorful"){
            colorfulCanvas();
        } else if (currentChoice =="basic" ){
            basicCanvas();    
        }
    }
}

function cellNumberPrompt(){
    return prompt("How many rows and columns should your sketchpad have?",)
}
function GridResize(){
    let gridSize = "auto ".repeat(columnsAndRows);
    board.setAttribute("style", `grid-template-columns: ${gridSize}; grid-template-rows: ${gridSize};`); //resizes grid to desired size
}
function createDivs(){ //creates the squares inside the sketchpad as DIVs
    for (let x = 0; x < columnsAndRows*columnsAndRows; x++){
        var sketchCell = document.createElement('div');
        sketchCell.className = "sketchcell";
        board.appendChild(sketchCell);
    }
}

function changeClassOnHover(){ // changes class on HOVER, hover color becomes black
  
    const allSketchCells = document.querySelectorAll(".sketchCell");
    allSketchCells.forEach(cell=>cell.addEventListener('mouseover',(e)=>{
        cell.className = "sketchcellHovered";
    }))
}

function randomColorOnHover(){ // gives random color to cell on hover
    const allSketchCells = document.querySelectorAll(".sketchCell");
    allSketchCells.forEach(cell=>cell.addEventListener('mouseover',(e)=>{
        cell.style.backgroundColor = getRandomRGBColor();
    }))
}

function clearCanvas(){
    if (currentChoice=="colorful"){
        colorfulCanvas()
    } else if (currentChoice =="basic" ){
        basicCanvas()    
    }
}

function getRandomRGBColor(){ // returns random rgb color, each random value between 0-255
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return "rgb(" + red +", " + green + ", " + blue + (")")
}

function colorfulCanvas(){
    currentChoice = "colorful"; //remembersmyCurrentChoice
    board.innerHTML=""; // removes initial divs   
    createDivs();
    randomColorOnHover();
}
function basicCanvas(){
    currentChoice = "basic"; //remembers My Current Choice
    board.innerHTML=""; // removes initial divs   
    createDivs();
    changeClassOnHover();
}

let clickableButtons = Array.from(document.querySelectorAll('button'));
clickableButtons.forEach(button=>button.addEventListener('click',(e)=>{
    if (button.className == "resizeCanvas"){
        newSketchPad();
    } else if(button.className=="clearCanvas"){
        clearCanvas();
    } else if (button.className=="colorfulCanvas"){
        if(currentChoice=="colorful"){
            alert("Canvas is already colorful!");
        } else colorfulCanvas();
    } else if (button.className=="basicCanvas"){
        if(currentChoice=="basic"){
            alert("Canvas is already in basic mode!");
        } else basicCanvas();
    }

}))