/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imgArr = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];

const createCarousel = (imgSrc) => {
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const image = document.createElement("img");
  const rightButton = document.createElement("div");

  carousel.appendChild(leftButton);
  carousel.appendChild(image);
  carousel.appendChild(rightButton);

  // set class names
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  // add content
  leftButton.textContent = "<";
  rightButton.textContent = ">";

  image.src = imgSrc;

  // add functionality
  leftButton.addEventListener("click", () => {
    event.target.style.color = "blue";
  })

  rightButton.addEventListener("click", () => {
    event.target.style.color = "red";
  })

  return carousel;
}

const carouselContainer = document.querySelector(".carousel-container");

imgArr.forEach(item => {
  const switchImg = createCarousel(item);
  carouselContainer.appendChild(switchImg);
})