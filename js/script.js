// // ================toggle icon navbar ============//
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// // ================scroll sections active links ============//

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

//             });
//         };
//     });

//     // ================sticky navbar ============//

//     let header = document.querySelector('header')

//     header.classList.toggle('sticky', window.scrollY > 100);

//     // ================ remove toggle icon navbar ============//

//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };


// // ================ scroll reveal ============//

// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

// // ================ Typed js ============//
// const typed = new Typed('.multiple-text', {
//     strings: ['Frontend developer', 'Wordpress Developer', 'Shopify Developer','Graphic Designer'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });


// // ----send email for contact form----//

// function sendMail() {
//     var promps = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value
//     };

//     const serviceID = "service_nxwz9wc";
//     const templateID = "template_9m3yiuf";

//     emailjs
//     .send(serviceID,templateID,promps)
//     .then((res) => {
//         document.getElementById("name").value ="";
//         document.getElementById("email").value ="";
//         document.getElementById("message").value ="";
//         console.log(res);
//         alert("your message send successfully");
//     })
//     .catch((err) => console.log(err));
// }




// Toogle icon navbar 
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick =()=> {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

// smooth scrool js code 
window.addEventListener('scroll', function() {
  menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

document.querySelectorAll('header a').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    var target = document.querySelector(anchor.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
  
}); 

   
   
   window.addEventListener('scroll', fadeInServices);

function fadeInServices() {
  var services = document.querySelectorAll('.service');

  for (var i = 0; i < services.length; i++) {
    var service = services[i];
    var servicePosition = service.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (servicePosition < windowHeight - 100) {
      service.classList.add('fade-in');
    }
  }
}

// js typed animation ect 
const type=new Typed('.multiple-text',{

    strings:['Web Developer','WordPress developer','Shopify developer','Graphic Designer','Web Designer', ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});


// scrool reveal  aniamtion
ScrollReveal ({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay:200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });


// scroll active links 

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var sections = document.querySelectorAll('section');
  var currentSection = '';

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - header.offsetHeight && pageYOffset < sectionTop + sectionHeight - header.offsetHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  var activeLinks = document.querySelectorAll('nav a');
  activeLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});


