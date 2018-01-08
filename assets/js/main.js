"use strict";

var headerVisible = true;
var contactVisible = false;
var docLoaded = function () {
  const buttonLeft = document.getElementById("collapseLeft");
  const buttonUp = document.getElementById("collapseUp");
  const header = document.getElementsByClassName("site-header")[0];
  const gridContainer = document.getElementsByClassName("grid-container")[0];
  const ageContent = document.getElementsByClassName("page-content")[0];
  const openForm = document.getElementById("openForm");
  const closeForm = document.getElementById("closeForm");
  const contactForm = document.getElementsByClassName("contact-form")[0];
  const openFormX = openForm.offsetLeft;
  const openFormY = openForm.offsetTop;
  // Save some width constants which will be used to animate the sidebar 
  // collapsing and reopening

  // Handles the collapsing header
  buttonLeft.addEventListener("click", function (e) {
    let gridWidth = gridContainer.clientWidth;
    let headerWidth = header.clientWidth;
    if (headerVisible) {
      gridContainer.style.transform = "translate(-" + (headerWidth - 28) + "px,0)";
      buttonLeft.innerHTML = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
      gridContainer.style.width = gridWidth + (headerWidth - 28) + "px";
    } else {
      gridContainer.style.transform = "translate(0,0)";
      buttonLeft.innerHTML = '<i class="fa fa-angle-left" aria-hidden="true"></i>';
      gridContainer.style.width = "100vw";
    }
    headerVisible = !headerVisible;
  });

  buttonUp.addEventListener("click", function (e) {
    let gridHeight = gridContainer.clientHeight;
    let headerHeight = header.clientHeight;
    if (headerVisible) {
      gridContainer.style.transform = "translate(0,-" + (headerHeight - 28) + "px)";
      buttonUp.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
    } else {
      gridContainer.style.transform = "translate(0,0)";
      buttonUp.innerHTML = '<i class="fa fa-angle-up" aria-hidden="true"></i>';
    }
    headerVisible = !headerVisible;
  });

  // Contact form slide in
  openForm.addEventListener("click", function (e) {
    if (!contactVisible) {
      contactForm.style.transform = "scale(1)";
      if (window.matchMedia("(min-width: 900px)").matches) {
        contactForm.style.bottom = "100px";
        contactForm.style.left = "5%";
      } else {
        contactForm.style.bottom = "110px";
        contactForm.style.left = "2.5%";
      }
    } else {
      contactForm.style.transform = "scale(0)";
      if (window.matchMedia("(min-width: 900px)").matches) {
        contactForm.style.bottom = "-128px";
        contactForm.style.left = "-150px";
      } else {
        contactForm.style.bottom = "-116px";
        contactForm.style.left = "-240px";
      }
    }
    contactVisible = !contactVisible;
  });

  closeForm.addEventListener("click", function (e) {
    contactForm.style.transform = "scale(0)";
    if (window.matchMedia("(min-width: 900px)").matches) {
      contactForm.style.bottom = "-128px";
      contactForm.style.left = "-150px";
    } else {
      contactForm.style.bottom = "-116px";
      contactForm.style.left = "-240px";
    }
    contactVisible = false;
  });
};



if (document.readyState === "complete" ||
  document.readyState === "interactive") {
  docLoaded();
} else {
  document.addEventListener("DOMContentLoaded", docLoaded);
}