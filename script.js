const left = document.getElementById('left-arrow');
const right = document.getElementById('right-arrow');
const images = document.querySelectorAll(".image");
const image = document.getElementById('image');

const imagesUrl = [
    'url(https://source.unsplash.com/V1NTzSrnXvw)',
    'url(https://source.unsplash.com/F9mqFr3oIZg)',
    'url(https://source.unsplash.com/wSFfGQnFNdw)',
    'url(https://source.unsplash.com/YPoByk5REwQ)'
]

let currentSlide = 0;

image.style.backgroundImage= imagesUrl[0];
image.classList.add('image');

left.addEventListener('click', () => {
    console.log("left clicked.");
    moveSlide(-1);
})

right.addEventListener('click', () => {
    console.log("right clicked.");
    moveSlide(1);
})


function moveSlide(direction) {

    // console.log(`Images: ${images}`);

    currentSlide = currentSlide + direction;

    if (currentSlide < 0)
    {
        currentSlide = 3;
    }
    
    else if(currentSlide > 3)
    {
        currentSlide = 0;
    }

    console.log(`New slide: ${currentSlide}`);
    console.log(`current slide: ${currentSlide}`);
    console.log(`ImagesUrl[currentSlide]: ${imagesUrl[currentSlide]}`);

    currentSlide = currentSlide;

    image.style.backgroundImage= imagesUrl[currentSlide];
    image.classList.add('image');
    // imagesUrl[currentSlide].classList.remove("active");
    // imagesUrl[newSlideIndex].classList.add("active");
    // currentSlide = newSlideIndex;
}