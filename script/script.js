" use strict";

let navButton = document.getElementsByClassName('nav__button');
    nav = document.getElementsByClassName('nav__menu');
    close = document.getElementsByClassName('close');

let galleryPhotoCardArr = [
        './img/jpeg/P1.jpg',
        './img/jpeg/P2.jpg',
        './img/jpeg/P3.jpg',
        './img/jpeg/P4.jpg',
        './img/jpeg/P5.jpg',
        './img/jpeg/P6.jpg'
];

galleryCard = document.getElementsByClassName('ourworks__gallery__item');

console.log(navButton);
console.log(nav);
console.log(galleryCard);



navButton[0].addEventListener('click', function() {
    nav[0].classList.add('active');
});

close[0].addEventListener('click', function() {
    nav[0].classList.remove('active');
});

function addBackgroundGallery() {
    for (i = 0; i < galleryPhotoCardArr.length; i++) {
        galleryCard[i].style.backgroundColor = green;
    }
}