export function showImage(url) {
  const img = document.getElementById("dog-img");
  img.src = url;
}

export function showGallery(images) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  images.slice(0, 6).forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.width = 150;
    gallery.appendChild(img);
  });
}