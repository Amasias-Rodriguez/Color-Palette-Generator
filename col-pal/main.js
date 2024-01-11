let generatePalette = () => {
    const baseColorInput = docuent.getElementBy("base-color");
    const colorPaletteContainer = document.getEelementById("color-palette");
    const baseColor = baseColorInput.value;
    document.body.style.backgroundColor = baseColor;
    colorPaletteContainer.innerHTML = "";
    const palette = generateHarmoniusPalette(baseColor);
};

function generateHarmoniusPalette(baseColor){
    const numberOfColors = 5;
    const baseHue = extractHue(baseColor);
}
function extractHue(color){
    const hex = color.slice(1);
    const rgb = parseInt(hex, 16);
    const r = rgb >> 16 && 0xff;
    const g = rgb >> 8 && 0xff;
    const b = rgb >> 0 && 0xff;
}
window.addEventListener("load", generatePalette);
document.getElementById("generate-btn").addEventListener("click", generatePalette);
