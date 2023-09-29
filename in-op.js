
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");



slider.addEventListener('input', e=>{
    output.style.width = e.target.value + 'px'
});

var color = document.getElementById("myColor");
color.addEventListener("input" , ()=>{
    output.style.backgroundColor = color.value
});


document.getElementById("lamp3").addEventListener("click",function(){
   var lamp3 = document.getElementById("lampThree");
   if(lamp3.style.display == 'none'){
    lamp3.style.display = 'block';
   }else{lamp3.style.display = 'none';}
   event.preventDefault();  
});

document.getElementById("plantCanvas").addEventListener("click",function(){
   var plnt = document.getElementById("plantation");
   if(plnt.style.display == 'none'){
    plnt.style.display = 'block';
   }else{plnt.style.display = 'none';}
   event.preventDefault();  
});
