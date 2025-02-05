document.addEventListener("DOMContentLoaded", () => {
    const valentines = document.querySelector(".valentines");
    const card = document.querySelector(".card");
    let isOpen = false;

    valentines.addEventListener("click", () => {
        if (!isOpen) {
            card.style.transition = "transform 0.5s ease-in-out";
            card.style.transform = "translateY(-80px)";
            createFloatingHearts();
        } else {
            card.style.transform = "translateY(0)";
        }
        isOpen = !isOpen;
    });

    function createFloatingHearts() {
        for (let i = 0; i < 10; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            document.body.appendChild(heart);
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animation = `heart-float ${2 + Math.random() * 3}s linear infinite`;
            setTimeout(() => heart.remove(), 5000);
        }
    }
}); // ✅ Fixed closing curly brace
