let columnsAndRows;
let board = document.querySelector(".board");

newSketchPad();

function newSketchPad(){
    if (!columnsAndRows){
        columnsAndRows=16;
        GridResize();   
        for (let x = 0; x < columnsAndRows*columnsAndRows; x++){
            createDivs();
        }
        changeClassOnHover();
    } else {
        columnsAndRows = cellNumberPrompt();
        GridResize();
        board.innerHTML=""; // removes initial divs
        for (let x = 0; x < columnsAndRows*columnsAndRows; x++){
            createDivs();
        }
        changeClassOnHover();
    }
}

function cellNumberPrompt(){
    return prompt("How many rows and columns should your sketchpad have?",)
}
function GridResize(){
    let gridSize = "auto ".repeat(columnsAndRows);
    board.setAttribute("style", `grid-template-columns: ${gridSize}; grid-template-rows: ${gridSize};`); //resizes grid to desired size
}
function createDivs(){
    var sketchCell = document.createElement('div');
    sketchCell.className = "sketchcell";
    board.appendChild(sketchCell);
    
}

function changeClassOnHover(){
    const allSketchCells = document.querySelectorAll(".sketchCell");
allSketchCells.forEach(cell=>cell.addEventListener('mouseover',(e)=>{
    cell.className = "sketchcellHovered";
}))
}