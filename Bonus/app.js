var search_input = document.querySelector("#search_input");

search_input.addEventListener("keyup", function(e){
    var search_item = e.target.value.toLowerCase();
    var span_items = document.querySelectorAll(".table_body .datetime")

    span_items.forEach(function(item){
        if(item.textContent.toLowerCase().indexOf(search_item))
    })
})