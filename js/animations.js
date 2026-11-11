(function () {
    const prefersReducedMotion = window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
        return;
    }

    const root = document.documentElement;
    const revealItems = [];

    function addReveal(element, direction) {
        if (!element || element.classList.contains("reveal-item")) {
            return;
        }

        element.classList.add("reveal-item", `reveal--${direction}`);
        revealItems.push(element);
    }

    const background = document.querySelector("#background");
    if (background) {
        const backgroundSection = background.closest("section.topLevel");
        addReveal(backgroundSection, "up");
        backgroundSection.classList.add("background-reveal");
        backgroundSection.classList.add("reveal--background");
    }

    const pluginHeading = document.querySelector("#UE_Plugins");
    addReveal(pluginHeading, "up");

    document.querySelectorAll(".swiper-slide").forEach((slide, index) => {
        const slideIndex = Number.parseInt(slide.dataset.swiperSlideIndex, 10);
        const staggerIndex = Number.isNaN(slideIndex) ? index : slideIndex;
        slide.style.setProperty("--reveal-delay", `${staggerIndex * 70}ms`);
        addReveal(slide, "up");
    });

    addReveal(document.querySelector("#projects"), "up");
    document.querySelectorAll(".single-project > div > img, .single-project > div > aside").forEach((item) => {
        const direction = item.classList.contains("project-left") ? "left" : "right";
        addReveal(item, direction);
    });

    addReveal(document.querySelector("#otherProjects"), "up");
    const otherProjectsGrid = document.querySelector("#otherProjectsGrid");
    if (otherProjectsGrid) {
        const otherProjects = otherProjectsGrid.querySelectorAll(".single-other-project");
        const updateOtherProjectDelays = () => {
            const columnCount = getComputedStyle(otherProjectsGrid).gridTemplateColumns.split(/\s+/).length;
            otherProjects.forEach((item, index) => {
                item.style.setProperty("--reveal-delay", `${(index % columnCount) * 100}ms`);
            });
        };

        updateOtherProjectDelays();
        window.addEventListener("resize", updateOtherProjectDelays);

        otherProjects.forEach((item) => {
            addReveal(item, "up");
        });
    }

    const introLines = document.querySelectorAll("#intro-text > h1");
    introLines.forEach((line, index) => {
        line.classList.add("intro-item-enter");
        line.style.setProperty("--intro-delay", `${index * 250}ms`);
    });

    const socialLinks = document.querySelectorAll("#socialRow > a");
    socialLinks.forEach((link, index) => {
        link.classList.add("intro-item-enter");
        link.style.setProperty("--intro-delay", `${(introLines.length + index) * 250}ms`);
    });

    const navLinks = document.querySelectorAll("#navButtons > li > a");
    navLinks.forEach((link) => link.classList.add("nav-item-pending"));

    const animateNavigation = () => {
        let index = navLinks.length - 1;
        const animateNextLink = () => {
            if (index < 0) {
                return;
            }

            const link = navLinks[index];
            link.classList.remove("nav-item-pending");
            link.classList.add("nav-item-enter");
            index -= 1;

            if (index >= 0) {
                window.setTimeout(animateNextLink, 150);
            }
        };

        animateNextLink();
    };

    if (socialLinks.length > 0) {
        const lastSocial = socialLinks[socialLinks.length - 1];
        lastSocial.addEventListener("animationstart", animateNavigation, { once: true });
    } else {
        animateNavigation();
    }

    if (!("IntersectionObserver" in window)) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: "0px 0px -5% 0px"
    });

    revealItems.forEach((item) => observer.observe(item));
})();
