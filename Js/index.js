// List of translations for "Get electricians in minutes"
const texts = [
  "Nweta ndị na-arụ ọrụ ọkụ n'ime nkeji", // Igbo
  "Samu 'yan wuta cikin mintuna", // Hausa
  "Gba awọn onimọ ina ni awọn iṣẹju", // Yoruba
  "Get electricians in minutes",
];

// Get the h1 element
const h1Element = document.getElementById('changing-text');

let index = 0;

// Function to change the text
function changeText() {
  h1Element.style.opacity = 0; // Fade out
  setTimeout(() => {
      h1Element.textContent = texts[index];
      h1Element.style.opacity = 1; // Fade in
      index = (index + 1) % texts.length; // Loop back to the first text after the last one
  }, 1000); // Change text after 1 second when the opacity is 0
}

// Change text every 5 seconds (5000 milliseconds)
setInterval(changeText, 8000);





// ads display
function swiperOne(){


const swiper = new Swiper(".swiper-container", {
    loop: true, // Add this option to enable continuous sliding
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
    },
  });

}

swiperOne()


  // services section

  function swiperTwo() {
    
 

  let swiperServices = new Swiper(".services_section", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    autoplay: {
      delay: 4000,
    },
    // effect: "slide",


   pagination: {
     el: ".swiper-pagination",
     clickable: true, 
     type:"fraction",
     dynamicBullets: true,
   }, 
   breakpoints: {
       568: {
           slidesPerview: 2,
       }
   }
 });

}


swiperTwo();

// expert section

function swiperThree() {
    
 

  let swiperServices = new Swiper(".expert_section", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    autoplay: {
      delay: 5000,
    },
    // effect: "slide",


   pagination: {
     el: ".swiper-pagination",
     clickable: true, 
     type:"fraction",
     dynamicBullets: true,
   }, 
   breakpoints: {
       568: {
           slidesPerview: 2,
       }
   }
 });

}


swiperThree();


// trending services

function swiperFour() {
    
 

  let swiperServices = new Swiper(".trending_services", {
    slidesPerView: 1,
    // loop: true,
    
    // spaceBetween: 10,
    autoplay: {
      delay: 4000,
    },
    // autoHeight: true,
    
      // when window width is >= 640px
      
     


  //  pagination: {
  //    el: ".swiper-pagination",
  //    clickable: true, 
  //    dynamicBullets: true,
  //  },
   },
 
 );

}


swiperFour();


let swiperTestimonial = new Swiper(".testimonial_container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  autoplay: {
    delay: 5000,
  },

//  pagination: {
//    el: ".swiper-pagination",
//    clickable: true, 
//    dynamicBullets: true,
//  }, 
 breakpoints: {
     568: {
         slidesPerview: 2,
     }
 }
});
