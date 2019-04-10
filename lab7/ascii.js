var speed = 250;
var index = 0;
var timer;

// var startButton = document.getElementById("start");
// var stopButton  = document.getElementById("stop");
// var animationSelect = document.getElementById("animation");
// var fontSizeSelect = document.getElementById("fontsize");
// var turboCheck = document.getElementById("turbo");
window.onload = function () {
    document.getElementById("start").onclick = function () {
        controlDisable(true);
        var animation = document.getElementById("animation").value;
        var contents = ANIMATIONS[animation];
        contents = contents.split("=====\n");
        timer = setInterval((contents) => {
            document.getElementById("text-area").value = contents[index];
            index === contents.length - 1 ? index = 0 : index++;
        }, speed, contents);

    };

    document.getElementById("stop").onclick = function () {
        controlDisable(false);
        index = 0;
        clearInterval(timer);
        timer = null;
        document.getElementById("text-area").value = "";
    };

    function controlDisable(active) {
        document.getElementById("start").disabled = active;
        document.getElementById("stop").disabled = !active;
        document.getElementById("animation").disabled  = active;
    }

    document.getElementById("fontsize").addEventListener("change",event => {
        document.getElementById("text-area").style.fontSize = event.target.value;
    });

    document.getElementById("turbo").addEventListener("change", event => {
        event.target.checked ? speed = "50" : speed = "250";
    })





};


