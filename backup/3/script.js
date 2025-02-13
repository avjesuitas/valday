document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("music-modal").style.display = "flex";
});

function startSlideshow(enableMusic) {
    document.getElementById("music-modal").style.display = "none";
    document.querySelector(".container").style.display = "flex";

    if (enableMusic) {
        document.getElementById("background-music").play();
    }

    let greetingText = "🎉 Happy Birthday & Valentine's! 💖";
    let greetingElement = document.getElementById("greeting");
    let messages = [
        "Wishing you love and happiness!",
        "May your day be filled with joy!",
        "Celebrating this special moment with you!"
    ];
    let currentMessageIndex = 0;
    let messageElement = document.getElementById('message');

    function typeGreeting(text, index = 0) {
        if (index < text.length) {
            greetingElement.innerHTML += text.charAt(index);
            setTimeout(() => typeGreeting(text, index + 1), 100);
        } else {
            setTimeout(startSlideshowMessages, 2000);
        }
    }

    function startSlideshowMessages() {
        messageElement.innerHTML = messages[currentMessageIndex];
        messageElement.style.opacity = 1;
        setTimeout(nextMessage, 2000);
    }

    function nextMessage() {
        currentMessageIndex++;
        if (currentMessageIndex < messages.length) {
            messageElement.style.opacity = 0;
            setTimeout(() => {
                messageElement.innerHTML = messages[currentMessageIndex];
                messageElement.style.opacity = 1;
                setTimeout(nextMessage, 2000);
            }, 500);
        } else {
            setTimeout(() => {
                messageElement.style.display = 'none';
                document.getElementById('final-image-container').style.display = 'block';
            }, 2000);
        }
    }

    typeGreeting(greetingText);
}

function createFloatingEffect() {
    let floatingContainer = document.getElementById("floating-effects");
    let emoji = ["🎈", "💖", "❤️", "🎂", "💕"];
    let element = document.createElement("div");
    element.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];
    element.style.left = Math.random() * 100 + "vw";
    element.style.animation = "floatDown 7s linear infinite";
    floatingContainer.appendChild(element);
    setTimeout(() => { floatingContainer.removeChild(element); }, 7000);
}
setInterval(createFloatingEffect, 700);
