var board = document.querySelector(".board");

for (let x = 0; x < 256; x++){
    var sketchCell = document.createElement('div');
    sketchCell.className = "sketchcell";
    board.appendChild(sketchCell);
}