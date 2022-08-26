const display = document.querySelector("#display");
const play = document.querySelector("button");
play.addEventListener("click", () => {
    display.classList.toggle("display");
});