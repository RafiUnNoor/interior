


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");



slider.addEventListener('input', e=>{
    output.style.width = e.target.value + 'px'
});

var color = document.getElementById("myColor");
color.addEventListener("input" , ()=>{
    output.style.backgroundColor = color.value
});


// make a name space object
const makeStudySpace = {};

// cache selectors
makeStudySpace.$deskInput = $('input#desk');
makeStudySpace.$coffeeTableInput = $('input#coffeeTable');

// make function to show the photo on the canvas and pass value selected
makeStudySpace.showPhoto = function(value){
    // make variable for the selected photo 
    let chosenPhoto = $(`.canvas .imageContainer.${value}`);
    
    // toggle the show class on the chosen photo
    chosenPhoto.toggleClass('show');
}