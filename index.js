const container = document.querySelector('.container');



for(let i = 0; i < 16; i++){
let box = document.createElement('div');
box.classList.add('box');
    for(let j = 0; j < 16; j++){
        let column = document.createElement('div');
        column.classList.add('column');
        box.appendChild(column);
    }
container.appendChild(box);
}





