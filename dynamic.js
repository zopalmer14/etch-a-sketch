
const grid_container = document.querySelector('#grid_container');

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