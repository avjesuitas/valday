
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("music-modal").style.display = "flex";
});

function startSlideshow(enableMusic) {
    document.getElementById("music-modal").style.display = "none";
    document.querySelector(".container").style.display = "block";

    if (enableMusic) {
        let youtubeMusic = document.getElementById("youtube-music");
        youtubeMusic.src = youtubeMusic.src.replace("mute=1", "mute=0");
    }

    let messages = [
        "Wishing you love and happiness!",
        "May your day be filled with joy!",
        "Celebrating this special moment with you!"
    ];
    let currentMessageIndex = 0;

    function changeSlide() {
        if (currentMessageIndex < messages.length) {
            document.getElementById('message').innerText = messages[currentMessageIndex];
            currentMessageIndex++;
        } else {
            document.getElementById('message').style.display = 'none';
            document.getElementById('final-image-container').style.display = 'block';
        }
    }
    setInterval(changeSlide, 3000);
}

function createFloatingEffect() {
    let floatingContainer = document.getElementById("floating-effects");
    let emoji = ["🎈", "💖", "❤️", "🎂", "💕"];
    let element = document.createElement("div");
    element.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];
    element.style.left = Math.random() * 100 + "vw";
    element.style.animation = "floatDown 5s linear infinite";
    floatingContainer.appendChild(element);
    setTimeout(() => { floatingContainer.removeChild(element); }, 5000);
}
setInterval(createFloatingEffect, 500);
