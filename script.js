let isClicked7 = false;
let isClicked8 = false;

document.getElementById("hobby-list").children[2].addEventListener("click", function() {
    if (!isClicked7) {
        document.getElementById("hobby-list").children[2].style.backgroundColor = "blue";
        document.getElementById("hobby-list").children[2].style.color = "white";
    } else {
        document.getElementById("hobby-list").children[2].style.backgroundColor = "white";
        document.getElementById("hobby-list").children[2].style.color = "black";
    }
    isClicked7 = !isClicked7;
});

document.querySelector("#films").addEventListener("click", function() {
    if (!isClicked8) {
        this.style.backgroundColor = "green";
        this.style.color = "white";
    } else {
        this.style.backgroundColor = "white";
        this.style.color = "black";
    }
    isClicked8 = !isClicked8;
});

image = document.getElementById("image");
const addButton = document.getElementById("add-image");
const increaseButton = document.getElementById("increase-image");
const decreaseButton = document.getElementById("decrease-image");
const removeButton = document.getElementById("remove-image");

addButton.addEventListener("click", function() {
    const imageContainer = document.getElementById("image-container");

    if (!document.getElementById("image")) {
        const newImageLink = document.createElement("a");
        newImageLink.href = "https://lviv.travel";
        newImageLink.target = "_blank";

        const newImage = document.createElement("img");
        newImage.id = "image";
        newImage.src = "lviv.jpg";
        newImage.alt = "Фото Львова";
        newImage.width = 500;
        newImage.height = 300;

        newImageLink.appendChild(newImage);
        imageContainer.appendChild(newImageLink);

        image = document.getElementById("image");
    }
});

increaseButton.addEventListener("click", function() {
    image.width += 50;
    image.height += 30;
});

decreaseButton.addEventListener("click", function() {
    if (image.width > 50 && image.height > 30) {
        image.width -= 50;
        image.height -= 30;
    }
});

removeButton.addEventListener("click", function() {
    image.remove();
});
