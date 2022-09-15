const images = [
    'img/pic-1.jpg',
    'img/pic-2.jpg',
    'img/pic-3.jpg',
    'img/pic-4.jpg',
    'img/pic-5.jpg',
]

let imgIndex = 0;
const slideImg = document.getElementById('carousel-img');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgShow = images[imgIndex];
    slideImg.setAttribute('src', imgShow);
    imgIndex++;
}, 2000);