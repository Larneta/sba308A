import { fetchRandomDog, fetchDogsByBreed } from "./api.js";
import { showImage, showGallery } from "./ui.js";

// Random dog button
document.getElementById("random-btn").addEventListener("click", async () => {
  const url = await fetchRandomDog();
  showImage(url);
});

// Search button
document.getElementById("search-btn").addEventListener("click", async () => {
  const breed = document.getElementById("breed-input").value;
  const images = await fetchDogsByBreed(breed);
  showGallery(images);
});