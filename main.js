
let controlCount = 1;

function addControl() {
    const container = document.getElementById("controlContainer");

    const controlDiv = document.createElement("div");

    controlDiv.classList.add("random-color-div");
    const isFirst = container.childElementCount === 0;


    controlDiv.innerHTML = `
        <input type="number" placeholder="Number" min="1" class="quantity" style="width: 50px;" value="1">
        <input class="tag" type="text">
        <button class="random-color-btn">Random Color</button>
        ${isFirst ? '<button onclick="addControl()">+</button>' : ''}
        ${!isFirst ? ' <button onclick="removeControl()">-</button>' : ''}
       
        
    `;

    container.appendChild(controlDiv);

    const randomColorBtn = controlDiv.querySelector(".random-color-btn");
    randomColorBtn.addEventListener("click", () => {
        const color = getRandomColor();
        randomColorBtn.style.backgroundColor = color; // change only buuton color
       randomColorBtn.dataset.color = color;  // save as data
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function removeControl() {
    const container = document.getElementById("controlContainer");
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

function generateElements() {
    const controls = document.querySelectorAll(".random-color-div");
    const output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous output

    controls.forEach((control, index) => {
        const quantity = parseInt(control.querySelector(".quantity").value) || 1;
        const tag = control.querySelector(".tag").value || "div";
        const color = control.querySelector(".random-color-btn").dataset.color || "#cccccc"; 

        for (let i = 1; i <= quantity; i++) {
            const element = document.createElement(tag);

            element.classList.add("generated-div");
            element.style.backgroundColor = color;
            element.textContent = `${tag} ${index + 1}-${i}`;
            output.appendChild(element);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    addControl();
});
