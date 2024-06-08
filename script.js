const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
const page4 = document.querySelector("#page4");
const page5 = document.querySelector("#page5");
const page6 = document.querySelector("#page6");
const card = document.querySelector(".card");
let music3 = new Audio("ILOVEU.mp3");
let music4 = new Audio("sudhrenge.mp3");
let music5 = new Audio("chattebatte.mp3");
let music6 = new Audio("itnisihasi.mp3");

page1.addEventListener("click",()=>{
    page1.classList.add("flip");
    page1.innerHTML = '';
})

page2.addEventListener("click",()=>{
    page2.classList.add("flip");
    music3.play();
})

page3.addEventListener("click",()=>{
    page3.classList.add("flip");
    music4.play();  
    music3.pause();
})

page4.addEventListener("click",()=>{
    page4.classList.add("flip");
    music5.play();
    music4.pause();
})

page5.addEventListener("click",()=>{
    page5.classList.add("flip");
    music5.pause();
    music6.play();
})

page6.addEventListener("click",()=>{
    page1.classList.add("home");
    page2.classList.add("home");
    page3.classList.add("home");
    page4.classList.add("home");
    page5.classList.add("home");
    page6.classList.add("home");
    page1.innerHTML = "<h2>Happy Birthday</h2><h3>Nandish</h3><div class='imgcontainer'><img src='WhatsApp Image 2024-06-07 at 22.57.40_70be0b38.jpg' </div>"
    music6.pause();
})

