// IMPORTAR DATA
let tableData = data;
// CONSOLE LOG UFO DATA
console.log(tableData);
// YOUR CODE HERE!
let tbody = d3.select("tbody");
// // PREVIO
// // USE D3 TO APPEND
// LOOP TABLE
// INSERTA UNA ROW EN EL TBODY Y GARDA LA VARIABLE ROW
data.forEach(d=>{
    let row= tbody.append("tr")
    // CREATE A TDATA AND APPEND A ROW
    Object.values(d).forEach(w=>{
        // USE D3 TO INSERT VALUES INTO EACH OBJECT
        row.append("td").text(w)
    })
})


//SET BUTTON ATTRIBUTES
let button = d3.select("#filter-btn");
button.on("click", function(){
    alert("hola")
    console.log(newText)
})
let input = d3.select("#datetime");
input.on("change", function(){   
    let newText = d3.event.target.value;
    console.log(newText)
    // SET LISTENER FOR BUTTON CLICK

})


//SET FILTER
let filteredEvents = newText.filter(d=> d.Date===newText)
console.log(filteredEvents)


//SET MOUSE ACTION
button.on("click", runEnter);
// SET CLICK ACTION
input.on("submit", runEnter);
})
