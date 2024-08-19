const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');
        rowDiv.appendChild(colDiv);
    }
    grid.appendChild(rowDiv);
}
const changeCellColor = function (cell) {
    cell.style.backgroundColor = 'blue';
};

const cells = document.querySelectorAll('.col');
cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = 'blue';
    })
});