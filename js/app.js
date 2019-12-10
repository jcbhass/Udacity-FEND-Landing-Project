const navUl  = document.getElementById('navbar__list'); //style class id
const navSections = document.getElementsByTagName('section');//get section
const navMenu = document.getElementsByTagName('nav'); //get navbar

//create navbar with styling elements and link
function navMenuBar(section) {
    for(i = 0; i < navSections.length; i++) {
        var eachSection = navSections[i]; 
        
        if (eachSection.hasAttribute('data-nav')) {
            var line = document.createElement('li'); 
            line.classList.add('navbar__menu'); 
            line.classList.add('menu__link'); 
            var sectionInfo = eachSection.getAttribute('data-nav'); 
            var sectionName = document.createTextNode(sectionInfo); 
            
            var anchor = document.createElement('a'); 
            var sectionId = eachSection.getAttribute('id'); 
            line.appendChild(anchor); 
            line.appendChild(sectionName); 

            //go to section when navbar is clicked. Also activate the section styles when viewing.
            let eachLink = document.getElementById(sectionId);
            line.addEventListener('click', function() {
                eachLink.scrollIntoView({
                    behavior: 'smooth'
                })
                //eachLink.classList.add('activated');
            })
        
        };
        navUl.appendChild(line); //adds the list to the unordered list element


    };    

};



navMenuBar();

//Activate each section as they are scrolled into view 

window.addEventListener('scroll', inView);

function inView() {
    for (var i = 0; i < navSections.length; i++) {
    var viewed = navSections[i]; 
    var heading = viewed.querySelector('h2');
    var position = viewed.getBoundingClientRect().top;

        if (position <= 400) {
            viewed.classList.add('your-active-class');
            heading.style.color = '#0f0';
        } else {
            viewed.classList.remove('your-active-class');
            heading.style.color = '#fff';
        }
    }
}


inView();
