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
  let scrolling = true;

  // clicking the navbar
  navSections.forEach(section => {
    section.onclick = () => {
      scrolling = false;
      navSections.forEach(prev => prev.classList.remove("active"));
      section.classList.add("active");
      scrolling = true;
    }
  });

  // scrolling the window
  let anchors = document.querySelectorAll(".anchor");
  sections = {};
  anchors.forEach(anchor => {
    sections[anchor.id] = anchor.offsetTop;
  })

  window.onscroll = (throttle(() => {
    if(!scrolling) {
      return
    }
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollPosition);

  },400))
 
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


function setupNav() {
    const navSection = document.querySelectorAll("nav .section");

    /*
    const sections = document.querySelectorAll(".anchor");
    const menu_links = document.querySelectorAll("nav .section");

    const makeActive = (link) => menu_links[link].classList.add("active");
    const removeActive = (link) => menu_links[link].classList.remove("active");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

    const sectionMargin = 200;
    let currentActive = 0;

    window.addEventListener("scroll", () => {
        const current = sections.length - [...sections].findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1
      
        if (current !== currentActive) {
          removeAllActive();
          currentActive = current;
          makeActive(current);
        }
      });
      */
    
    (function() {
        'use strict';
      
        var section = document.querySelectorAll(".anchor");
        var sections = {};
        var i = 0;
      
        Array.prototype.forEach.call(section, function(e) {
          sections[e.id] = e.offsetTop;
        });
      
        window.onscroll = function() {
            var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      
            for (i in sections) {
                if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            }
          }
        };
      })();
      

    // scroll event

    /*
    window.onscroll = (() => {
        let bodySection = document.querySelectorAll("body .anchor");

        bodySection.forEach((v, i) => {
            let rect = v.getBoundingClientRect().y;
            console.log(rect);
            console.log("window"+ window.innerHeight);
            if (rect < window.innerHeight - 500) {
                navSection.forEach(v => v.classList.remove("active"));
                navSection[(3-i)].classList.add("active");
            }
        })
    })
    */
}

/*
            console.log("rect:"+ rect);
            console.log("window:" + window.innerHeight);
*/