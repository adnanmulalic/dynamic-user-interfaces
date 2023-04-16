const menu = document.querySelector("#menu");
const menuButton = document.querySelector("#menuButton");
const menuOptions = document.querySelector(".menuOptions");
const pictureFrame = document.querySelector("#pictureFrame");
const leftButton = document.querySelector("#leftButton");
const rightButton = document.querySelector("#rightButton");
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
        pictureFrame.appendChild(newImage);
    }
    pictureFrame.firstChild.hidden = false;
}

function doSomething() {
    console.log("Do something");
}

pictureLoader();
let pictureNodes = pictureFrame.childNodes;
menuButton.addEventListener("click", () => {
    drop(menuOptions);
    if (menuOptions.classList.contains("visible")) {
        console.log("doing something");
    }
});

rightButton.addEventListener("click", ()=> {
    let indexOfLastPicture = 0;
    //pictureNodes = document.querySelectorAll(".picture")
    pictureNodes.forEach(function (picture, pictureIndex) {
        if (picture.hidden === false) {
            picture.hidden = true;
            indexOfLastPicture = pictureIndex;
        }
    })
    if (indexOfLastPicture === pictureNodes.length - 1) {
        pictureNodes[0].hidden = false;
    } else {
        pictureNodes[indexOfLastPicture + 1].hidden = false;
    }
})

leftButton.addEventListener("click", ()=> {
    let indexOfLastPicture = 0;
    //pictureNodes = document.querySelectorAll(".picture")
    pictureNodes.forEach(function (picture, pictureIndex) {
        if (picture.hidden === false) {
            picture.hidden = true;
            indexOfLastPicture = pictureIndex;
        }
    })
    if (indexOfLastPicture === 0) {
        pictureNodes[pictureNodes.length - 1].hidden = false;
    } else {
        pictureNodes[indexOfLastPicture - 1].hidden = false;
    }
})