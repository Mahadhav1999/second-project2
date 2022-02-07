
 // Scrollbar navbar 
 let nav = document.querySelector(".navigation-wrap");
 window.onscroll = function (){
     if(document.documentElement.scrollTop > 50){
         nav.classList.add("scroll-on");
     }else{
         nav.classList.remove("scroll-on");
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
//owlCarousel
$('#our-experts').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    responsiveClass:true,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3

        },
        1000:{
            items:3
        }
    }
})


// Owl Carousel
    $(".brand-partners-section").owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900:{
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
