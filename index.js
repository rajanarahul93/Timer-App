function setLightTheme() {
    $('.navbar.navbar-expand-lg.navbar-light').addClass('bg-light');
    $('#title1').css({ "color": "#333333" });
    $('body').css({ "background": "linear-gradient(to right, purple, dark blue)" });
    $('.digit').css({ "color": "#fff" });
    $('#light').prop("checked", false);
    $('.foot').css({ "background": "#ffffff" });
}

function setDarkTheme() {
    $('.navbar.navbar-expand-lg.navbar-light').removeClass('bg-light');
    $('.navbar.navbar-expand-lg.navbar-light').css({ "background-color": "#000" });
    $('#title1').css({ "color": "#ffffff" });
    $('body').css({ "background": "#191212" });
    $('.digit').css({ "color": "#d6891f" });
    $('.buttons').css({ "border-color": "#ffffff" });
    $('#light').prop("checked", true);
    $('.foot').css({ "background": "#a7a7a7" });
}

var prefersDarkThemeMql = window.matchMedia("(prefers-color-scheme: dark)");

prefersDarkThemeMql.addEventListener("change", function(mql) {
    if (localStorage.getItem("darkmode") === null && mql.matches) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
});

$(document).ready(function () {

    if (
        localStorage.getItem("darkmode") == "true" ||
        (localStorage.getItem("darkmode") === null && prefersDarkThemeMql.matches)
    ) {
        setDarkTheme();
    }

    $('#light').on("change paste keyup", function (e) {
        if (!e.target.checked) {
            setLightTheme();
            localStorage.setItem("darkmode", false);
        }
        else {
            setDarkTheme();
            localStorage.setItem("darkmode", true);
        }
    });
});
