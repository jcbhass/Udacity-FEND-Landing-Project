//HTML elements in JavaScript
const navMenu = document.getElementsByTagName('nav');
const navUl  = document.getElementsByClassName('.nav__menu');
const navSections = document.getElementsByTagName('section');
const navList = document.createElement('li');
const navAnchor = document.createElement('a');
const navAnchorName = document.querySelector('data-nav');
//const newNavList = navUl.appendChild()

navMenuItems = [];
document.addEventListener('load', navMenuBar);
function navMenuBar() { 
  for (let i = 0; i < navSections.length; i++) { 
  
    navMenuItems.push(navSections[i].dataset.name); 
  } 
}

console.log(navMenuItems);
   


// As seen here: https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/ 

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const bounding = navMenuItems.getBoundingClientRect;
console.log(bounding);
