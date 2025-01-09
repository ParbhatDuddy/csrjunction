var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        500:{
            slidesPerView: 1.3,
    spaceBetween: 30,
        },
        768:{
            slidesPerView: 2.3,
    spaceBetween: 30,
        },
        1024:{
            slidesPerView: 3,
    spaceBetween: 30,
        }
    }
});



// Animation Onload

// Animation Onload