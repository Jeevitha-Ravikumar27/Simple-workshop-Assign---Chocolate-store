document.addEventListener("DOMContentLoaded", function () {
    function switchOn() {
        document.getElementById("bulbImage").src = 
            "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
        document.getElementById("switchStatus").textContent = "Switched On";
        
        // Change cat to white
        document.getElementById("catImage").src = 
            "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    }

    function switchOff() {
        document.getElementById("bulbImage").src = 
            "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
        document.getElementById("switchStatus").textContent = "Switched Off";

        // Change cat to black
        document.getElementById("catImage").src = 
            "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    }

    document.getElementById("onSwitch").addEventListener("click", switchOn);
    document.getElementById("offSwitch").addEventListener("click", switchOff);
});


