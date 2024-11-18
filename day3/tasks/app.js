
// 1 : Greeting Message

let gName = document.querySelector("#great-name");
let gBtn = document.querySelector("#great-submit");
let gMsg = document.querySelector("#great-msg");

gBtn.addEventListener("click", () => {
    let greeting = `Hello, ${gName.value}!`;
    gMsg.innerHTML = greeting;
});

// 2 : Favorite Color

let cBtn = document.querySelector("#c-submit");
let cName = document.querySelector("#n-input");
let cFav = document.querySelector("#c-input");
let cMsg = document.querySelector("#c-msg");

cBtn.addEventListener("click", ()=>{
    cMsg.innerHTML = `Hello ${cName.value}, your favorite color is ${cFav.value}`;
});

// 3 : Full Name Generator
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let name_submit = document.querySelector("#name-submit");
let msg_name = document.querySelector("#name-msg");

name_submit.addEventListener("click", ()=>{
    msg_name.innerHTML = `Hello ${fname.value} ${lname.value}`;
});

// 4 : Multi-Functional Counter

let increment = document.querySelector("#Increment");
let decrement = document.querySelector("#Decrement");
let reset = document.querySelector("#Reset");
let double = document.querySelector("#Double");
let counter = document.querySelector("#counter");
let step = document.querySelector("#value");
let count = 0;
counter.innerHTML = count;
increment.addEventListener("click",()=>{
    let stepValue = Number(step.value)|| 1;
   count += stepValue;
   counter.innerHTML = count;
});

decrement.addEventListener("click",()=>{
    let stepValue = Number(step.value)|| 1;
    count -= stepValue;
    counter.innerHTML = count;
});

reset.addEventListener("click",()=>{
    count = 0;
    counter.innerHTML = count;
});

double.addEventListener("click",()=>{
    count *= 2;
    counter.innerHTML = count;
});


// 5 : Student Report Card

let stfname = document.querySelector("#st-fname");
let stlname = document.querySelector("#st-lname");

let html = document.querySelector("#html");
let css = document.querySelector("#css");
let js  = document.querySelector("#js");

let marksBtn = document.querySelector("#marks-submit");

let report = document.querySelector("#rprt-msg");
let htmlMsg = document.querySelector("#html-msg");

let cssMsg = document.querySelector("#css-msg");

let jsMsg = document.querySelector("#js-msg");
let perMsg = document.querySelector("#per-msg");

marksBtn.addEventListener("click",()=>{
    let total = Number(html.value)+ Number(css.value) +Number(js.value);
    let percentage = total /300 *100;
    report.innerHTML = `Report for ${stfname.value} ${stlname.value} :`;
    htmlMsg.innerHTML = `marks in HTML : ${html.value}`;
    cssMsg.innerHTML = `marks in CSS : ${css.value}`;
    jsMsg.innerHTML = `marks in JavaScript : ${js.value}`;
    perMsg.innerHTML = `Your Total percentage is ${percentage}`;
});