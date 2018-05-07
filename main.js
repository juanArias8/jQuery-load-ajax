$(document).ready(function () {

    $("#data-load").load("external.html", function (data) {
        console.log(data);
    });

    $.ajax({
        method: "GET",
        url: "external.html",
        cache: false,
        dataType: "html"
    }).done(function (html) {
        console.log(html);
        $("#data-get").append(html);
    });
});