document.addEventListener("DOMContentLoaded", () => {

    // Header
    fetch("assets/include/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("Header Load Error:", error));

    // Footer
    fetch("assets/include/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Footer Load Error:", error));

});








