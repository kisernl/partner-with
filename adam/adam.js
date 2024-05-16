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

// video button toggle
document.querySelector("#video-button").addEventListener("click", videoToggle);
function videoToggle() {
  const video = document.getElementById("vertical-video");
  if (video.style.display === "none") {
    video.style.display = "block"; // Show the video
  } else {
    video.style.display = "none"; // Hide the video
  }
}

// play video
// vimeo-player.js

const options = {
  id: 294187310, // Vimeo video ID
  title: false,
  byline: false,
  autoplay: true,
};

const player = new Vimeo.Player("video-player", options);

console.log("javascript is running!");

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
