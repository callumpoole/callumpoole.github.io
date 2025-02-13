const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    slidesPerView: 'auto',
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //breakpoints: {
    //    0: {
    //        slidesPerView: 1.2
    //    },
    //    620: {
    //        slidesPerView: 2.2
    //    },
    //    990: {
    //        slidesPerView: 3.2
    //    },
    //    2048: {
    //        slidesPerView: 4.2
    //    },
    //},
  });

  swiper.slidesSizesGrid = [20, 40, 60, 80, 100, 120, 140];