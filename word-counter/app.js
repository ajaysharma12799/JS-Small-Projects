let output = document.querySelector("span");
let sentence = document.querySelector(".words");
let button = document.querySelector(".submitButton");

button.addEventListener("click", countWords);

function countWords() {
    if(sentence.value === "") {
        showError("Enter Sentence", "error"); 
        document.querySelector(".container").style.height = "80vh";
        output.innerText = 0;
    }
    else {
        let wordsArray = sentence.value.trim().split(" ");
        output.innerText = wordsArray.length;
        setTimeout(() => {
           sentence.value = "";
           output.innerText = 0; 
        }, 5000);
    }
}

function showError(message, cssClass) {
    // Creating New Component
    let div = document.createElement("div");
    let errorMessage = document.createTextNode(message);
    div.classList.add(cssClass);
    div.appendChild(errorMessage);

    // Inserting New Element into DOM Tree
    let parentElement = document.querySelector(".container");
    parentElement.insertAdjacentElement("beforebegin", div);
}