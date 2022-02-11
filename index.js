const navButton = document.querySelector(".mobile-nav")

const navLinks = document.querySelector(".nav-links-mobile");

 openMenu=()=>{
     function fadeOut(){
        navLinks.style.opacity="0";
        navLinks.style.display="none";
     }
     if(navLinks.style.opacity==="0"){
         navLinks.style.opacity="1";
         navLinks.style.display="block";
         navLinks.classList.add("fade-in");
         navLinks.classList.remove("fade-out");
     }else{
         setTimeout(fadeOut,500);
        navLinks.classList.add("fade-out");
        navLinks.classList.remove("fade-in");
     }
};

navButton.onclick=openMenu;


const navBar=document.querySelector("nav");

const title=document.querySelector(".title")


const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};


const sectionOneObserver = new IntersectionObserver (function(entries,sectionOneObserver){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            navBar.classList.add("scrolled")
            navBar.style.animation="fade-in 250ms ease-in";
        }else {
            navBar.classList.remove("scrolled")
            navBar.style.animation="fade-out 250ms ease-in";
        }
    });
},sectionOneOptions);

sectionOneObserver.observe(title);