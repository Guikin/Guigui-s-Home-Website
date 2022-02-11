// Hamburger Menu 

const navButton = document.querySelector(".mobile-nav")

const navLinks = document.querySelector(".nav-links-mobile");

 function openMenu(){
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
    rootMargin : "-200px 0px 0px 0px"
};


// Nav Bar Animation

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


// For Fading in effect 

const faders = document.querySelectorAll(".faders")

const Options= {
    threshold:.6,
}

const sectionTwoObserver = new IntersectionObserver(function(entries,sectionTwoObserver){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add("appear")
            sectionTwoObserver.unobserve(entry.target);
        }
    })
},Options);

faders.forEach(fader=>{
    sectionTwoObserver.observe(fader);
});


const homeButton = document.querySelector(".home-btn")
const aboutButton = document.querySelector(".about-btn")
const featuresButton = document.querySelector(".features-btn")
const discordButton = document.querySelector(".discord-btn")

const featuresView = document.querySelector("#features")


const navbtn= document.querySelectorAll(".nav-links a")

function smoothScroll(){
    featuresView.scrollIntoView({
        behavior:"smooth",
        block:"start"
    })
}
console.log(featuresButton,featuresView)
featuresButton.addEventListener("click",smoothScroll);