(function () {
    var navigationEntry = window.performance &&
        performance.getEntriesByType &&
        performance.getEntriesByType("navigation")[0];
    var isReload = navigationEntry
        ? navigationEntry.type === "reload"
        : performance.navigation && performance.navigation.type === 1;

    if (!isReload) {
        return;
    }

    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    window.addEventListener("pageshow", function () {
        window.scrollTo({ top: 0, behavior: "instant" });
        window.setTimeout(function () {
            if ("scrollRestoration" in history) {
                history.scrollRestoration = "auto";
            }
        }, 0);
    }, { once: true });
})();
