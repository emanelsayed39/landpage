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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

const sections=document.getElementsByTagName('section');
const mainmenu=document.querySelector('nav')
//mainmenu.attributes('visible')=true;
const menu=mainmenu.querySelector('ul');
console.log(menu.id);


for (const section of sections){
    console.log(sections.item(0).id);
    console.log(section.id);
   if (sections.item(0)===section.id)
   {
       section.classList.add('active');
       console.log('first');
   }
   
    let menuItem=document.createElement('li');

    menuItem.innerHTML=`<a id='lnk${section.id}' class='menu__link' onClick='goToSection("#${section.id}")'>${section.id}</a>`;
   menu.appendChild(menuItem);
   console.log(menuItem)
}


const goToSection=(sec)=>{

    const section=document.querySelector(sec);
    console.log(section.id);
    section.scrollIntoView({block: 'end',
    behavior: 'smooth',
    inline: 'center'});
    }


document.addEventListener('scroll',()=>{
    let currentSecion='';
    const sections=document.getElementsByTagName('section');
    for (const section of sections){
        const height=section.clientHeight;
        if(pageYOffset>=section.offsetTop-3*section.clientHeight/4){
             currentSecion=section;
             console.log(currentSecion.id);
             const menuItems=document.querySelectorAll('nav ul li a');
             console.log(menuItems.length)
       for (const item of menuItems){
         item.classList.remove('active');
                
                 if(item.id==='lnk'+
                 currentSecion.id){
                    item.classList.add('active');
                  console.log(item.id)
                 }
             }
        }
    }
    
});

