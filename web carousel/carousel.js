const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const indicatorNav = document.querySelector('.carousel__nav');
const indicators = Array.from(indicatorNav.children);

//get width of slide
const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slide next to one another 
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

//update indicator function
const updateIndicator = (currentIndicator, targetIndicator) => {
    currentIndicator.classList.remove('current-slide');
    targetIndicator.classList.add('current-slide');
}

//move slide function
const moveSlideTo = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'; 
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

//move to next slide function
const moveToNextSlide = () => {
    currentSlide = track.querySelector('.current-slide');
    nextSlide = currentSlide.nextElementSibling;

    if(!nextSlide) {
        nextSlide = slides[0];
        moveSlideTo(track, currentSlide, nextSlide);
        const currentIndicator = indicatorNav.querySelector('.current-slide');
        const nextIndicator = indicators[0];
        updateIndicator(currentIndicator, nextIndicator);
    }
    else{

        const currentIndicator = indicatorNav.querySelector('.current-slide');
        const nextIndicator = currentIndicator.nextElementSibling;

        moveSlideTo(track, currentSlide, nextSlide);
        updateIndicator(currentIndicator, nextIndicator);
    }
}

//when i click next, move to next slide
nextButton.addEventListener('click', e => {

    moveToNextSlide();
    
});

//when i click prev, move to revious slide
prevButton.addEventListener('click', e => {

    currentSlide = track.querySelector('.current-slide');
    prevSlide = currentSlide.previousElementSibling;
    if(!prevSlide) {
        prevSlide = slides[slides.length-1];
        moveSlideTo(track, currentSlide, prevSlide);
        const currentIndicator = indicatorNav.querySelector('.current-slide');
        const prevIndicator = indicators[slides.length-1];
        updateIndicator(currentIndicator, prevIndicator);
    }
    else{
        const currentIndicator = indicatorNav.querySelector('.current-slide');
        const prevIndicator = currentIndicator.previousElementSibling;

        moveSlideTo(track, currentSlide, prevSlide);
        updateIndicator(currentIndicator, prevIndicator)
    }

});

//when i click on the nav indicator, move to that slide
indicatorNav.addEventListener('click', e => {
   let targetIndicator = e.target.closest("button");

   if(!targetIndicator) return;
     
    const currentSlide = track.querySelector('.current-slide');
    const currentIndicator = indicatorNav.querySelector('.current-slide');
    const targetIndex = indicators.findIndex(indicator => indicator === targetIndicator)
    const targetSlide = slides[targetIndex];
    moveSlideTo(track, currentSlide, targetSlide);

    updateIndicator(currentIndicator, targetIndicator);
})

setInterval( moveToNextSlide , 5000 );