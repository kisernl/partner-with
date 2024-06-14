// smooth scroll to partner section
document
  .getElementById("link-to-partner")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor link behavior

    // Use the scrollTo method with smooth behavior
    window.scrollTo({
      top: document.getElementById("partner-block").offsetTop, // Get the vertical position of the target element
      behavior: "smooth", // Enable smooth scrolling
    });
  });

// Config
const isOpenClass = "modal-is-open";
const openingClass = "modal-is-opening";
const closingClass = "modal-is-closing";
const scrollbarWidthCssVar = "--pico-scrollbar-width";
const animationDuration = 400; // ms
let visibleModal = null;

// Toggle modal
const toggleModal = (event) => {
  event.preventDefault();
  const modal = document.getElementById(event.currentTarget.dataset.target);
  if (!modal) return;
  modal && (modal.open ? closeModal(modal) : openModal(modal));
};
window.toggleModal = toggleModal;

// Open modal
const openModal = (modal) => {
  const { documentElement: html } = document;
  const scrollbarWidth = getScrollbarWidth();
  if (scrollbarWidth) {
    html.style.setProperty(scrollbarWidthCssVar, `${scrollbarWidth}px`);
  }
  html.classList.add(isOpenClass, openingClass);
  setTimeout(() => {
    visibleModal = modal;
    html.classList.remove(openingClass);
  }, animationDuration);
  modal.showModal();
};

// Close modal
const closeModal = (modal) => {
  visibleModal = null;
  const { documentElement: html } = document;
  html.classList.add(closingClass);
  setTimeout(() => {
    html.classList.remove(closingClass, isOpenClass);
    html.style.removeProperty(scrollbarWidthCssVar);
    modal.close();
  }, animationDuration);
};

// Close with a click outside
document.addEventListener("click", (event) => {
  if (visibleModal === null) return;
  const modalContent = visibleModal.querySelector("article");
  const isClickInside = modalContent.contains(event.target);
  !isClickInside && closeModal(visibleModal);
});

// Close with Esc key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && visibleModal) {
    closeModal(visibleModal);
  }
});

// Get scrollbar width
const getScrollbarWidth = () => {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  return scrollbarWidth;
};

// Is scrollbar visible
const isScrollbarVisible = () => {
  return document.body.scrollHeight > screen.height;
};

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

document
  .querySelector("#support-button")
  .addEventListener("click", supportToggle);
function supportToggle() {
  const supportDiv = document.getElementById("support-div");
  if (supportDiv.style.display === "none") {
    supportDiv.style.display = "block"; // Show the div
  } else {
    supportDiv.style.display = "none"; // Hide the div
  }
}
