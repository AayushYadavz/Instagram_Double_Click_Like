const mainImg = document.querySelector('#main-img');
const icon = document.querySelector('.ri-heart-3-fill');

mainImg.addEventListener('dblclick', function(){
    // After double clicking the icon shows up
    icon.style.transform = 'translate(-50%, -50%) scale(2)';
    icon.style.opacity = 0.8;
    // And after 1 second of timeout it will be hidden
    setTimeout(() => {
        icon.style.opacity = 0
    }, 1000); /* 1000 = 1 second */
    setTimeout(() => {
        icon.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 2000);
});