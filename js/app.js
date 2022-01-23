



/**
 * Define Global Variables
 * 
*/
const sections=document.getElementsByTagName('section');
const mainmenu=document.querySelector('nav');
const menu=mainmenu.querySelector('ul');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//activate the responsive menu when screen is minmized
function ShowResponsiveMenue() {
    var x = document.querySelector(".navbar__menu");
    
    if (x.className === "navbar__menu") {
      x.className += " responsive";
    
    } else {
      x.className = "navbar__menu";
    }
}
//deactivate active section and menu items
function RemoveActiveClasse(){
    for (const section of sections){
        section.classList.remove('your-active-class');
    }
    for (const item of menu.querySelectorAll('li a')){
        
        item.classList.remove('active__menu'); 
    }


}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//scroll to section when its menu item is clicked 
const goToSection=(event)=>{
    event.preventDefault();
 
    const section=document.getElementById(event.target.id.substr(3));
    section.scrollIntoView({block: "center",
    behavior: "smooth"
    });
}
//intersection Observer function ,work when new element get into the view point
let observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
           if(entry.intersectionRatio >=.3){
            RemoveActiveClasse();
            let currentSection=entry.target;
            currentSection.classList.add("your-active-class");
            const menuItems=menu.querySelectorAll('li a');
    
            for (const item of menuItems){
            
                if(item.id==='lnk'+ currentSection.id){
                    item.classList.add('active__menu');
                }
            }
        }
    });
}, {threshold: ".3"});
    
// build the nav
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



/**
 * End Main Functions
 * Begin Events
 * 
*/









