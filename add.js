const btn = document.querySelector(".share-icon");
const mediaContainer = document.querySelector(".social-media-icon-wrapper");

btn.addEventListener("click", () => {
  mediaContainer.classList.toggle("active");
});
