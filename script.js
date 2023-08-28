const canvas = document.getElementById('canvas');
let mode = 'normal';
let dimension = 16

for (let i = 0; i < dimension; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    canvas.appendChild(row);
    for (let j = 1; j < dimension; j++) {
        const box = document.createElement('div');
        box.classList.add('cuadrado');
        row.appendChild(box)

        box.addEventListener('mouseenter', () => {
            if (mode === 'normal'){
                box.style.backgroundColor = 'blue';
            } else if (mode === 'eraser'){
                box.style.backgroundColor = 'white';
            } else if (mode === 'rainbow'){
                box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)})`;
            }
        })
        
    }
}

const clear = document.getElementById('clear')
clear.addEventListener('click', () =>{
    const allBox = document.querySelectorAll('.cuadrado')
    for (let i = 0; i<allBox.length; i++){
        allBox[i].style.backgroundColor ='white';
    }
})

const normal = document.getElementById('normal')
normal.addEventListener('click', () =>{
    mode = 'normal';
})


const eraser = document.getElementById('eraser')
eraser.addEventListener('click', () =>{
    mode = 'eraser';
})

const rainbow = document.getElementById('rainbow')
rainbow.addEventListener('click', () =>{
    mode = 'rainbow';
})


const size = document.getElementById('size')
size.addEventListener('click', () =>{
    let userInput = prompt("Please enter dimension less than 100", "Ej: 16");
    while (userInput == null || userInput <= 0 || userInput > 100){
        userInput = prompt("Please enter a valid dimension", "Ej: 16");
    }
    dimension = userInput

    //deletes grid
    const allRow = document.querySelectorAll('.row')
    for (let i = 0; i<allRow.length; i++){
        allRow[i].remove();
    }
    const allBox = document.querySelectorAll('.cuadrado')
    for (let i = 0; i<allBox.length; i++){
        allBox[i].remove();
    }
    //remakes new grid with user input
    for (let i = 0; i < dimension; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        canvas.appendChild(row);
        for (let j = 0; j < dimension; j++) {
            const box = document.createElement('div');
            box.classList.add('cuadrado');
            row.appendChild(box)
    
            box.addEventListener('mouseenter', () => {
                if (mode === 'normal'){
                    box.style.backgroundColor = 'blue';
                } else if (mode === 'eraser'){
                    box.style.backgroundColor = 'white';
                } else if (mode === 'rainbow'){
                    box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)})`;
                }
            })
            
        }
    }
})
