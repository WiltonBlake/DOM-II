// mouseover
const itemNav = document.querySelector("nav");
itemNav.addEventListener("mouseover", blueFunction);
itemNav.addEventListener("mouseout", whiteFunction);

function blueFunction() {  
   itemNav.setAttribute("style", "background-color:blue;")
}

function whiteFunction() {  
   itemNav.setAttribute("style", "background-color:white;")
}

// keydown
document.addEventListener("keydown", (event) => {
    event.target.style.background = 'pink';
});
document.addEventListener("keyup", (event) => {
    event.target.style.background = 'white';
});

// wheel
document.addEventListener("wheel", blueFunction);

//// drag/drop
document.addEventListener("drag", blueFunction);

// load
document.addEventListener("load", blueFunction);

// focus
const itemNav2 = document.querySelector('nav');

itemNav2.addEventListener("focus", (event) => {
  event.target.style.background = 'pink';    
}, true);

itemNav2.addEventListener("blur", (event) => {
  event.target.style.background = "";    
}, true);

// resize
window.addEventListener('resize', blueFunction);

// scroll
document.addEventListener("scroll", blueFunction);

// click
// document.querySelector("h2").addEventListener("click", (e) => {
//     e.target.style.color = "red";
// });
document.addEventListener("click", blueFunction);


// dblclick
document.addEventListener("dblclick", whiteFunction);







// const item = document.querySelector("nav");
// item.addEventListener("keydown", blueFunction);

// function blueFunction() {  
//     item.setAttribute("style", "background-color:blue;")
//  }

// document.querySelector("nav").addEventListener("mouseover", function(event) {
//     event.target.style.color = "yellow";
// })
// setTimeout(function() {
//     event.target.style.color = "blue";
//   }, 500);
// }, false);

// document.querySelector("img-content").addEventListener("keydown", function() {
//     visibility:hidden;
// })
