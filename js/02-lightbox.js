import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

function createElementGallery(galleryItems) {
  return galleryItems
    .map((itm) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${itm.original}">
            <img
              class="gallery__image"
              src="${itm.preview}"
              alt="${itm.description}"
            />
          </a>
        </li>
      `;
    })
    .join("");
}

const element = createElementGallery(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", element);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 500,
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Space") {
    lightbox.close();
  }
});
