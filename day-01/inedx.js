 

function generateColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    
    return `rgb(${red},${green}, ${blue})`;
}

// onclick function used

function changeColor(){
    const bgc = document.getElementById('contianer');
    const headline = document.getElementById('headline');
    bgc.style.backgroundColor = generateColor();
}