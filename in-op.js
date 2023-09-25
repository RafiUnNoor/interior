
const input = document.querySelector("input");
input.oninput = ()=>{
    const blank = document.getElementById('box');
    blank.style.backgroundColor = input.value;
};