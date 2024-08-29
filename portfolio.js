console.log("hello");


document.getElementById("burger").addEventListener("click", function () {
    var navigation = document.getElementById("navigation");
    if (navigation.style.display === "flex") {
        navigation.style.display = "none";
    } else {
        navigation.style.display = "flex";
    }
});

document.getElementById("PortfolioSign").addEventListener("click", function () {
    window.location.href = 'portfolio.html';
});


document.getElementById("HomeBtn").addEventListener("click", function () {
    window.location.href = 'index.html';
});

document.getElementById("Home").addEventListener("click", function () {
    window.location.href = 'index.html';
});



document.getElementById("About").addEventListener("click", function () {
    window.location.href = 'index.html';
});
