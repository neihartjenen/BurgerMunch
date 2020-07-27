$(function () {
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger").val().trim(),
      devoured: 0
    };
    //console.log($("#newburger").val().trim());

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".eatburger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devouredStatus = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("api/burgers" + id, {
      type: "PUT",
      data: devouredStatus
    }).then(
      function () {
        console.log("Burger was devoured!!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});