// smooth scroll to partner section
document
  .getElementById("link-to-partner")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor link behavior

    // Use the scrollTo method with smooth behavior
    window.scrollTo({
      top: document.getElementById("partner").offsetTop, // Get the vertical position of the target element
      behavior: "smooth", // Enable smooth scrolling
    });
  });

// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("mapImg");
let modalImg = document.getElementById("img01");
// let captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

//Modal for second  map image

let modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img2 = document.getElementById("mapImg2");
let modalImg2 = document.getElementById("img02");
// let captionText = document.getElementById("caption");
img2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
