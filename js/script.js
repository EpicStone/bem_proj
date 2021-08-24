$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right.png"></button>',
        responsive: [{
            
            breakpoint: 991,
            settings: {
                dots: true,
                arrows: false
            }         
        }]
    });
});