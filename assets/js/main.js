/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
}else {

  menuBtn.className = "nav-menu";
}



}

const navToggle = document.getElementsByClassName('ri-menu-fill')[0],
      navClose = document.getElementsByClassName('ri-close-large-line')[0];
console.log(navToggle)
/* Menu show */
if(navToggle){

    navToggle.addEventListener('click', () => {
        navClose.classList.remove('close-icon-hidden');
        navToggle.style.display = "none";
        myMenuFunction();
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
    navClose.classList.add('close-icon-hidden');
    navToggle.style.display = "block";
    myMenuFunction();
    })
}




const changeDark = document.getElementsByClassName('ri-moon-line')[0],
      changeLight = document.getElementsByClassName('ri-sun-line')[0];

if(changeLight){

    changeLight.addEventListener('click', () => {
    changeDark.classList.remove('dark-icon-hidden');
    changeLight.style.display = "none";
    document.body.classList.toggle('dark-theme');
    })
}

if(changeDark){
  
    changeDark.addEventListener('click', () =>{
    changeDark.classList.add('dark-icon-hidden');
    document.body.classList.toggle('dark-theme');
    changeDark.classList.add('dark-theme');
    changeLight.style.display = "block";
    })
}






// function nightMod(){

//   var body = document.getElementById("body");
//   var mod = document.getElementById("nav-mod");

//   if(mod.getAttribute('class') === 'ri-moon-line'){
//     mod.setAttribute('class', 'ri-moon-line');
//     alert("caca")
//   }
  
// }



/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    
window.onscroll = function() {headerShadow()};

function headerShadow(){
  const navHeader = document.getElementById("header");

  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)"
    navHeader.style.height = "70px"
    navHeader.style.lineHeight = "70px"
  } else {
    navHeader.style.boxShadow = "none"
    navHeader.style.height = "90px"
    navHeader.style.lineHeight = "90px"
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Web developer", "Web Lover", "Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
})

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
     origin: 'top',
     distance: '60px',
     duration: 2500,
     reset: true
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)



// const swiper = new Swiper('.slider-wrapper', {

//   loop: true,
//   grabCursor: true,
//   spaceBetween: 30,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     dynamicBullets: true
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     1400: {
//       slidesPerView: 2,
//     },
//     2000: {
//       slidesPerView: 3,
//     },
//   }
// });