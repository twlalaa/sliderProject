"use strict";

let myImages = ["pic1", "pic2", "pic3", "pic4", "pic5"];

let sliderEl = document.getElementById("slider");
let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");

let counter = 0;

rightBtn.addEventListener("click", () => {
  if (counter < myImages.length) {
    counter++;
  }
  if (counter == myImages.length) {
    counter = 0;
  }
  sliderEl.style.backgroundImage = `url("images/${myImages[counter]}.jpg")`;
});

leftBtn.addEventListener("click", () => {
  if (counter < myImages.length && counter>=0) {
    counter--;
  }
  if (counter < 0) {
    counter = myImages.length-1;
  }
  sliderEl.style.backgroundImage = `url("images/${myImages[counter]}.jpg")`;
});
console.log(counter);
