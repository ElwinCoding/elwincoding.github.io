document.addEventListener("DOMContentLoaded", pageSetup)

function pageSetup() {
  crossFade();
  scrollSpy();
}

function crossFade() {
  let slideshow = document.querySelectorAll(".slideshow-image");
  let image = slideshow[0];

  // use interval timer to change photos
  setInterval(() => {
    image.classList.remove("active");
    if(image.nextElementSibling == null){
      image = slideshow[0];
    }
    else{
      image = image.nextElementSibling;
    }
      image.classList.add("active");
  }, 5000);
}

function scrollSpy(){
  const navSections = document.querySelectorAll("nav .section");
  let activeSection = document.querySelector("nav .active");
  let disableScroll = false;

  // clicking the navbar
  navSections.forEach(section => {
    section.onclick = () => {
      disableScroll = true;
      navSections.forEach(prev => prev.classList.remove("active"));
      section.classList.add("active");
      activeSection = section;
      setTimeout(() => {
        disableScroll = false;
      }, 500);
    }
  });

  // scrolling the window
  let anchors = document.querySelectorAll(".anchor");
  let sections = {};
  anchors.forEach(anchor => {
    sections[anchor.id] = anchor.offsetTop;
  })

  window.onscroll = (throttle(() => {
    // check if navigation triggered scroll
    if(disableScroll) {
      return;
    }

    // find section user is in
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let currentSection = null;
    for(i in sections) {
      if(sections[i] <= scrollPosition) {
        currentSection = document.querySelector('a[href*=' + i + ']');
      }
    }
    
    // change section
    if(activeSection != currentSection && currentSection != null){
      activeSection.classList.remove("active");
      currentSection.classList.add("active");
      activeSection = currentSection;
    }
  },500))
}

function throttle(func, delay) {
  let timer = null;
  return () => {
    if(!timer) {
      func();
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}