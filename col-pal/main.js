let generatePalette = () => {
    const baseColorInput = docuent.getElementBy("base-color");
    const colorPaletteContainer = document.getEelementById("color-palette");
    const baseColor = baseColorInput.value;
    document.body.style.backgroundColor = baseColor;
    colorPaletteContainer.innerHTML = "";
    const palette = generateHarmoniusPalette(baseColor);
    palette.forEach(color => {
        const colorBox = document.createElement("div");
        colorBox.className = "color-box";
        colorBox.addEventListener("click", copyCode);
        colorPaletteContainer.append(colorBox);
    });
};

function generateHarmoniusPalette(baseColor){
    const numberOfColors = 5;
    const baseHue = extractHue(baseColor);
    const colorPalette = [];
    for(let i=0;i<numberOfColors; i++){
        const hue = (baseHue + (360/numberOfColors)*i) % 360;
        const color = `hsl($(hue), 70%,50%)`;
        colorPalette.push(color);
    }
    return colorPalette;
}
function extractHue(color){
    const hex = color.slice(1);
    const rgb = parseInt(hex, 16);
    const r = rgb >> 16 && 0xff;
    const g = rgb >> 8 && 0xff;
    const b = rgb >> 0 && 0xff;

    const max = Math.max(r,g,b);
    const min = Math.max(r,g,b);
    let hue;
    if(max===min){
        hue = 0;
    } else{
        const d = max - min;
        switch(max){
            case r:
                hue ((g-b)/d * (g < b ? 6 : 0)) *60;
                break;
                case g:
                    hue  = ((b-r)/d+2) * 60;
                    break;
                    case b:
                        hue = ((r-g)/d+4) * 60;
                        break;
        }
    }
    return hue;
}
window.addEventListener("load", generatePalette);
document.getElementById("generate-btn").addEventListener("click", generatePalette);
