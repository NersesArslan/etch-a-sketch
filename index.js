const container = document.querySelector('.container');

const button = document.querySelector('.btn');
const reset = document.querySelector('.reset');



button.addEventListener('click', () => {
  prompt("How many grids do you want?");
  
})


function gridMaker(num) {
for(let i = 0; i < num**2; i++){
  const grid = document.createElement('div');
  grid.classList.add('grid');
  container.appendChild(grid);
  }
}


grid = document.querySelectorAll('div.grid');

let color = [, "#3C9EE7", "#E7993C",
            "#E73C99", "#3CE746", "#E7993C"];

grid.forEach((div) => {
  div.addEventListener('mouseover', function() {
    div.style.background = color[Math.floor(Math.random() * color.length)];
  })
  reset.addEventListener('click', function(e) {
     div.style.background = 'white';
  })
})





