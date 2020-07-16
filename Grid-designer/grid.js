function createGridArray() {
    //Create and return a grid array
    return [
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    ]
}

function createDivGrid(grid){
    for (let row = 0; row < NUM_ROWS; row ++){
        for (let col = 0; col <NUM_COLS; col ++){
            //Create a div for each element in 2d grid 
            let divEl = document.createElement("div");

            //Add appropriate class to each divEl
            
            if (grid[row][col] == 1) {
                divEl.classList.add("grey");
            }
            
            //add Data values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col;

            //Add an event listener to each divEl
            divEl.addEventListener("click", cellClicked)
            //Add div to container
            document.getElementById("container").append(divEl);
        }
    }

}

function cellClicked() {
    //Set the color of the clicked cell

    //Get value of color select element
    let color = document.getElementById('cell-color').value;
    //Get row and col of the clicked cell
    let row = event.target.dataset.row;
    let col = event.target.dataset.col;

    //clear class list of cell
    event.target.classList = "";
    grid[row][col] = 0; // set grid to white
    if (color == "grey") {
        event.target.classList.add("grey");
        grid[row][col] = 1;
    }
}