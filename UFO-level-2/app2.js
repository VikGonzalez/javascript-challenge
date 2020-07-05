// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// CONSOLE LOG UFO DATA
console.log(tableData);


// // PREVIO
// // USE D3 TO APPEND
// // LOOP TABLE
// data.forEach(d=>{
//     let row= tbody.append("tr")

//     // CREATE A TDATA AND APPEND A ROW
//     Object.values(d).forEach(w=>{
//         // USE D3 TO INSERT VALUES
//         row.append("td").text(w)
//     })
// })

// // SET BUTTON ATTRIBUTES
// let button = d3.select("#filter-btn");

// // SET LISTENER FOR BUTTON
// button.on("click", function(){
//     alert("hola")
// })

// // SET LISTENER FOR INPUT TEXT
// let input = d3.select("#datetime");

// input.on("change", function(){   
//     let newText = d3.event.target.value;
//     console.log(newText)


// // SET FILTER
// let filteredEvents = newText.filter(d=> d.Date===newText)

// console.log(filteredEvents)

// })

// // SET MOUSE ACTION
// // button.on("click", runEnter);
// // // SET CLICK ACTION
// // // input.on("submit", runEnter);



// crear clase busqueda
// class Busqueda {
//     constructor() {
//         // UTILIZAMOS "THIS" PARA HACER REFERENCIA A LAS PROPIEDADES DE LA CLASE
//         // LA CLASE BUSQUEDA TIENE COMO PROPIEDADES DATETIME Y BACKUP 
        
//         this.dateTimes = [tableData];
//         // RESPALDAR DATOS 
//         this.dateTimesBK = this.dateTimes;
//         // LLAMAR AL METODO 
//         this.onInit();
//         console.log(this.dateTimes);
//     }
    // METODO PARA APUNTAR AL TBODY y EJECUTAR OPERACIONES DE VISTA
//     onInit(){
//         let tbody = document.getElementById("cuerpo");
//          //  LIMPIAR TODO EL TBODY       
//          while(tbody.rows.length >0) {
//             tbody.deleteRow(0);
//         }
//         // RELLENAR EL TBODY
//         this.dateTimes.forEach(dateTime => {
//             let row = tbody.insertRow(tbody.rows.length);
//             row.insertCell(0).innerHTML = dateTime.datetime;
//             row.insertCell(1).innerHTML = dateTime.city;
//             row.insertCell(2).innerHTML = dateTime.state;
//             row.insertCell(3).innerHTML = dateTime.country;
//             row.insertCell(4).innerHTML = dateTime.shape;
//             row.insertCell(5).innerHTML = dateTime.duration;
//             row.insertCell(6).innerHTML = dateTime.comments;
//         });
//     }

//     // METODO PARA BUSQUEDA DE DATOS
//     buscar(id){
//         // RECUPERAR EL VALOR DEL INPUT
//         let busqueda = document.getElementById(id).value;
//         // RESTAURAR LA LISTA DE PERSONAS
//         this.dateTimes = this.dateTimesBK;
//         this.dateTimes = this.dateTimes.filter(dateTime => {
//             return dateTime.datetime.toLowerCase().indexOf(busqueda) > -1;
//         });
//         // Actualizar la busqueda
//         this.onInit();
//     }
// }
// let busqueda = new Busqueda();
// let form = document.getElementById("busquedaForm")
// form.addEventListener('submit', () => {
//     busqueda.buscar('valor');
// });