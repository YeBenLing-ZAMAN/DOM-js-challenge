 
 // 255 modh amar lagbe tai 

 function generateColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// onclick function used

document.getElementById('btn').addEventListener('click',function (){
    const bgc = document.getElementById('contianer');
    const inoutField = document.getElementById('inputfeild');
    const headline = document.getElementById('headline');
    const colorCode = generateColor();
    bgc.style.backgroundColor = colorCode;
    inoutField.value = colorCode;
});