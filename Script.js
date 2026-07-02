console.log("SPKVlog07 Website Loaded 🚀");

// Navbar scroll effect
window.addEventListener("scroll", function () {
const header = document.querySelector("header");

```
if (window.scrollY > 50) {
    header.style.background = "#020617";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
} else {
    header.style.background = "transparent";
    header.style.boxShadow = "none";
}
```

});

// Smooth scrolling
document.querySelectorAll("nav a").forEach(anchor => {
anchor.addEventListener("click", function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute("href"));
target.scrollIntoView({ behavior: "smooth" });
});
});

// Scroll reveal animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
const triggerBottom = window.innerHeight * 0.8;

```
sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    }
});
```

});

// Subscribe button
function subscribe() {
alert("Thanks for subscribing to SPKVlog07 🔥");
}

// Load YouTube video dynamically
function loadVideo(videoId) {
const iframe = document.querySelector("iframe");
iframe.src = "https://www.youtube.com/embed/" + videoId;
}
