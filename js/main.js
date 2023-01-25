const selectedImage = document.getElementById("image");

const myImages = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png"];

const nextButton = document.getElementById('button__next');

nextButton.addEventListener('click', imageChangeNext);

const prevButton = document.getElementById('button__prev');

prevButton.addEventListener('click', imageChangePrev);

let i = 0;
selectedImage.src = myImages[i]; 

function imageChangeNext () {
    if (i < myImages.length - 1) {
        i++;
        selectedImage.src = myImages[i]; 
    } else {
        nextButton.disabled = true;
        i--;
    }
    return selectedImage;
}

function imageChangePrev () {
    if (i < myImages.length - 1 && i > 0) {
        i--;
        selectedImage.src = myImages[i]; 
    } else {
        prevButton.disabled = true;
        i++;
    }
    return selectedImage;
}
