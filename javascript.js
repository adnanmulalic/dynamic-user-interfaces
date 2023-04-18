const menu = document.querySelector("#menu");
const menuButton = document.querySelector("#menuButton");
const menuOptions = document.querySelector(".menuOptions");
const pictureFrame = document.querySelector("#pictureFrame");
const leftButton = document.querySelector("#leftButton");
const rightButton = document.querySelector("#rightButton");
const dots = document.querySelector("#dots");
const pictureFolder= "img/"

function drop(menu) {
    if (menu.classList.contains("hidden")) {
        menu.classList.replace("hidden", "visible");
    } else {
        menu.classList.replace("visible", "hidden");
    }
}

function pictureLoader() {
    for (let i = 0; i < 5; i++) {
        let newImage = document.createElement("img");
        newImage.setAttribute("id", "image" + i)
        newImage.src = "img/pic" + i + ".png";
        newImage.classList.add("picture");
        newImage.hidden = true;
        let newDot = document.createElement("span");
        newDot.setAttribute("id", "dot" + i);
        newDot.dataset.position = i;
        newDot.classList.add("dot");
        dots.appendChild(newDot);
        pictureFrame.appendChild(newImage);
    }
    pictureFrame.firstChild.hidden = false;
    dots.firstChild.classList.add("dot-chosen");
}

pictureLoader();
let pictureNodes = pictureFrame.childNodes;
let dotNodes = dots.childNodes;

menuButton.addEventListener("click", () => {
    drop(menuOptions);
    if (menuOptions.classList.contains("visible")) {
        console.log("doing something");
    }
});

rightButton.addEventListener("click", ()=> {
    let indexOfLastPicture = 0;
    pictureNodes.forEach(function (picture, pictureIndex) {
        if (picture.hidden === false) {
            picture.hidden = true;
            indexOfLastPicture = pictureIndex;
            dotNodes[pictureIndex].classList.remove("dot-chosen");
        }
    })
    if (indexOfLastPicture === pictureNodes.length - 1) {
        pictureNodes[0].hidden = false;
        dotNodes[0].classList.add("dot-chosen");
    } else {
        pictureNodes[indexOfLastPicture + 1].hidden = false;
        dotNodes[indexOfLastPicture + 1].classList.add("dot-chosen");
    }
})
let indexOfLastPicture = 0;
leftButton.addEventListener("click", ()=> {
    pictureNodes.forEach(function (picture, pictureIndex) {
        if (picture.hidden === false) {
            picture.hidden = true;
            indexOfLastPicture = pictureIndex;
            dotNodes[pictureIndex].classList.remove("dot-chosen");
        }
    })
    if (indexOfLastPicture === 0) {
        pictureNodes[pictureNodes.length - 1].hidden = false;
        dotNodes[pictureNodes.length - 1].classList.add("dot-chosen");
    } else {
        pictureNodes[indexOfLastPicture - 1].hidden = false;
        dotNodes[indexOfLastPicture - 1].classList.add("dot-chosen");
    }
})

/* dots.addEventListener("click", (e)=> {
    if (condition) {
        console.log(e.target.getAttribute("id"));
    }
}) */

dotNodes.forEach((dot) => {
    dot.addEventListener("click", ()=> {
        pictureNodes.forEach(function (picture, pictureIndex) {
            if (picture.hidden === false) {
                picture.hidden = true;
                indexOfLastPicture = pictureIndex;
                dotNodes[pictureIndex].classList.remove("dot-chosen");
            }
        })
        pictureNodes[dot.dataset.position].hidden = false;
        dotNodes[dot.dataset.position].classList.add("dot-chosen");
        console.log(pictureNodes[dot.dataset.position]);
    })
})