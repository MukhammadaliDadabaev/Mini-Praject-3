"use strict";
// Selektors
const myText = document.querySelector("#my-text");
const result = document.querySelector("#result");

// Shartli-miqdor
let limit = 50;
result.textContent = 0 + "/" + limit;

// Event-Listener
myText.addEventListener('input', () => {
    let textLength = myText.value.length;
    result.textContent = textLength + '/' + limit;

// Funksiyaga stil berish
    if (textLength > limit) {
        myText.style.borderColor = 'red';
        result.style.color = 'red'; 
    } else {
        myText.style.borderColor = "rgb(14, 214, 14)";
        result.style.color = "rgb(14, 214, 14)"; 
    }
});










