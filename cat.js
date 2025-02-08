document.addEventListener("DOMContentLoaded", function () {
    const bulb = document.getElementById("bulbImage");
    const cat = document.getElementById("catImage");
    const status = document.getElementById("switchStatus");

    document.getElementById("onSwitch").addEventListener("click", function () {
        // Change bulb image to ON state
        bulb.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";

        // Make cat move and visible
        cat.classList.add("on");
        cat.classList.remove("off");

        // Update status text
        status.textContent = "Switched On";
    });

    document.getElementById("offSwitch").addEventListener("click", function () {
        // Change bulb image to OFF state
        bulb.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";

        // Stop cat movement and make it dark
        cat.classList.add("off");
        cat.classList.remove("on");

        // Update status text
        status.textContent = "Switched Off";
    });
});
