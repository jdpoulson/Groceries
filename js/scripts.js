var items = [];
$(document).ready(function() {
  $("form#items").submit(function(event) {
    event.preventDefault();
    var input = $("input#list").val();
    items.push(input);
  });
  $("form#my-items").submit(function(event) {
    event.preventDefault();
    var myitems = items.map(function(item) {
      return item.toUpperCase();
    });
    myitems.forEach(function(myitem) {
      $(".myitems").append("<li>" + myitem + "</li>");
    });
    $(".myitems").show();
    $("#items").hide();
  });
});
