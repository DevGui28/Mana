function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.innerHTML = "❤";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    let duration = Math.random() * 5 + 3;
    heart.style.animationDuration = duration + "s";

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
setInterval(createHeart, 200);