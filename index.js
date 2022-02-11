// Hamburger Menu 

const navButton = document.querySelector(".mobile-nav")

const navLinks = document.querySelector(".nav-links-mobile");

 
function fadeOut(){
        navLinks.style.opacity="0";
        navLinks.style.display="none";
     }

function openMenu(){
     
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

function closeMenu(){
    setTimeout(fadeOut,500);
        navLinks.classList.add("fade-out");
        navLinks.classList.remove("fade-in");
}

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

const homeMobile =document.querySelector(".home-mobile")
const aboutMobile =document.querySelector(".about-mobile")
const featuresMobile =document.querySelector(".features-mobile")
const discordMobile =document.querySelector(".discord-mobile")

const homeView = document.querySelector("#home")
const featuresView = document.querySelector("#features")
const aboutView = document.querySelector("#about")
const discordView = document.querySelector("#discord")


function homeScroll(){
    homeButton.removeAttribute("href")
    homeMobile.removeAttribute("href")
    homeView.scrollIntoView({
        behavior:"smooth",
        block:"start"
    })
    closeMenu()
}

function featuresScroll(){
    featuresButton.removeAttribute("href")
    featuresMobile.removeAttribute("href")
    featuresView.scrollIntoView({
        behavior:"smooth",
        block:"start"
    })
    closeMenu()

}

function aboutScroll(){
    aboutButton.removeAttribute("href")
    aboutMobile.removeAttribute("href")
    aboutView.scrollIntoView({
        behavior:"smooth",
        block:"start"
    })
    closeMenu()
}
function discordScroll(){
    discordButton.removeAttribute("href")
    discordMobile.removeAttribute("href")
    discordView.scrollIntoView({
        behavior:"smooth",
        block:"start"
    })
    closeMenu()
}

homeButton.onclick=homeScroll;
aboutButton.onclick=aboutScroll;
featuresButton.addEventListener("click",featuresScroll);
discordButton.addEventListener("click",discordScroll);

homeMobile.onclick= homeScroll;
aboutMobile.onclick= aboutScroll;
featuresMobile.onclick= featuresScroll;
discordMobile.onclick= discordScroll;



