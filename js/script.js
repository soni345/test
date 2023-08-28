
        const showBtn = document.getElementById('show');
        const hideBtn = document.getElementById('hide');
        const contentDiv = document.getElementById('nav-mobile-menu');

        showBtn.addEventListener('click', () => {
            contentDiv.style.display = 'flex';
            showBtn.style.display = 'none';
            hideBtn.style.display = 'block';
        });

        hideBtn.addEventListener('click', () => {
            contentDiv.style.display = 'none';
            showBtn.style.display = 'block';
            hideBtn.style.display = 'none';
        });
        $('.submenu').on('click', function() {
            $(this).siblings('fa-chevron-down').toggle('rotate');
            $(this).children('.submenu-list').toggle();
           
        });
      
        $('.accordion-button').click(function(){
            // getComputedStyle(this,':after').css('transform', 'rotate(180deg)');
            $('.accordion-body').not(this).slideUp();
            $(this).siblings('.accordion-body').slideDown();
        });

// faq
$('.faq-box').click(function(){
    if($(this).hasClass('opened')){
        $(this).removeClass('opened');
    }
    else{
        $('.faq-box').removeClass('opened');
        $(this).addClass('opened');

    }
});
$('.fa-minus').click(function(){
    $(this).parents('.faq-box').removeClass('opened');
});


$(document).ready(function(){
        $('.judg-owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay: true, // Auto-play the carousel
            autoplayTimeout: 3000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
            })
 
    $('.carousel-slider').owlCarousel({
        items: 3, // Number of items to display
        loop: true, // Infinite loop
        margin: 10, // Space between items
        autoplay: true, // Auto-play the carousel
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
        })
        $('.brands-container').owlCarousel({
            items: 3, // Number of items to display
            loop: true,
            nav:true, // Infinite loop
            margin: 10, // Space between items
            autoplay: true, // Auto-play the carousel
            autoplayTimeout: 3000,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4,
                    nav:true,
                }
            }
            })

          
  });