"use strict";

var headerVisible = true;

var docLoaded = function () {
  let buttonLeft = document.getElementById("collapseLeft");
  let buttonUp = document.getElementById("collapseUp");
  let header = document.getElementsByClassName("site-header")[0];
  // Handles the collapsing header
  buttonLeft.addEventListener("click", function(e) {
    let width = header.clientWidth;
    if (headerVisible) {
      header.style.transform = "translate(-"+(width - 15)+"px,0)";
      buttonLeft.innerHTML = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
    } else {
      header.style.transform = "translate(0,0)";
      buttonLeft.innerHTML = '<i class="fa fa-angle-left" aria-hidden="true"></i>';
    }
    headerVisible = !headerVisible;
  });

  buttonUp.addEventListener("click", function(e) {
    let height = header.clientHeight;
    if (headerVisible) {
      header.style.transform = "translate(0,-"+(height-15)+"px)";
      buttonUp.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
    } else {
      header.style.transform = "translate(0,0)";
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


