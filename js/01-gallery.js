import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

document.addEventListener("keydown", keyboardEsc);
galleryEl.addEventListener("click", onclickElementGallery);

function createElementGallery(galleryItems) {
  return galleryItems
    .map((itm) => {
      return `
            <li class="gallery__item">
                <a class="gallery__link" href="${itm.original}">
                    <img
                        class="gallery__image"
                        src="${itm.preview}"
                        data-source="${itm.original}"
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

function onclickElementGallery(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  openOriginalSize(event, galleryItems);
}

let instance = null;

function openOriginalSize(event, galleryItems) {
  console.dir(event.target.dataset.source);
  console.log(galleryItems);
  instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="500" height="300">`,
    {
      onShow: () => {
        document.addEventListener("keydown", keyboardEsc);
      },
      onClose: () => {
        document.removeEventListener("keydown", keyboardEsc);
      },
    }
  );
  instance.show();
}

function keyboardEsc(event) {
  if (event.key !== "Escape") {
    return;
  }
  instance.close();
}
