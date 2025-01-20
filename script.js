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



// Validate Input
function applyFilter() {
    var cat1 = document.getElementById("category1").value;
    var cat2 = document.getElementById("category2").value;
    var cat3 = document.getElementById("category3").value;
    var cat4 = document.getElementById("category4").value;

    var products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        var match = true;

        if (cat1 && product.getAttribute("data-cat1") !== cat1) {
            match = false;
        }
        if (cat2 && product.getAttribute("data-cat2") !== cat2) {
            match = false;
        }
        if (cat3 && product.getAttribute("data-cat3") !== cat3) {
            match = false;
        }
        if (cat4 && product.getAttribute("data-cat4") !== cat4) {
            match = false;
        }

        if (match) {
            product.style.display = "inline-block";
        } else {
            product.style.display = "none";
        }
    });
}


// 
function openCalendar() {
    flatpickr("#date", {
      dateFormat: "d-m-Y", // Desired format (dd-mm-yyyy)
      allowInput: true, // Optional: allows typing in the input
    }).open(); // Opens the calendar when the input or icon is clicked
  }


