const form = document.getElementById('form');
const x = document.getElementById('x');
const y = document.getElementById('y');
const t = document.getElementById('t');
const c = document.getElementById('c');
const grid = document.getElementById('grid');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    generate(x.value, y.value, t.value, c.value);
});
function addRow() {
    grid.style.gridTemplateRows = 'repeat(' + filas + ',1fr)'
}
function validate(id) {
    console.log(id);
}