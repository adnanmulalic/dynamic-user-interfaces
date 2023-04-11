const menu = document.querySelector("#menu");
const menuButton = document.querySelector("#menuButton");
const menuOptions = document.querySelector(".menuOptions");

function drop(menu) {
    if (menu.classList.contains("hidden")) {
        menu.classList.replace("hidden", "visible");
    } else {
        menu.classList.replace("visible", "hidden");
    }
}



function doSomething() {
    console.log("Do something");
}

menuButton.addEventListener("click", () => {
    drop(menuOptions);
    if (menuOptions.classList.contains("visible")) {
        console.log("doing something");
    }
});