
const grid_container = document.querySelector('#grid_container');

function createGrid(numRows, numCols) {
    for (let col = 0; col < numCols; col++) {
        for (let row = 0; row < numRows; row++) {
            const tile = document.createElement('div');
            tile.style.cssText = 'background-color: white; margin: 0.25vh; width: 4vh; height: 4vh;';
            grid_container.appendChild(tile);
        }
    }
}

createGrid(16, 16);