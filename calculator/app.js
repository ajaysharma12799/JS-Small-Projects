let inputField = document.querySelector(".inputField");
let buttons = document.querySelectorAll("button");
let expValue = ""; // variable to Store Expression

for(let singleButton of buttons) {
    singleButton.addEventListener("click", function(e) {
        let buttonText = e.target.innerText;
        if(buttonText == "x" ) {
            buttonText = "*";
            expValue += buttonText;
            inputField.value = expValue;
        }
        else if(buttonText == "C" || buttonText == "CE") {
            expValue = "";
            inputField.value = expValue;
        }
        else if(buttonText == "=") {
            inputField.value = eval(expValue);
            setTimeout(() => {
                inputField.value = ""; // Empty Input Field After Showing Result
            }, 10000);
        }
        else { // Concat Value and Show them on Screen
            expValue += buttonText;
            inputField.value = expValue;
        }
    });
}