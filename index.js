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