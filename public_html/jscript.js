function startCounter(elementId, target, duration, suffix) {
    const counterElement = document.getElementById(elementId);
    const startTime = performance.now();
    const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const value = Math.floor(progress * target);
        counterElement.textContent = value + suffix;
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    };
    requestAnimationFrame(updateCounter);
}

document.addEventListener('DOMContentLoaded', () => {
    const duration = 1600; // 1.6 seconds
    startCounter('statsTitle', 15, duration, '+');
    startCounter('statsTitle1', 200, duration, '+');
    startCounter('statsTitle2', 95, duration, '%+');
});



document.getElementById("About").addEventListener("click", function () {
    window.location.href = 'index.html';
});

document.getElementById("Home").addEventListener("click", function () {
    window.location.href = 'index.html';
});

document.getElementById("PortfolioSign").addEventListener("click", function () {
    window.location.href = 'portfolio.html';
});

document.getElementById("readMoreButton").addEventListener("click", function () {
    window.location.href = 'https://t.me/yarchefis_channel/59';
});


document.getElementById("Justbutton").addEventListener("click", function () {
    window.location.href = 'https://timurchg.space';
});

document.getElementById("burgerMenu").addEventListener("click", function () {
    var navigation = document.getElementById("navigation");
    if (navigation.style.display === "flex") {
        navigation.style.display = "none";
    } else {
        navigation.style.display = "flex";
    }
});