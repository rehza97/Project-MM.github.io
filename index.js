"use strict";
const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

const darkMode = document.querySelector(".dark-mode");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-variables");
  darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
  darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
});

class Progbar {
  constructor(element, InitVal = 0) {
    this.ValElem = element.querySelector(".prog-val");
    this.FillElem = element.querySelector(".prog-fill");

    this.setValue(InitVal);
  }
  setValue(newval) {
    if (newval < 0) {
      newval = 0;
    } else if (newval > 100) {
      newval = 100;
    }
    this.value = newval;
    this.update();
  }

  update() {
    const percentage = this.value + "%";

    this.FillElem.style.width = percentage;
    this.ValElem.textContent = percentage;
  }
}

new Progbar(document.querySelector(".one"), 74);
new Progbar(document.querySelector(".two"), 4);
new Progbar(document.querySelector(".three"), 20);
new Progbar(document.querySelector(".four"), 54);

const next_id = document.querySelector("#next");
const prev_id = document.querySelector("#prev");

const next_class = document.querySelector(".next");
const prev_class = document.querySelector(".prev");

const newUsers = document.querySelector(".new-users");

next_class.addEventListener("mousemove", function (event) {
  var rect = next_class.getBoundingClientRect();
  var mouseX = event.clientX - rect.left;
  var mouseY = event.clientY - rect.top;

  if (
    mouseX >= 0 &&
    mouseY >= 0 &&
    mouseX <= rect.width &&
    mouseY <= rect.height
  ) {
    console.log("Mouse is hovering over the target area");
    next_id.style.transform = `translateX(-100%)`;
  }
});
next_class.addEventListener("mouseout", function (event) {
  var rect = next_class.getBoundingClientRect();
  var mouseX = event.clientX - rect.left;
  var mouseY = event.clientY - rect.top;

  if (
    !(
      mouseX >= 0 &&
      mouseY >= 0 &&
      mouseX <= rect.width &&
      mouseY <= rect.height
    )
  ) {
    console.log("Mouse is hovering outside the target area");
    next_id.style.transform = `translateX(100%)`;
    next_class.style.display = "block";
    prev_id.style.transform = `translateX(-100%)`;
    prev_class.style.display = "block";
  }
});
prev_class.addEventListener("mousemove", function (event) {
  var rect = prev_class.getBoundingClientRect();
  var mouseX = event.clientX - rect.left;
  var mouseY = event.clientY - rect.top;

  if (
    mouseX >= 0 &&
    mouseY >= 0 &&
    mouseX <= rect.width &&
    mouseY <= rect.height
  ) {
    console.log("Mouse is hovering over the target area");
    prev_id.style.transform = `translateX(100%)`;
    next_id.style.transform = `translateX(100%)`;
  }
});
prev_class.addEventListener("mouseout", function (event) {
  var rect = prev_class.getBoundingClientRect();
  var mouseX = event.clientX - rect.left;
  var mouseY = event.clientY - rect.top;

  if (
    !(
      mouseX >= 0 &&
      mouseY >= 0 &&
      mouseX <= rect.width &&
      mouseY <= rect.height
    )
  ) {
    console.log("Mouse is hovering outside the target area");
    prev_id.style.transform = `translateX(-100%)`;
    prev_class.style.display = "block";
    next_id.style.transform = `translateX(100%)`;
    next_class.style.display = "block";
  }
});
