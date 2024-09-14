let rowElements = document.querySelectorAll(".keyboard li");
let textInput = document.querySelector(".title");

rowElements.forEach(function (key) {
    key.addEventListener("click", function (event) {
        let keyValue = event.target.getAttribute("id")

        document.getElementById(keyValue).classList.add("hit")
        handleKeyPress(keyValue)
    })
    key.addEventListener("animationend",function () {
        key.classList.remove("hit")
    })
})

document.addEventListener("keydown", function (event) {
    let keyValue = event.key.toUpperCase();
    
    if (keyValue === "BACKSPACE") {
        handleKeyPress("back");
    } else if (keyValue === "ENTER") {
        handleKeyPress("enter");
    } else {
        handleKeyPress(keyValue);
    }
    document.getElementById(keyValue).classList.add("hit")
    document.addEventListener("animationend",function () {
        document.classList.remove("hit")
    })})

function handleKeyPress(keyValue) {
    if (keyValue === "back") {
        textInput.textContent = textInput.textContent.slice(0, -1);
    } else if (keyValue === "enter") {
        textInput.textContent += "\n";
    } else {
        textInput.textContent += keyValue;
    }}