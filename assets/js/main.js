"use strict";

var headerVisible = true;

var docLoaded = function () {
  let buttonLeft = document.getElementById("collapseLeft");
  let buttonUp = document.getElementById("collapseUp");
  let header = document.getElementsByClassName("site-header")[0];
  let gridContainer = document.getElementsByClassName("grid-container")[0];
  let pageContent = document.getElementsByClassName("page-content")[0];

  // Save some width constants which will be used to animate the sidebar 
  // collapsing and reopening
  
  // Handles the collapsing header
  buttonLeft.addEventListener("click", function(e) {
    let gridWidth = gridContainer.clientWidth;
    let headerWidth = header.clientWidth;
    if (headerVisible) {
      gridContainer.style.transform = "translate(-"+ (headerWidth - 28)+"px,0)";
      buttonLeft.innerHTML = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
      gridContainer.style.width = gridWidth + (headerWidth - 28) + "px";
    } else {
      gridContainer.style.transform = "translate(0,0)";
      buttonLeft.innerHTML = '<i class="fa fa-angle-left" aria-hidden="true"></i>';
      gridContainer.style.width = "100vw";
    }
    headerVisible = !headerVisible;
  });

  buttonUp.addEventListener("click", function(e) {
    let gridHeight = gridContainer.clientHeight;
    let headerHeight = header.clientHeight;
    if (headerVisible) {
      gridContainer.style.transform = "translate(0,-"+(headerHeight - 28)+"px)";
      buttonUp.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
    } else {
      gridContainer.style.transform = "translate(0,0)";
      buttonUp.innerHTML = '<i class="fa fa-angle-up" aria-hidden="true"></i>';
    }
    headerVisible = !headerVisible;
  });

};



if (document.readyState === "complete" ||
    document.readyState === "interactive") {
  docLoaded();
} else {
  document.addEventListener("DOMContentLoaded", docLoaded);
}


