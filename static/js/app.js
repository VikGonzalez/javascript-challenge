let tbody = d3.select("tbody");
let button = d3.select("boton");
let form = d3.select("formulario");

function ufoFilter(){
    d3.event.preventDefault();

    d3.selectAll("td").remove();

    let dateInput = d3.select("#date-input");
    let inputDate = inputSelect.property("value");



    for (var i = 0; i < 2; i++){
        if (dateformat[i][0]=== "0") {
            dateFormated += dateformat[1][1] + "/"
        } else {
            dateFormated += dateformat[i] + "/"
        }
    }

    dateFormated += dateformat[2]

    let query = {
        datetime : dateFormated,
        state : inputState,
        shape : inputShape
    };

    console.log(query);

    let filteredData = ufoData.filter(function(ufo){
        for (let key in query) {
            if (ufo[key] != query[key])
            return false;
        }
        return true;
    });

    if (filteredData.length === 0) {
        alert("Data not Found")     
    };

    console.log("UFOs filtered: ", filteredData);

    filteredData.forEach(d=> {
        let row = tbody.append("tr")
        Object.values(d).forEach(w => {
            let cell = row.append("td").text(w)
        })
    });
}

button.on("click", ufoFilter);
form.on("submit", ufoFilter);

//Bonus
// let cityInput = d3.select("#city-input")
// let inputCity = inputSelect.property("value")

// let stateInput = d3.select("#state-input");
// let inputState = inputSelect.property("value");

// let shapeInput = d3.select("#shape-input")
// let inputShape = inputSelect.property("value")