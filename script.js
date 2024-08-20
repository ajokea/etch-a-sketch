const body = document.querySelector('body');

const grid = document.querySelector('.grid');

const createGrid = function(n) {
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        grid.removeChild(row);
    });
    for (let i = 0; i < n; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for (let j = 0; j < n; j++) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col');
            rowDiv.appendChild(colDiv);
        }
        grid.appendChild(rowDiv);
    }

    const cells = document.querySelectorAll('.col');
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
            if (!cell.style.backgroundColor) {
                cell.style.opacity = '0.1';
                cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
            } else {
                if (cell.style.opacity < 1) {
                    cell.style.opacity = `${+cell.style.opacity + 0.1}`;
                }
            }
        })
    });
}

const div = document.createElement('div');
div.classList.add('dimensionSelector');
const btn = document.createElement('button');

btn.textContent = 'GRID DIMENSIONS';
btn.addEventListener('click', () => {
    let dimension;
    do {
        dimension = +prompt('Enter a number (between 1 - 100) to create an n x n grid.');
        if (dimension < 1) {
            dimension = 1;
        } else if (dimension > 100) {
            dimension = 100;
        }
    } while (!dimension)
    createGrid(dimension);
});

div.appendChild(btn);
body.prepend(div);

createGrid(16);