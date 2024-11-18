// console.log("hello world");

let btn = document.querySelector('#submit');
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let result = document.querySelector('#result');

btn.addEventListener('click', () =>{
    // console.log(Number(a.value) + Number(b.value));
    result.innerHTML = Number(a.value) + Number(b.value);
});