let board = document.querySelector(".board");
let gridResize = "auto ".repeat(16);

board.setAttribute("style", `grid-template-columns: ${gridResize}; grid-template-rows: ${gridResize};`);

for (let x = 0; x < 256; x++){
    var sketchCell = document.createElement('div');
    sketchCell.className = "sketchcell";
    board.appendChild(sketchCell);
}

let allSketchCells = Array.from(document.querySelectorAll(".sketchCell"));
allSketchCells.forEach(cell=>cell.addEventListener('mouseover', (e)=>{
    if(cell.className == "sketchcellHovered")
    {
        cell.className ="sketchcell";
    } else {
        cell.className = "sketchcellHovered"
    }
}))

