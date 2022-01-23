/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections=document.getElementsByTagName('section');
const mainmenu=document.querySelector('nav')
//mainmenu.attributes('visible')=true;
const menu=mainmenu.querySelector('ul');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function RemoveActiveClasse(){
    for (const section of sections){
        section.classList.remove('your-active-class');
    }
    for (const item of menu.querySelectorAll('li a')){
        
        item.classList.remove('active__menu'); }


}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
const goToSection=(event)=>{
    event.preventDefault();
 
    const section=document.getElementById(event.target.id.substr(3));
   // console.log(section.id);
    section.scrollIntoView({block: "center",
    behavior: "smooth"
    });
    }

let observer = new IntersectionObserver(
(entries, observer) => { 
entries.forEach(entry => {
    /* Placeholder replacement 
    entry.target.src = entry.target.dataset.src;
    observer.unobserve(entry.target);*/
    if(entry.intersectionRatio >=.3)
    {
        RemoveActiveClasse();
        let currentSection=entry.target;
        currentSection.classList.add("your-active-class");
        const menuItems=menu.querySelectorAll('li a');
    
        for (const item of menuItems){
            
            if(item.id==='lnk'+ currentSection.id){
                console.log('add ' + item.id);
                item.classList.add('active__menu');
        }
    }

}


    });
}, 
{threshold: ".3"});
    
// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
const fragement =document.createDocumentFragment();
for (const section of sections){
    let menuItem=document.createElement('li');

    menuItem.innerHTML=`<a id='lnk${section.id}' class='menu__link')' href='#${section.id}'>${section.getAttribute("data-nav")}</a>`;
    
    menuItem.querySelector('a').addEventListener("click",goToSection);
    fragement.appendChild(menuItem);
    observer.observe(section);
 }
 menu.appendChild(fragement);

// Scroll to section on link click

// Set sections as active









window.addEventListener('scroll',()=>{
    let currentSection='';
    for (const section of sections){
       
       /* if(pageYOffset>=section.offsetTop-3*section.clientHeight/4){
            currentSection=section;
           
          
            currentSection.classList.add("your-active-class");
         
            const menuItems=document.querySelectorAll('nav ul li a');
            for (const item of menuItems){
            item.classList.remove('active');
                
                 if(item.id==='lnk'+
                 currentSection.id){
                    item.classList.add('active');
            
                 }
             }
        }
        else
        {
            section.classList.toggle("your-active-class");
            console.log("active section " + section.id)
              console.log(section.classList);
        }*/
    }
    
});

