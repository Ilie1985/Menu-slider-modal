const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const navbar = document.getElementById("navbar");

// This function closes navbar if user clicks anywhere outside of navbar once it's opened
// Does not leave unused event listeners on
// It's messy, but it works
function closeNavbar(e) {
  if (
    document.body.classList.contains("show-nav") &&
    e.target !== toggle &&
    !toggle.contains(e.target) &&
    e.target !== navbar &&
    !navbar.contains(e.target)
  ) {
    document.body.classList.toggle("show-nav");
    document.body.removeEventListener("click", closeNavbar);
  } else if (!document.body.classList.contains("show-nav")) {
    document.body.removeEventListener("click", closeNavbar);
  }
}

//EVENT LISTENER

//Toggle nav
toggle.addEventListener("click", () => {
  return document.body.classList.toggle("show-nav");
  document.body.addEventListener("click", closeNavbar);
});

//Show modal
//take modal and add a class to it
open.addEventListener("click", () => {
  return modal.classList.add("show-modal");
});

//Remove the modal
//remove the classlist from modal
//create the style in css for modal-contaoner.show-modal in order for this to work
close.addEventListener("click", () => {
  return modal.classList.remove("show-modal");
});

// Hide modal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
