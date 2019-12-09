const navUl  = document.getElementById('navbar__list'); //style class id
const navSections = document.getElementsByTagName('section');//get section
const navMenu = document.getElementsByTagName('nav'); //get navbar

function navMenuBar(section) {
    for(i = 0; i < navSections.length; i++) {
        var eachSection = navSections[i]; //separate to iterate over
        
        if (eachSection.hasAttribute('data-nav')) {
            var line = document.createElement('li'); // creates list element
            line.classList.add('navbar__menu'); //adds style class to list element
            line.classList.add('menu__link'); //adds style hover class
            //line.classList.add('your-active-class');
            var sectionInfo = eachSection.getAttribute('data-nav'); //gets the data-nav text info identifying each section
            var sectionName = document.createTextNode(sectionInfo); //defines the section name
            
            var anchor = document.createElement('a'); //create anchor element 
            var sectionId = eachSection.getAttribute('id'); //go to id instead of creating href-link
            line.appendChild(anchor); //attach anchor to list
            line.appendChild(sectionName); //adds the section name to the list

            //go to section when navbar is clicked. Also activate the section styles when viewing.
            line.addEventListener('click', function() {
                document.getElementById(sectionId).scrollIntoView({
                    behavior: 'smooth'
                });
                sectionId.style = ('section.your-active-class');//add active class when clicked. 
                sectionId.style = ('landing__container');
            });
            
            navUl.appendChild(line); //adds the list to the unordered list element
            
        
        };
        
    };    

};



navMenuBar();


//highlight navbar when reading that section

// // As seen here: https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/ 

// var isInViewport = function (elem) {
//   var bounding = elem.getBoundingClientRect();
//   return (
//       bounding.top >= 0 &&
//       bounding.left >= 0 &&
//       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

// const bounding = navMenuItems.getBoundingClientRect;
// console.log(bounding);



