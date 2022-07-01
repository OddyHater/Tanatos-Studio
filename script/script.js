" use strict";

let navButton = document.getElementsByClassName('nav__button'),
    nav = document.getElementsByClassName('nav__menu'),
    close = document.getElementsByClassName('close'),
    bodyScrollHidden = document.getElementsByTagName('html');


navButton[0].addEventListener('click', function() {
    nav[0].classList.add('active');
    bodyScrollHidden[0].classList.add('scroll__hidden');
});

close[0].addEventListener('click', function() {
    nav[0].classList.remove('active');
    bodyScrollHidden[0].classList.remove('scroll__hidden');
});