document.addEventListener('DOMContentLoaded', function() {



//! swiper-first-screen
  const swiper = new Swiper('.first-screen__swiper', {
    // Optional parameters
    direction: 'horizontal',
  
    // If we need pagination
    pagination: {
      el: '.first-screen__swiper-pagination',
  
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.first-screen__swiper-button-next ', 
      prevEl: '.first-screen__swiper-button-prev',
    },
  });

  //! svg-animation-surf
  let surfMap = document.querySelector('.surf__map');
  let surfSvgPoint = document.querySelectorAll('.surf__map-svg-point');
  let coords = document.querySelector('.surf__coords');
  let country = document.querySelector('.surf__country');


  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    // map
    const surfMapHeight = surfMap.offsetHeight;
    const surfMapOffset = surfMap.getBoundingClientRect().top;
    const animStart = 2;

    let animItemPoint = window.innerHeight - surfMapHeight / animStart;

    // Если анимированный объект выше окна браузера

    if (surfMapHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    for (let i = 0; i < surfSvgPoint.length; i++) {
      if ((window.pageYOffset > surfMapOffset - animItemPoint)) {
        surfSvgPoint[i].classList.add('active');
      } else {
        surfSvgPoint[i].classList.remove('active');
      }
    }
    // map

  }

  animOnScroll();

  //! svg-points-click

  surfSvgPoint.forEach(point => {
    point.addEventListener('click', function(e) {
        point.classList.toggle('clicked');
        coords.classList.add('active');
        coords.textContent = `${point.dataset.coords}`;
        country.textContent = `${point.dataset.location}`;
    });
  });
  
  //! surf-swiper

  const surfSwiper = new Swiper('.surf-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    centeredSlides: true,
    speed: 600,

    breakpoints: {

      1399: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.surf-swiper-button-next ', 
      prevEl: '.surf-swiper-button-prev',
    },
  });

  //! travel-swiper

  const travelSwiper = new Swiper('.travel__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerGroup: 1,
    speed: 600,
  
    // Navigation arrows
    navigation: {
      nextEl: '.travel__swiper-button-next ', 
      prevEl: '.travel__swiper-button-prev',
    },
  });

  //! sleep-swiper

  const sleepSwiper = new Swiper('.sleep__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerGroup: 1,
    speed: 600,
  
    // Navigation arrows
    navigation: {
      nextEl: '.sleep__swiper-button-next ', 
      prevEl: '.sleep__swiper-button-prev',
    },
  });

  //! sleep-counter

  let counterBtn = document.querySelectorAll('.counter-btn-nights');
  let counterGuestsBtn = document.querySelectorAll('.counter-btn-guests');
  let nights = document.querySelector('.swiper-slide-sleep__item-numberOfNights');
  let guests = document.querySelector('.swiper-slide-sleep__item-numberOfGuests');
  let price = document.querySelector('.swiper-slide-sleep__item-numberOfPrice');

  counterBtn.forEach(btn => {
    btn.addEventListener('click', function() {
      let direction = this.dataset.direction;
      let currentValue = +nights.value;
      let newValue;
      let currentPrice = +price.value;
      let newPrice;

      if (direction === 'plus') {
        newValue = currentValue + 1;
        newPrice = currentPrice + 349;
      } else {
        if (currentValue > 0) {
          newValue = currentValue - 1;
          newPrice = currentPrice - 349;
        } else {
          return 0;
        }
      }

      nights.value = newValue;
      price.value = newPrice;
    });
  });
  counterGuestsBtn.forEach(btn => {
    btn.addEventListener('click', function() {
      let direction = this.dataset.direction;
      let currentValue = +guests.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        if (currentValue > 0) {
          newValue = currentValue - 1;
        } else {
          return 0;
        }
      }

      guests.value = newValue;
    });
  });

  //! shop-clickers

  let shopClicker = document.querySelectorAll('.shop-swiper-slide__surfboard-dot-clicker');
  let shopLine = document.querySelectorAll('.shop-swiper-slide__surfboard-dot-line');
  let shopText = document.querySelectorAll('.shop-swiper-slide__surfboard-dot-text');

  for (let i = 0; i < shopClicker.length; i++) {
    shopClicker[i].addEventListener('click', function() {
      shopLine[i].classList.toggle('active');
      shopText[i].classList.toggle('active');
    });
  }

  //! shop-swiper

    const shopSwiper = new Swiper('.shop__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerGroup: 1,
    speed: 600,
  
    // Navigation arrows
    navigation: {
      nextEl: '.shop__swiper-button-next ', 
      prevEl: '.shop__swiper-button-prev',
    },
  });

  //! burger-menu

  let burger = document.querySelector('.first-screen__burger');
  let burgerMenu = document.querySelector('.first-screen__list');
  let body = document.querySelector('body');

  burger.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('locked');
  });

  //! shop-clickers-media-screen < 968
  let shopPopup = document.querySelector('.shop-popup');
  let shopPopupInner = document.querySelector('.shop-popup__inner');
  let shopPopupClose = document.querySelector('.shop-popup__close');
  let shopPopupLink = document.querySelectorAll('.link-to-shop-popup');
  let shopPopupClicker = document.querySelectorAll('.shop-popup__surfboard-dot-clicker');
  let shopPopupText = document.querySelectorAll('.shop-popup__surfboard-dot-text');

  for (let i = 0; i < shopPopupClicker.length; i++) {
    shopPopupClicker[i].addEventListener('click', function() {
      shopPopupText[i].classList.toggle('active');
    });
  }

  for (let i = 0; i < shopPopupLink.length; i++) {
    shopPopupLink[i].addEventListener('click', function() {
      shopPopup.classList.add('open');
      body.classList.add('locked');
    });
  }

  shopPopupClose.addEventListener('click', function() {
    shopPopup.classList.remove('open');
    body.classList.remove('locked');
  });

  shopPopup.addEventListener('click', function(e) {
    if (e.target != shopPopupInner && e.target.contains(shopPopupInner)) {
      shopPopup.classList.remove('open');
      body.classList.remove('locked');
    }
  });


  //! animation while scroll



 });