const left = document.getElementById('left-arrow');
const right = document.getElementById('right-arrow');
const images = document.querySelectorAll(".image");


let currentSlide = 0;

left.addEventListener('click', () => {
    console.log("left clicked.");
    moveSlide(-1);
})

right.addEventListener('click', () => {
    console.log("right clicked.");
    moveSlide(1);
})

console.log(`current slide: ${currentSlide}`);

function moveSlide(direction) {
    // console.log(`Images: ${images}`);
    console.log(`11current slide: ${currentSlide}`);
    let newSlideIndex = currentSlide + direction;
    console.log(`11New slide: ${newSlideIndex}`);
    if (newSlideIndex<0)
    {
        newSlideIndex = 3;
    }
    
    else if(newSlideIndex>3)
    {
        newSlideIndex=0;
    }

    console.log(`New slide: ${newSlideIndex}`);
    console.log(`current slide: ${currentSlide}`);

    images[currentSlide].classList.remove("active");
    images[newSlideIndex].classList.add("active");
    currentSlide = newSlideIndex;
}