




 /**  Define Global Variables*/
const sections=document.getElementsByTagName('section');
const mainMenu=document.querySelector('nav');
const menu=mainMenu.querySelector('ul');

/**activate the responsive menu when screen is minmized*/
function showResponsiveMenue() {
    const nav = document.querySelector('.navbar__menu');
    if (nav.className === 'navbar__menu'){
        nav.className += ' responsive';
    } else {
        nav.className = 'navbar__menu';
    }
}
/**deactivate active section and menu items*/
function removeActiveClass(){
    for (const section of sections){
        section.classList.remove('your-active-class');
    }
    for (const item of menu.querySelectorAll('li a')){
       item.classList.remove('active__menu'); 
    }
}
/**set Active class for section and menues */
function setActiveClass(currentSection){
    currentSection.classList.add('your-active-class');
    const menuItems=menu.querySelectorAll('li a');
    for (const item of menuItems){
        if(item.id==='lnk'+ currentSection.id){
            item.classList.add('active__menu');
        }
    }
}
/**scroll to section when its menu item is clicked */
const goToSection=(event)=>{
    event.preventDefault();
    let sectionId=event.target.id.substr(3);
    const section=document.getElementById(sectionId);
    section.scrollIntoView({block: "center",behavior: "smooth"});
}

/**intersection Observer function ,work when new element get into the view point*/
let observer = new IntersectionObserver((entries,observer) => { 
    entries.forEach(entry => {
        if(entry.intersectionRatio >=.3){
            removeActiveClass();
            let currentSection=entry.target;
            setActiveClass(currentSection);
        }
    });
}, {threshold: '.3'});

/** Build menu*/
const fragement =document.createDocumentFragment();
for (const section of sections){
    let menuItem=document.createElement('li');
    let id=section.id;
    let name=section.getAttribute("data-nav");
    menuItem.innerHTML=`<a id='lnk${id}' class='menu__link')' >${name}</a>`;
    menuItem.querySelector('a').addEventListener('click',goToSection);
    fragement.appendChild(menuItem);
    observer.observe(section);
 }
 menu.appendChild(fragement);












