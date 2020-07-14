window.addEventListener("load", app);

function app() {
    var oldStrLen = 0,
        charsEachSec = [],
        getSPD = () => {
            let arrow = document.querySelector(".arrow"),
               
                spd = 0;

            // download bandwith

            arrowSpd = 70;

            arrow.style.transform = "rotate(" + ((arrowSpd * 2) - 120) + "deg) translateY(-72%)";

            // make SPD string, clean digits, redisplay digits
            let spdStr = spd.toString();

            for (var d of display)
                d.className = "_";

            for (var i in spdStr)
                display[display.length - 1 - i].className = "_" + spdStr[spdStr.length - 1 - i];
        };

    // runtime loop
    var run = () => {
        getSPD();
        setTimeout(run, 1e3);
    };
    run();
}