/**
 * Created by elina on 7/17/2018.
 */

/** MENU HAMBURGER ...*/
function menuMobile(button) {
    $(button).click(function(){
        var menuMobile = $('.menu-mobile');
        $('.menu-mobile__button').toggleClass('menu-mobile__button-inactive');
        menuMobile.toggleClass('menu-mobile-active');
        menuMobile.toggleClass('page-active__mobile-menu');
        $('.page').toggleClass('page-active');
        $('.page__main').toggleClass('page-active__main');
    });
}


var open    = menuMobile('.menu-mobile__button');
var close   = menuMobile('.menu-mobile__button-close');
