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
