/* script.js */

let images = [
    // "assets/images/birthday1.jpg", "assets/images/birthday2.jpg", "assets/images/birthday3.jpg",
    // "assets/images/valentine1.jpg", "assets/images/valentine2.jpg", "assets/images/valentine3.jpg"
];
let messages = [
    "Wishing you love and happiness!",
    "May your day be filled with joy!",
    "Celebrating this special moment with you!"
];
let currentImageIndex = 0;
let currentMessageIndex = 0;

function changeSlide() {
    if (currentImageIndex < images.length) {
        document.getElementById('slideshow').src = images[currentImageIndex];
        document.getElementById('message').innerText = messages[currentMessageIndex];
        currentImageIndex++;
        currentMessageIndex++;
    } else {
        document.getElementById('slideshow').style.display = 'none';
        document.getElementById('message').style.display = 'none';
        document.getElementById('final-image').style.display = 'block';
    }
}
setInterval(changeSlide, 3000);

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

function updateGreeting() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerText = name ? `🎉 Happy Birthday & Valentine's, ${name}! 💖` : "🎉 Happy Birthday & Valentine's! 💖";
}

function toggleMusic() {
    let youtubeMusic = document.getElementById("youtube-music");
    let src = youtubeMusic.src;
    youtubeMusic.src = src.includes("mute=1") ? src.replace("mute=1", "mute=0") : src.replace("mute=0", "mute=1");
}
