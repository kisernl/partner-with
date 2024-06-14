const scrollableElement = document.getElementById("scrollableElement");
document.addEventListener("wheel", function (ev) {
  if (scrollableElement.scrollWidth > scrollableElement.clientWidth) {
    ev.preventDefault();
    scrollableElement.scrollLeft += ev.deltaY;
  }
});

// buttons scripts to scroll blocks

document.getElementById("go-to-4").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default anchor link behavior

  // Smooth scroll to #block4
  document.getElementById("block4").scrollIntoView({ behavior: "smooth" });
});
