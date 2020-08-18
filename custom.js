$(document).ready(function(){
    $('#home_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<span class="nav-arrow-prev fa fa-chevron-left " aria-hidden="true"></span>',
        nextArrow: '<span class="nav-arrow-next fa fa-chevron-right" aria-hidden="true"></span>',
    });

    $('.slick.marquee').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
    });

    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 150) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 

    $('.search_link').click(function(){
       $('#header .search_box').slideToggle();
    }); 
});