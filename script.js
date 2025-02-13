document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("music-modal").style.display = "flex";
});
var music;

function startSlideshow(enableMusic) {
    let messages = [];
    let currentMessageIndex = 0;
    document.getElementById('message').style.display = 'block';

    document.getElementById("music-modal").style.display = "none";
    document.querySelector(".container").style.display = "flex";
    document.getElementById('greeting').style.display = 'block';
    if (enableMusic) {
        music = enableMusic;
        document.getElementById("background-music").play();
        // let youtubeMusic = document.getElementById("youtube-music");
        // let src = youtubeMusic.src;
        // youtubeMusic.src = src.includes("mute=1") ? src.replace("mute=1", "mute=0") : src.replace("mute=0", "mute=1");
    }

    messages = [
        "Wishing you a beautiful day filled with love, laughter, and endless happiness!",
        "Enjoy your special day!",
        "May today bring you joy, warmth, and wonderful moments to cherish forever!",
        "Happiness always!",
        "Celebrating this special moment with you!"
    ];

    function changeSlide() {
        document.getElementById('greeting').style.display = 'none';
        if (currentMessageIndex < messages.length) {
            document.getElementById('message').innerText = messages[currentMessageIndex];
            currentMessageIndex++;
        } else {
            document.getElementById('message').style.display = 'none';
            document.getElementById('final-image-container').style.display = 'block';
            // Show replay message & button after 5 seconds
            setTimeout(() => {
                document.getElementById("replay-section").style.display = "block";
            }, 10000);
        }
    }
    setInterval(changeSlide, 10000);
}

// function createFloatingEffect() {
//     let floatingContainer = document.getElementById("floating-effects");
//     let emoji = ["🎈", "💖", "❤️", "🎂", "💕"];
//     let element = document.createElement("div");
//     element.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];
//     element.style.left = Math.random() * 100 + "vw";
//     element.style.animation = "floatDown 7s linear infinite";
//     floatingContainer.appendChild(element);
//     setTimeout(() => { floatingContainer.removeChild(element); }, 7000);
// }

function createFloatingEffect() {
    let floatingContainer = document.getElementById("floating-effects");
    // let emojiList = ["🎈", "💖", "❤️", "🎂", "💕", "🌟", "🎶"];
    let emojiList = ["🎈", "💖", "❤️", "🎂", "💕"];

    let element = document.createElement("div");
    element.innerHTML = emojiList[Math.floor(Math.random() * emojiList.length)];
    element.classList.add("floating-emoji");

    // Random position, size, speed, and opacity
    let startPosX = Math.random() * 100; // Start at a random horizontal position
    let startPosY = -10; // Start slightly above the screen
    let size = Math.random() * 1.2 + 0.8; // Random scale (0.8x - 2x)
    let duration = Math.random() * 4 + 6; // Duration between 6s and 10s
    let opacity = Math.random() * 0.5 + 0.5; // Opacity between 0.5 - 1

    element.style.left = `${startPosX}vw`;
    element.style.top = `${startPosY}vh`;
    element.style.transform = `scale(${size})`;
    element.style.opacity = opacity;
    element.style.animation = `floatDown ${duration}s linear forwards`;

    floatingContainer.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, duration * 1000);
}

setInterval(createFloatingEffect, 500);

function restartSlideshow() {
    window.location.reload();
    // console.log(music);
    // document.getElementById("final-image-container").style.display = "none";
    // document.getElementById("replay-section").style.display = "none";
    // startSlideshow(music);
}