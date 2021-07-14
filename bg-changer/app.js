let containerElement = document.getElementById("container");

containerElement.addEventListener("click", changeColor);

function changeColor() {
    let random1 = Math.floor(Math.random() * 255 + 1);
    let random2 = Math.floor(Math.random() * 255 + 1);
    let random3 = Math.floor(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
}