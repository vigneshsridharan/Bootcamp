const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const galleryImgs = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

nextBtn.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove('active');
    currentlySelected++;
    galleryImgs[currentlySelected].classList.add('active');
    
    prevBtn.disabled = false;
    
    if (galleryImgs.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    }
});

prevBtn.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove('active');
    currentlySelected--;
    galleryImgs[currentlySelected].classList.add('active');

    nextBtn.disabled = false;
    
    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
});
