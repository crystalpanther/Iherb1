/**
 * Created by elina on 7/17/2018.
 */
/**
 * SEARCH MOBILE BUTTON
 */

$('.search-mobile__button').click(function(){
    $(this).toggleClass('search-mobile__button-active');
    $('.search-mobile').toggleClass('search-mobile-active');
});