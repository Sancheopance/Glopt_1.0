$(document).ready(function(){

    function toggleSlide(item) { 
        $(item).each(function(i) {  
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.delivery-card__content').eq(i).toggleClass('delivery-card__content_active');
            $('.delivery-card__list').eq(i).toggleClass('delivery-card__list_active')
            })
        });
    };
    toggleSlide('.delivery-card__link');
    toggleSlide('.delivery-card__back');

    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png" ></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png" ></button>',
    });

    window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__links'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu__links_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu__links_active');
        });
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up],a[href=#advantages],a[href=#contacts],[href=#job],[href=#delivery],[href=#patern],[href=#review]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


});











});