const reset = document.getElementById('reset')
const rangeValue = document.getElementById('myRange');
const blackBtn = document.getElementById("blackBtn");
let greyBtn = document.getElementById("greyBtn");
const eraserBtn = document.getElementById("eraserBtn");
const randomBtn = document.getElementById('rainbow')

let thisStyle = 'black'
const startSize = rangeValue.value;
let mousedown = true;

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
        const grid = document.querySelector("#gridContainer");
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        const div = document.createElement("div");
        div.classList.add("gridChild");
        grid.append(div);

        div.addEventListener("mouseover", changeColor);
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
        
    })
}






function changeColor(e) {
    colorPicker()

    if (!mousedown) {



        if (thisStyle) {
            e.target.style.backgroundColor = thisStyle;
        }
    }



}

function randomColor(){
    
}

document.querySelector("body").addEventListener("mousedown", () => {
    mousedown = !mousedown;
    
    
});

function startGrid(){
createGrid(startSize)


reset.addEventListener('click', () => {
    location.reload()
})


}

startGrid()