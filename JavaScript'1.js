const previewImages = document.getElementsByClassName("preview");
const bigImageWrapper = document.querySelector(".central-slide");
const previewImagesWrapper = document.querySelector(".preview-slides");

const setUpNewBigImages = (smallImageSrc) => {
    const bigImageSrc = smallImageSrc.replace("_small.jpg", "_big.jpg");

    const newBigImage = document.createElement("img");
    newBigImage.src = bigImageSrc;

    bigImageWrapper.innerHTML = "";
    bigImageWrapper.appendChild(newBigImage);
};

const setUpNewActivePreviewImage = (event) => {
    const activePreviewImage = document.querySelector(".preview-slides .active");
    activePreviewImage.classList.remove("active");

    event.target.parentElement.classList.add("active");
};

const galleryHandler = (event) => {
    if (event.target === event.currentTarget) return;

    setUpNewBigImages(event.target.src);
    setUpNewActivePreviewImage(event);
};

const review = (){
image.src="https://picsum.photos/800/600"
onload ="Picture is find"
onerror = "Picture not find"
}

previewImagesWrapper.addEventListener("click", galleryHandler)
