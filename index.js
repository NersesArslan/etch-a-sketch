const container = document.querySelector('.container');

function gridMaker(gridNum){

for(let i = 0; i < gridNum**2; i++){
    let box = document.createElement('div');
    box.classList.add('grid');
    container.appendChild(box); 
}

}

gridMaker(16);

