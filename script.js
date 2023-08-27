const canvas = document.getElementById('canvas');


for (let i = 1; i < 17; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    canvas.appendChild(row);
    for (let column = 1; column < 17; column++) {
        const box = document.createElement("div");
        box.classList.add("cuadrado");
        row.appendChild(box);

        box.addEventListener('mouseover', () => {box.style.backgroundColor = "blue";})
    }
}







