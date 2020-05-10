$(function (){
    $.("devour-me").on("click", function(event){
        var id = $(this).data("id");
        var devour = $(this).data("devour");

        var newBurgers = {
            burger: devour
        }
    })
})