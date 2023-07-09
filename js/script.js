"use strict";
const headerEl = document.querySelector(".header");
const mobileNav = () => {
    const navBtn = document.querySelector(".btn-mobile-nav");

    navBtn.addEventListener("click", () => {
        headerEl.classList.toggle("nav-open");
    });
};
const stickyNav = () => {
    const body = document.body;
    const sectionHeroEl = document.querySelector(".hero");
    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            entry.isIntersecting ? body.classList.remove("sticky") : body.classList.add("sticky");
        },
        { root: null, threshold: 0, rootMargin: "-80px" }
    );
    observer.observe(sectionHeroEl);
};

// Smooth scrolling animation
const scrollSmoothlyToSection = () => {
    const links = document.querySelectorAll("a:link");

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const sectionId = link.getAttribute("href");

            // Scroll back to top
            if (sectionId === "#") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                // Scroll to other links and close navbar on phone if opened
                if (link.classList.contains("main-nav-link")) headerEl.classList.remove("nav-open");
                const sectionEl = document.querySelector(sectionId);
                sectionEl.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });
};
mobileNav();
stickyNav();
scrollSmoothlyToSection();
