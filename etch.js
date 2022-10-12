const resetBtn = document.getElementById('reset')
const rangeValue = document.getElementById('myRange');
const blackBtn = document.getElementById("blackBtn");
const greyBtn = document.getElementById("greyBtn");
const eraserBtn = document.getElementById("eraserBtn");
const randomBtn = document.getElementById('rainbow')
const body = document.getElementById('body');
const grid = document.querySelector("#gridContainer");
const displayValue = document.getElementById('slider-value')
let thisStyle = 'black'
const startSize = rangeValue.value;

let mousedown = true;

function slider(){
    displayValue.innerHTML = startSize + 'x' + startSize
    let value = rangeValue.value
    if (value == 16){
        displayValue.innerHTML = rangeValue.value + 'x' + rangeValue.value
        grid.innerHTML = ''
        return createGrid(value)
    }else if(value == 32){
        displayValue.innerHTML = rangeValue.value + 'x' + rangeValue.value
        grid.innerHTML = ''
        return createGrid(value)
        
    }else if(value == 64){
        displayValue.innerHTML = rangeValue.value + 'x' + rangeValue.value
        grid.innerHTML = ''
        return createGrid(value)
 
    }else if(value == 128){
        displayValue.innerHTML = rangeValue.value + 'x' + rangeValue.value
        grid.innerHTML = ''
        return createGrid(value)
        
    }
    
}

const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano', 
    default: 'red',

    swatches: [
        'black',
        'red',
        'orange',
        'blue',
        'green',
        'purple',
        'pink',
        'yellow',
    ],

    components: {

       
        preview: true,
        opacity: true,
        hue: true,

       
        interaction: {
            hex: true,
            rgba: true,
            input: true,
            clear: true,
            save: true
        }
    }
});



pickr.on('change', (color) => {
    
    const rgbaColor = color.toRGBA().toString()
    console.log(rgbaColor)
   
    return thisStyle = rgbaColor
    
})



function createGrid(sizeMaximum) {
        let size = sizeMaximum
    
    
    for (let i = 1; i <= size * size; i++) {
        
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        const div = document.createElement("div");
        div.classList.add("gridChild");
        grid.append(div);

        div.addEventListener("mouseover", changeColor)
        
    }
}




function colorPicker() {
    
    if(mousedown)


   

    blackBtn.addEventListener('click', () => {
        return thisStyle ='black'
    })

    eraserBtn.addEventListener('click', () => {
        return thisStyle = 'white'
    })

    randomBtn.addEventListener('click', () =>{
        return randomColor()
    })
}






function changeColor(e) {
    colorPicker()

    if (!mousedown) {
            e.target.style.backgroundColor = thisStyle;
        
    }



}

function randomColor(){
    let randomColors = Math.floor(Math.random() *16777215).toString(16);

    let colors = '#' + randomColors;

    return thisStyle = colors * 256;
    
}
body.addEventListener("mousedown", () => {
    mousedown = !mousedown;
    
    
});

function resetGrid(){
    resetBtn.addEventListener('click', () =>{
        grid.innerHTML = ''
        slider()
    })
    
}

function startGrid(){
createGrid(startSize)
resetGrid()



}

startGrid()
