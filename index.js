const container = document.querySelector('.container');

for(let i = 0; i < 16**2; i++){
  const grid = document.createElement('div');
  grid.classList.add('grid');
  container.appendChild(grid);
}

grid = document.querySelectorAll('div.grid');

grid.forEach((div) => {
  div.addEventListener('mouseover', function() {
    div.style.background = "#3C9EE7";
  })
}
)
