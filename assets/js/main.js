

var docLoaded = function () {
  var headerVisible = true;
  var contactVisible = false;
  const buttonLeft = document.getElementById("collapseLeft");
  const buttonUp = document.getElementById("collapseUp");
  const header = document.getElementsByClassName("site-header")[0];
  const gridContainer = document.getElementsByClassName("grid-container")[0];
  const pageContent = document.getElementsByClassName("page-content")[0];
  const openForm = document.getElementById("openForm");
  const closeForm = document.getElementById("closeForm");
  const contactForm = document.getElementsByClassName("contact-form")[0];
  const projectHeader = document.getElementsByClassName("projects-heading")[0];
  const backToTop = document.getElementById("backToTop");
  const openFormX = openForm.offsetLeft;
  const openFormY = openForm.offsetTop;
  var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent && !navigator.userAgent.match('CriOS');
  var isEdge = document.documentMode || /Edge/.test(navigator.userAgent);
  if (isEdge) {
    buttonLeft.style.display = "none";
  }
  
  const origHeaderWidth = projectHeader.clientWidth;
  // Save some width constants which will be used to animate the sidebar 
  // collapsing and reopening

  // Handles the collapsing header
  buttonLeft.addEventListener("click", function (e) {
    let headerWidth = header.clientWidth;
    let contentWidth = pageContent.clientWidth;
    if (headerVisible) {
      header.style.left = "-" + (headerWidth - 28) + "px";
      pageContent.style.left = "-" + (headerWidth - 28) + "px";
      buttonLeft.innerHTML = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
      pageContent.style.width = contentWidth + (headerWidth - 28) + "px";
      // Janky safari work around
      if (isSafari || document.documentMode || /Edge/.test(navigator.userAgent)) {
        projectHeader.style.width = origHeaderWidth + (headerWidth - 28) + "px";
      } else {
        projectHeader.style.width = "calc(100% - 28px)";
      }
    } else {
      header.style.left = "0px";
      pageContent.style.left = "0px";
      buttonLeft.innerHTML = '<i class="fa fa-angle-left" aria-hidden="true"></i>';
      pageContent.style.width = "100%";
//       Janky safari work around 
      if (isSafari || document.documentMode || /Edge/.test(navigator.userAgent)) {
        projectHeader.style.width = origHeaderWidth + "px";
      } else {
        projectHeader.style.width = "calc(100% - 550px)";
      }
    }
    headerVisible = !headerVisible;
  });

  // collapse header up event
  if (window.location.pathname != "/" && !window.matchMedia("(min-width: 900px)").matches) {
    let headerHeight = header.clientHeight;
    headerVisible = !headerVisible;
    header.style.top = "-" + (headerHeight - 28) + "px";
    pageContent.style.top = "-" + (headerHeight - 28) + "px";
    buttonUp.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
  }

  if (window.location.pathname != "/") {
    backToTop.style.display = "inline";
  }

  buttonUp.addEventListener("click", function (e) {
    let headerHeight = header.clientHeight;
    if (headerVisible) {
      header.style.top = "-" + (headerHeight - 28) + "px";
      pageContent.style.top = "-" + (headerHeight - 28) + "px";
      buttonUp.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
    } else {
      header.style.top = "0px";
      pageContent.style.top = "0px";
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

  // close contact form event
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

  // back to top button event
  backToTop.addEventListener("click", function (e) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
};


if (document.readyState === "complete" ||
  document.readyState === "interactive") {
  docLoaded();
} else {
  document.addEventListener("DOMContentLoaded", docLoaded);
}
