 
 // 255 modh amar lagbe tai 

 function generateColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}


// for generate the code and set this code on input field 
document.getElementById('btn').addEventListener('click',function (){
    const bgc = document.getElementById('contianer');
    const inputField = document.getElementById('inputfeild');
    const headline = document.getElementById('headline');
    const colorCode = generateColor();
    bgc.style.backgroundColor = colorCode;
    inputField.value = colorCode;
});

//for copy the generated color code 

document.getElementById('btn-copy').addEventListener('click', function(event){
    const inputField = document.getElementById('inputfeild');
    navigator.clipboard.writeText(inputField.value);
    // for showing toasts in 
    myFunction(inputField.value);
    // for stoping bubble 
    event.stopImmediatePropagation();
})

//  for show in a toasts when copy is done 

function myFunction(colorCode) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  //showing color code with copy in index toasts message
  x.innerHTML = colorCode + ' copyed' ;

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
