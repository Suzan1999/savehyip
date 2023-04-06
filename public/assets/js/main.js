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
    navigation: {
      nextEl: ".banner__next",
      prevEl: ".banner__prev",
    },
    autoplay: {
      delay: 5000,
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


  // ===== Scroll to Top ==== // 
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').on('click', function() {
    $('body,html').animate({
        scrollTop: 0
    }, 5000);
});

// Number Scrolling Off 
document.addEventListener("wheel", function(event){
  if(document.activeElement.type === "number"){
      document.activeElement.blur();
  }
});

// Only Number Type
function inpNum(e) {
  e = e || window.event;
  var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
  var charStr = String.fromCharCode(charCode);
  if (!charStr.match(/^[0-9]+$/))
    e.preventDefault();
}

		
 
