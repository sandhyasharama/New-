document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll("button");

    buttons[0].addEventListener("click", function () {
        window.location.href = "addstudent.html";
    });

    buttons[1].addEventListener("click", function () {
        window.location.href = "remove.html";
    });

    buttons[2].addEventListener("click", function () {
        window.location.href = "update.html";
    });

    buttons[3].addEventListener("click", function () {
        window.location.href = "search.html";
    });

});
