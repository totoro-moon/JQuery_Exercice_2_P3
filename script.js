var clicks = 0;
$(document).ready(function () {
    $("#addClic").click(function () {
        clicks++;
        $("input").val(clicks)
    });
    $("#suppressClic").click(function () {
        clicks--;
        $("input").val(clicks)
    });
});
