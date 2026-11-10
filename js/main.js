{
    const nav = document.querySelector("body > nav");
    const goToTop = document.querySelector(".go-to-top");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            nav.classList.add("nav--hidden");
            nav.classList.remove("nav--shadow");
        } else {
            nav.classList.remove("nav--hidden");
            if (window.scrollY === 0) {
                nav.classList.remove("nav--shadow");
                if (goToTop) {
                    goToTop.classList.remove("go-to-top--visible");
                }
            } else {
                nav.classList.add("nav--shadow");
                if (goToTop) {
                    goToTop.classList.add("go-to-top--visible");
                }
            }
        }
        lastScrollY = window.scrollY;
    });
}

window.addEventListener("scroll", () => {
    const hue = currentScrollPercentage() * 2.4;
    document.documentElement.style.setProperty('--colorDHue', Number.isFinite(hue) ? hue : 0);
});

function currentScrollPercentage()
{
    const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (maxScroll <= 0) {
        return 0;
    }

    return ((document.documentElement.scrollTop + document.body.scrollTop) / maxScroll) * 100;
}