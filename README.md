# jQuery-load-ajax
***
Description: insert the contents of an html file inside a DOM element
***
#### Using load function
```
$("#data-load").load("external.html", function (data) {
    console.log(data);
});
```
***
#### Using jQuery AJAX 
```
$.ajax({
    method: "GET",
    url: "external.html",
    cache: false,
    dataType: "html"
}).done(function (html) {
    console.log(html);
    $("#data-get").append(html);
});
```