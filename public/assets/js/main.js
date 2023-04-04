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

  // Testimonial 
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Investment 
  var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper2.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
 
