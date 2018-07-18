/**
 * Created by elina on 7/17/2018.
 */
function slickSliderController(sliderClass, prevClass, nextClass) {
    this.prevClass = prevClass;
    this.nextClass = nextClass;
    this.slickSlider = function() {
        $(sliderClass).slick({
            arrows: true,
            speed: 500,
            mobileFirst: true,
            prevArrow: $(this.prevClass),
            nextArrow: $(this.nextClass),
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: true,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 180,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
}
var sliderHit = new slickSliderController('.hit-slider', '.hit-slider__prev',  '.hit-slider__next');
var sliderRecommended = new slickSliderController('.recommended-slider', '.recommended-slider__prev', '.recommended-slider__next');
var sliderNew = new slickSliderController('.new-slider', '.new-slider__prev', '.new-slider__next');

sliderHit.slickSlider();
sliderRecommended.slickSlider();
sliderNew.slickSlider();
