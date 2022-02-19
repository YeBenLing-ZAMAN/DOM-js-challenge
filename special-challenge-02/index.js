const sliderContainer = document.getElementById('slider-container');
const slideRight = document.getElementById('right-slider');
const slideLeft = document.getElementById('left-slider');
const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');


const slidersLength = slideRight.querySelectorAll('div').length;


let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidersLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidersLength - 1) {
            activeSlideIndex = 0;
        }
    }else if(direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidersLength -1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}


