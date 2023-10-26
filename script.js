const message = "Welcome to our Novels Website!";
const messageElement = document.getElementById("introMessage");

let index = 0;

function displayMessage() {
    if (index < message.length) {
        messageElement.textContent += message[index];
        index++;
        setTimeout(displayMessage, 100); // Typing speed (in milliseconds)
    }
}

displayMessage();
