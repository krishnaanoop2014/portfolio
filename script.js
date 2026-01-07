/* ================= TYPING ================= */
document.addEventListener("DOMContentLoaded", () => {
    new Typed(".text", {
        strings: [
            "Aspiring Data Analyst",
            "AI & Machine Learning Student",
            "Python & Data Enthusiast",
            "Future Data Scientist"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true
    });
});

/* ================= SCROLL REVEAL ================= */
const revealElements = document.querySelectorAll(
    ".home-content, .about-content, .skill-box, .project-card, .contact-info, .ring"
);

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < windowHeight - 100) {
            el.classList.add("reveal-active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ================= ACTIVE NAV ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (pageYOffset >= top) current = section.getAttribute("id");
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) {
            a.classList.add("active");
        }
    });
});

/* ================= SKILL RINGS ================= */
const rings = document.querySelectorAll(".ring");

const animateRings = () => {
    rings.forEach(ring => {
        const percent = ring.dataset.percent;
        const circle = ring.querySelector("circle:last-child");
        const radius = 50;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    });
};

const ringObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) animateRings();
    });
}, { threshold: 0.5 });

rings.forEach(ring => ringObserver.observe(ring));
