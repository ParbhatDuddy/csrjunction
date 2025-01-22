// Importing Header
// Function to fetch and inject HTML content
fetch('includes/header.html')
.then(response => response.text())
.then(data => document.getElementById('header').innerHTML = data);

fetch('includes/footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data);


// Importing Header


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




// 
function openCalendar() {
    flatpickr("#date", {
      dateFormat: "d-m-Y", // Desired format (dd-mm-yyyy)
      allowInput: true, // Optional: allows typing in the input
    }).open(); // Opens the calendar when the input or icon is clicked
  }


