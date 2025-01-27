(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        // Check if screen width is larger than 992px
        if ($(window).width() >= 992) {
            if ($(this).scrollTop() > 45) {
                $('.navbar').addClass('sticky-top shadow-sm');
                $('#mainlogo').attr('src', 'img/blue belaMed logo.png'); // Green logo for scrolling
            } else {
                $('.navbar').removeClass('sticky-top shadow-sm');
                $('#mainlogo').attr('src', 'img/belaMed logo.png'); // White logo for top of the page
            }
        }
    });
    
    // Ensure the logo is always green on smaller screens
    $(window).on('resize load', function () {
        if ($(window).width() < 992) {
            $('#mainlogo').attr('src', 'img/blue belaMed logo.png'); // Green logo for smaller screens
        } else {
            $('#mainlogo').attr('src', 'img/belaMed logo.png'); // Default white logo for larger screens
        }
    });
    
    
    document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll('.nav-item.nav-link');
        const dropdownLinks = document.querySelectorAll('.dropdown-item');
        
        // Get the current page
        const currentPage = window.location.pathname.split("/").pop();
    
        // Set active class for main nav links
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active'); 
            } else {
                link.classList.remove('active'); 
            }
        });
    
        // Set active class for dropdown items and parent dropdown
        dropdownLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active'); 
                // Add active class to parent dropdown link
                const parentDropdown = link.closest('.nav-item.dropdown').querySelector('.nav-link');
                parentDropdown.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
    


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // principles carousel
    $(".principle-carousel").owlCarousel({
        autoplay: true,                // Enable auto-slide
        autoplayTimeout: 2000,         // Time between each slide (3000 ms = 3 seconds)
        smartSpeed: 500,               // Speed of the transition (500 ms = 0.5 seconds)
        margin: 25,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    
})(jQuery);

