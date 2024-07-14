const redSlider = document.getElementById('redSlider');
const blueSlider = document.getElementById('blueSlider');
const greenSlider = document.getElementById('greenSlider');

const redValue = document.getElementById('red-value');
const blueValue = document.getElementById('blue-value');
const greenValue = document.getElementById('green-value');

const colorBox = document.querySelector('.color-box');
const copyBtn = document.getElementById('copy-btn');
const inputType = document.getElementById('input-type');

redSlider.addEventListener('input', () => {
    redValue.textContent = redSlider.value;
    updateColor();
});
blueSlider.addEventListener('input', () => {
    blueValue.textContent = blueSlider.value;
    updateColor();
});
greenSlider.addEventListener('input', () => {
    greenValue.textContent = greenSlider.value;
    updateColor();
});

copyBtn.addEventListener('click', () => {
    const rgbColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value} )`;
    navigator.clipboard.writeText(rgbColor).then(() => {
        copyBtn.innerText = 'copied';
        setTimeout(() => copyBtn.innerText = 'copy RGB Color', 1000);
    });
});

function updateColor() {
    const rgbColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value} )`; 
    colorBox.style.backgroundColor = rgbColor;
    inputType.style.backgroundColor = rgbColor;
    inputType.innerHTML = rgbColor;
}
