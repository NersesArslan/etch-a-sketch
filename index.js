
const container = document.querySelector('.container');

const button = document.querySelector('.btn');
const reset = document.querySelector('.reset');





button.addEventListener('click', () => {
  changeSize();
})

function changeSize(){
  let number = prompt("How many grids do you want?");
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  gridMaker(number);
}

function gridMaker(size) {

  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

for(let i = 0; i < size*size; i++){
  const grid = document.createElement('div');
  grid.classList.add('grid');
  container.appendChild(grid);

  let color = [, "#3C9EE7", "#E7993C",
            "#E73C99", "#3CE746", "#E7993C"];
  grid.addEventListener('mouseover', function() {
    grid.style.background = color[Math.floor(Math.random() * color.length)];
  })
  reset.addEventListener('click', function(e) {
    grid.style.background = 'white';
 })
  }
}

gridMaker(16);






  
 











