document.addEventListener('alpine:init', () => {
    Alpine.data('accordion', () => ({
      data: [
        {
          id: '1',
          heading: 'What is Alpine.js?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui, ac feugiat metus. Vivamus id pellentesque urna, quis hendrerit tortor. Sed pharetra sapien a metus fringilla varius.',
          isOpen: false,
        },
        {
          id: '2',
          heading: 'Is Alpine.js better than jQuery?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui, ac feugiat metus. Vivamus id pellentesque urna, quis hendrerit tortor. Sed pharetra sapien a metus fringilla varius.',
          isOpen: false,
        },
        {
          id: '3',
          heading: 'Who created Alpine.js?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui, ac feugiat metus. Vivamus id pellentesque urna, quis hendrerit tortor. Sed pharetra sapien a metus fringilla varius.',
          isOpen: false,
        },
        {
          id: '4',
          heading: 'Who created Alpine.js?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui, ac feugiat metus. Vivamus id pellentesque urna, quis hendrerit tortor. Sed pharetra sapien a metus fringilla varius.',
          isOpen: false,
        },
        {
          id: '5',
          heading: 'Who created Alpine.js?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui, ac feugiat metus. Vivamus id pellentesque urna, quis hendrerit tortor. Sed pharetra sapien a metus fringilla varius.',
          isOpen: false,
        },
      ]
    }))
  });

  // Swiper JS 
  // Banner 
  var swiper = new Swiper(".bannerww", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".banner__next",
      prevEl: ".banner__prev",
    },
  });
  // Testimonial 
  var swiper = new Swiper(".testmal", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  // Investment 
  var swiper = new Swiper('.sstt', {
    loop:true,
    slidesPerView: 1,
        navigation: {
          nextEl: '.ss',
          prevEl: '.sss',
        },
        autoplay: {
          reverseDirection: true,
          delay: 5000,
          pauseOnMouseEnter: true,
        },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: '.ss',
          prevEl: '.sss',
        },
        autoplay: {
          reverseDirection: true,
          delay: 5000,
          pauseOnMouseEnter: true,
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: '.ss',
          prevEl: '.sss',
        },
        autoplay: {
          reverseDirection: true,
          delay: 5000,
          pauseOnMouseEnter: true,
        },
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.ss',
          prevEl: '.sss',
        },
        autoplay: {
          reverseDirection: true,
          delay: 5000,
          pauseOnMouseEnter: true,
        },
      },
    // slidesPerView: 4,
    
    // direction: getDirection(),
    // on: {
    //   resize: function () {
    //     swiper.changeDirection(getDirection());
    //   },
    // },
    }
  });
  // function getDirection() {
  //   var windowWidth = window.innerWidth;
  //   var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
  //   return direction;
  // }
 
