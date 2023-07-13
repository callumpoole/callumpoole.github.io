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
                goToTop.classList.remove("go-to-top--visible");
            } else {
                nav.classList.add("nav--shadow");
                goToTop.classList.add("go-to-top--visible");
            }
        }
        lastScrollY = window.scrollY;
    });
}

window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty('--colorDHue', currentScrollPercentage()*2.4);
});

function currentScrollPercentage()
{
    return ((document.documentElement.scrollTop + document.body.scrollTop) / 
            (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
}