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
const startSize = 16;
displayValue.innerHTML = startSize + 'x' + startSize
let mousedown = true;

function slider() {

    let value = rangeValue.value
    if (value == 1) {
        displayValue.innerHTML = '16' + 'x' + '16'
        grid.innerHTML = ''
        return createGrid(16)
    } else if (value == 2) {
        displayValue.innerHTML = '32' + 'x' + '32'
        grid.innerHTML = ''
        return createGrid(32)

    } else if (value == 3) {
        displayValue.innerHTML = '64' + 'x' + '64'
        grid.innerHTML = ''
        return createGrid(64)

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

    


        blackBtn.addEventListener('click', () => {
            
                return thisStyle = 'black'
            })
       


    
    eraserBtn.addEventListener('click', () => {
        
            return thisStyle = 'white'
    })
  

    randomBtn.addEventListener('click', () =>{
         return thisStyle = 'rainbow'
        
    })
    
   

}






function changeColor() {
    colorPicker()
   
    
    
    if(thisStyle === 'rainbow'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }else{
        
        this.style.backgroundColor = thisStyle;
    }



}


body.addEventListener("mousedown", () => {
    mousedown = !mousedown;


});

function resetGrid() {
    resetBtn.addEventListener('click', () => {
        grid.innerHTML = ''
        slider()
    })

}

function startGrid() {
    createGrid(startSize)
    resetGrid()




}

startGrid()
