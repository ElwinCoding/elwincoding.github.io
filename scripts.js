document.addEventListener("DOMContentLoaded", setupNav)

let slideIndex = 0;
//showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow-image");
  console.log(slides)
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function setupNav() {
    const navSection = document.querySelectorAll("nav .section");

    // click event
    navSection.forEach(v => {
        v.onclick = (() => {
                setTimeout(() => {
                    navSection.forEach(j => j.classList.remove("active"));
                    v.classList.add("active");
            }, 300);
        });
    });

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
    /*
    (function() {
        'use strict';
      
        var section = document.querySelectorAll(".anchor");
        var sections = {};
        var i = 0;
      
        Array.prototype.forEach.call(section, function(e) {
          sections[e.id] = e.offsetTop;
        });
      
        window.onscroll = function() {
            console.log("fuck me")
            var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      
            for (i in sections) {
                if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            }
          }
        };
      })();
      */

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