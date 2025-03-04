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
    
    // Dynamic Quote
    const quotes = [
        "Work for something because it is good, not just because it stands a chance to succeed. - Vaclav Havel",
        "Quality is not an act, it's a habit. - Aristotle",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
        "The future depends on what you do today. - Mahatma Gandhi"
    ];
    
    function updateQuote() {
        const quoteElement = document.getElementById('dynamic-quote');
        if (quoteElement) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            quoteElement.textContent = quotes[randomIndex];
        }
    }
    
    // Update quote when page loads and when page is refreshed
    window.addEventListener('load', updateQuote);
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
        updateQuote();
    }

    // Email copy functionality
    window.copyEmail = function() {
        const email = 'vaidya.mansi95@gmail.com';
        navigator.clipboard.writeText(email).then(function() {
            const copyButton = document.querySelector('[data-tooltip="Copy email"]');
            copyButton.classList.add('tooltip-visible');
            setTimeout(() => {
                copyButton.classList.remove('tooltip-visible');
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy email:', err);
        });
    };
    
    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
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
    
    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
    portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });
    
    })(jQuery);

function copyEmail() {
    const email = 'vaidya.mansi95@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const button = document.querySelector('.btn-icon[data-tooltip="Copy email"]');
        const originalIcon = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.setAttribute('data-tooltip', 'Copied!');
        button.classList.add('tooltip-visible');
        
        setTimeout(() => {
            button.innerHTML = originalIcon;
            button.setAttribute('data-tooltip', 'Copy email');
            button.classList.remove('tooltip-visible');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email:', err);
        alert('Failed to copy email. Please try again.');
    });
}

