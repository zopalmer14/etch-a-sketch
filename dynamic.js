
// USEFUL DOM REFERENCES

const grid_container = document.querySelector('#grid_container');
const reset_btn = document.querySelector('#reset_button');

// GRID RESET (BUTTON CLICK)

reset_btn.addEventListener('click', () => {
    // prompt the user for the grid dimensions
    let grid_dim = prompt("Enter the number of squares per side for the new grid");

    // delete the current grid, then create a new one with the specified dimensions
    grid_container.replaceChildren();
    createGrid(grid_dim);
});

// GRID CREATION

let columnStyle = `
    display: flex;
    flex-direction: column;
    margin: 0px 1px;
    flex: 1 1 0;
`;

let tileStyle = `
    background-color: white; 
    margin: 1px 0px;
    flex: 1 1 0;
`;

function createGrid(grid_dim) {
    for (let col = 0; col < grid_dim; col++) {
        // create a column flex-container for the tiles
        const column = document.createElement('div');
        column.style.cssText = columnStyle;
        grid_container.appendChild(column);

        // create tiles for each of the column containers
        for (let row = 0; row < grid_dim; row++) {
            // create a tile, assign the css styling, then append to the column
            const tile = document.createElement('div');
            tile.style.cssText = tileStyle;
            column.appendChild(tile);

            // create an eventListener to change the color of the tile when moused-over 
            tile.addEventListener('mouseover', function (e) {
                e.target.style.backgroundColor = 'lightgray';
            });
        }
    }
}

createGrid(16);