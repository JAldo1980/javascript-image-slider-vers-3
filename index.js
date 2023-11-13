// declare variables
const backButton = document.getElementById("back-button");
const forwardButton = document.getElementById("forward-button");

const imgContainer = document.getElementById("img-container");

// current index
let currentIndex = 0;

// image array
const imageArr = [
  "images/sheepscape-2.JPG",
  "images/sheepscape-3.JPG",
  "images/sheepscape-4.JPG",
  "images/sheepscape-5.JPG",
  "images/sheepscape-6.JPG",
  "images/sheepscape-7.JPG",
  "images/sheepscape-8.JPG",
];

// event listeners

// back button function
backButton.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + imageArr.length) % imageArr.length;

  imgContainer.innerHTML = `
  <img src="${imageArr[currentIndex]}" />
  `;
});

// forward button function
forwardButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1 + imageArr.length) % imageArr.length;

  // Update the image in the imgContainer
  imgContainer.innerHTML = `
    <img src="${imageArr[currentIndex]}" />
    `;
});
