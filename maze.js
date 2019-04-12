$(function () {
    let start = false;
    $("#start").mousedown(() => {
        if (start) $("h2").text("You can move now!");
        $("div.boundary").removeClass("youlose");
        start = true;
    });
    $("div.boundary").mouseover(() => {
        if (start) lost();
    });

    $("#end").mouseover(() => {
        if (start) $("h2").text("You Win, click \"S\" to run again :]");
        start = false;
    });

    $("#maze").mouseleave(() => {
        if (start) lost();
    });

    function lost() {
        $("div.boundary").addClass("youlose");
        $("h2").text("You Lose :((");
        start = false;
    };


});
