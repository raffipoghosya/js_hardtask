
    let controlCount = 1;

function addControl() {
    const container = document.getElementById("controlContainer");

    const controlDiv = document.createElement("div");
    controlDiv.classList.add("control-group");
    controlDiv.innerHTML = `
        <input type="number" placeholder="Number" min="1" class="quantity" style="width: 50px;">
        <select class="tag">
            <option value="div">div</option>
            <option value="span">span</option>
            <option value="p">p</option>
            <option value="button">button</option>
        </select>
        <input type="color" class="color-picker" value="#cccccc">
    `;
    container.appendChild(controlDiv);
}

function removeControl() {
    const container = document.getElementById("controlContainer");
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

function generateElements() {
    const controls = document.querySelectorAll(".control-group"); 
    const output = document.getElementById("output");
    output.innerHTML = ""; // clean lasts

    controls.forEach((control) => {
        const quantity = control.querySelector(".quantity").value || 1; 
        const tag = control.querySelector(".tag").value;
        const color = control.querySelector(".color-picker").value; 

        for (let i = 1; i <= quantity; i++) {
            const element = document.createElement(tag);

            element.classList.add("generated-div");
            element.style.backgroundColor = color; 
            element.textContent = `${tag} ${i}`;
            output.appendChild(element);
        }
    });
}


