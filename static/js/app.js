// // IMPORTAR DATA
var tableData = data;
// CREAR SELECTORES 
let button = d3.select("#filter-btn")
let input = d3.select("#datetime") 
// let form = d3.select("#filters")
// CREAR FUNCIÓN
function printResult(){
        // SET PREVENT FORMULARY TO BE SENT TO SERVER
    d3.event.preventDefault();
      // CAPTURAR EN UNA NUEVA VARIABLE LO QUE CAPTURA EL USUARIO
    let tbody = d3.select("tbody");
    tbody.html("");
// CAPTURAR EN UNA NUEVA VARIABLE LOS VALORES CAPTURADOS POR EL USUARIO
    let inputValue = d3.select("#datetime").property("value");
    console.log(inputValue);

    for(let i = 0; i<tableData.lenght; i++){

        console.log(inputValue)

        if(tableData[i].datetime === inputValue) {
            console.log(i)
    // INCRUSTAR EN EL HTML FILE EL RESULTADO DE LA CAPTURA
            let tbody = d3.select("tbody");
            let row = tbody.append("tr");

            row.append("td").text(tableData[i].datetime)
            row.append("td").text(tableData[i].city)
            row.append("td").text(tableData[i].state)
            row.append("td").text(tableData[i].country)
            row.append("td").text(tableData[i].shape)
            row.append("td").text(tableData[i].durationMinutes)
            row.append("td").text(tableData[i].comments)
        }
    }
};
// CREAR LISTENERS PARA BOTON Y FORMULARIO
button.on("click", printResult);
input.on("submit", printResult);
