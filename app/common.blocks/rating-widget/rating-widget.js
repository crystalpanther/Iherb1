/**
 * Created by elina on 7/17/2018.
 */

function ratingWidget() {
    /* 1. Visualizing things on Hover - See next part for action on click */
    $('.rating-widget .rating-widget__star').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('.rating-widget__star').each(function(e){
            if (e < onStar) {
                $(this).addClass('rating-widget__star-hover');
            }
            else {
                $(this).removeClass('rating-widget__star-hover');
            }
        });

    }).on('mouseout', function(){
        $(this).parent().children('.rating-widget__star').each(function(e){
            $(this).removeClass('rating-widget__star-hover');
        });
    });


    /* 2. Action to perform on click */
    $('.rating-widget .rating-widget__star').on('click', function(){
        var i;
        var onStar = parseInt($(this).data('value'), 10);
        var stars = $(this).parent().children('.rating-widget__star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('rating-widget__star-selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('rating-widget__star-selected');
        }
    });

}