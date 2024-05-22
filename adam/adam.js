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

console.log("javascript is running!");

// javascript for slider

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// javascript for accordion
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// javascript for buttons

document
  .querySelector("#prayer-button")
  .addEventListener("click", prayerToggle);
function prayerToggle() {
  const prayerDiv = document.getElementById("prayer-div");
  if (prayerDiv.style.display === "none") {
    prayerDiv.style.display = "block"; // Show the div
  } else {
    prayerDiv.style.display = "none"; // Hide the div
  }
}

document
  .querySelector("#mailchimp-button")
  .addEventListener("click", divToggle);
function divToggle() {
  const mailchimpDiv = document.getElementById("mailchimp-div");
  if (mailchimpDiv.style.display === "none") {
    mailchimpDiv.style.display = "block"; // Show the div
  } else {
    mailchimpDiv.style.display = "none"; // Hide the div
  }
}
