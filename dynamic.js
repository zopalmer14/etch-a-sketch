
// USEFUL DOM REFERENCES

const grid_container = document.querySelector('#grid_container');
const reset_btn = document.querySelector('#reset_button');

// GRID RESET (BUTTON CLICK)

reset_btn.addEventListener('click', () => {
    // prompt the user for the grid dimensions
    let grid_dim = prompt("Enter the number of squares per side for the new grid");

    // delete the current grid, then create a new one with the specified dimensions
    grid_container.replaceChildren();
    createGrid(grid_dim, grid_dim);
});

// GRID CREATION

let tileStyle = `
    background-color: white; 
    margin: 0.25vh; 
    width: 4vh; 
    height: 4vh;
`;

function createGrid(numRows, numCols) {
    for (let col = 0; col < numCols; col++) {
        for (let row = 0; row < numRows; row++) {
            // create a tile, assign the css styling, then append to the grid
            const tile = document.createElement('div');
            tile.style.cssText = tileStyle;
            grid_container.appendChild(tile);

            // create an eventListener to change the color of the tile when moused-over 
            tile.addEventListener('mouseover', function (e) {
                e.target.style.backgroundColor = 'lightgray';
            });
        }
    }
}

createGrid(16, 16);